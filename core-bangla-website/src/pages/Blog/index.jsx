import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { connect } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import colors from "../../config/colors";
import { HBox, VBox } from "../../components/Containers";
import { P2 } from "../../components/Typography";
import { Button } from "../../components/Buttons";
import ClipLoader from "react-spinners/ClipLoader";
import Header from "./components/Header";
import Category from "./components/Category";
import Contents from "./components/Contents";
import responsive from '../../config/responsive';
import { blogData } from "../../data";

const SearchBar = styled.input`
    height: 2.5em;
    background-color: ${colors.lightGrey};
    border: 1px solid ${colors.grey};
    border-radius: 10px;
    box-shadow: 0px 2px 3px ${colors.grey};
    font-size: 1rem;

    &:hover {
        background-color: ${colors.lightGrey};
        color: ${colors.darkGrey};
    }
`

const VerticalLine = styled.div`
    border-left: 1px solid ${colors.green};
    margin-left: 8px;
`

const Blog = ({language}) => {
    const pageSize = 3;
    const [blogs, setBlogs] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [count, setCount] = useState(null);
    const [page, setPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        const setResponsiveness = () => {
            let orientation = !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape';

            if (orientation === 'portrait' || window.innerWidth < responsive.mobileThresh) {
                setIsMobile(true);
            }
            else {
                setIsMobile(false);
            }
        }
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness());

        return () => window.removeEventListener('resize', () => setResponsiveness());
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        fetchBlogs();
    }, [page, pageSize, selectedCategory]);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);        
    }

    const fetchBlogs = (key=searchKey, categoryKey=selectedCategory) => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url: `${import.meta.env.VITE_SERVER_URL}/website/blog-list/`,
            params: {
                key: key,
                categoryKey: categoryKey,
                offset: (page-1) * pageSize,
                limit: (page-1) * pageSize + pageSize,
            },
        })
        .then((response) => {
            setIsLoading(false);
            if (response.status === 200) {
                setBlogs(response.data.blogs);
                setCount(response.data.count);
                if (categoryKey === setSelectedCategory) {
                    setPage(1);
                }
            } else {
                console.log('BLOG LIST FETCH FAILED', response.status);
            }
        })
        .catch((error) => {
            setIsLoading(false);
            console.log('BLOG LIST FETCH ERROR', error);
        })
    }

    const handleSearch = () => {
        setSelectedCategory("");
        setCount(null);
        setPage(1);
        setBlogs([]);
        fetchBlogs();
    };

    const clearSearch = () => {
        setSearchKey("");
        setPage(1);
        setBlogs([]);
        fetchBlogs("");
    };

    return (
        <VBox className="mb-4">
            <Header isMobile={isMobile} language={language}/>
            {
                isLoading ?
                <HBox justify="center" align="center" className="p-5">
                    <ClipLoader
                        color= {colors.green}
                        loading={isLoading}
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </HBox>
                :
                <VBox className={isMobile ? "mb-2" : "mb-4"}>
                    {isMobile ? (
                        <VBox style={{ margin: "4% 4%", flexWrap: "nowrap" }}>
                            <Category 
                                isMobile={isMobile}
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                                setPage={setPage}
                            />
                            <VBox justify="center" className="mb-3">
                                <SearchBar
                                    className='pl-1'
                                    value={searchKey}
                                    onChange={(e) => setSearchKey(e.target.value)}
                                    placeholder={blogData.bloglist.search[language]}
                                />
                                <HBox className="mt-2" justify="center">
                                    <Button size='sm' className="mx-2" cursor="pointer" onClick={() => handleSearch()}>
                                        {blogData.bloglist.btn1[language]}
                                    </Button>
                                    {searchKey && (
                                        <Button size='sm' className="mx-2" color="second" cursor="pointer" onClick={clearSearch}>
                                            {blogData.bloglist.btn2[language]}
                                        </Button>
                                    )}
                                </HBox>
                            </VBox> 
                            <VBox align="center">
                                {
                                    blogs.length === 0 ? (
                                        <P2 className="ml-5">No blogs found.</P2>
                                    ) : (
                                    blogs.map((blog, index) => (
                                        <Contents
                                            isMobile={isMobile}
                                            id={blog?.id}
                                            key={index}
                                            title={blog?.title}
                                            content={blog?.content}
                                            createdAt={blog?.created_at}
                                            coverImage={blog?.cover_image}
                                        />
                                    )))}
                                </VBox>
                                <VBox justify="center" align="center" className="mt-6">
                                    <Stack spacing={5}>
                                        <Pagination   
                                            count={Math.ceil(count / pageSize)}
                                            page={page} 
                                            color="primary"
                                            onChange={handlePageChange}
                                        />
                                    </Stack>
                                </VBox>
                            </VBox>
                    ):(
                        <HBox style={{ margin:"4% 8%", flexWrap: "nowrap" }}>
                            <Category 
                                isMobile={isMobile} 
                                style={{ width: "25%" }}
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                                setPage={setPage}
                            />
                            <VerticalLine/> 
                            <VBox style={{ width: "100%" }}>
                                <HBox align="center" className="ml-5 mb-6 mt-2">
                                    <SearchBar
                                        className="pl-1 mr-1"
                                        value={searchKey}
                                        onChange={(e) => setSearchKey(e.target.value)}
                                        placeholder={blogData.bloglist.search[language]}
                                    />
                                    <Button onClick={() => handleSearch()} cursor="pointer">{blogData.bloglist.btn1[language]}</Button>
                                    {searchKey && (
                                        <Button className="ml-1" color='second' cursor="pointer" onClick={clearSearch}>
                                            {blogData.bloglist.btn2[language]}
                                        </Button>
                                    )}
                                </HBox>
                                <VBox>
                                    {
                                    blogs.length === 0 ? (
                                        <P2 className="ml-5">No blogs found.</P2>
                                    ) : (
                                    blogs.map((blog, index) => (
                                        <Contents
                                            isMobile={isMobile}
                                            id={blog?.id}
                                            key={index}
                                            title={blog?.title}
                                            content={blog?.content}
                                            createdAt={blog?.created_at}
                                            coverImage={blog?.cover_image}
                                        />
                                    )))}
                                </VBox>
                                <VBox justify="center" align="center">
                                    <Stack spacing={5}>
                                        <Pagination   
                                            count={Math.ceil(count / pageSize)}
                                            page={page} 
                                            color="primary"
                                            onChange={handlePageChange}
                                        />
                                    </Stack>
                                </VBox>
                            </VBox>
                        </HBox> 
                    )}
                </VBox>
            }
        </VBox> 
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(Blog);