import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
// import { BiSearchAlt2, BiX } from "react-icons/bi";
// import PropTypes from 'prop-types';
// import { useSnackbar } from 'notistack';
import { connect } from 'react-redux';

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

const Blog = ({language}) => {
    // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [blogs, setBlogs] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [ordering, setOrdering] = useState({orderBy: 'created_at', direction: '-'});
    const [isLoading, setIsLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    
    const handleSearch = () => {
        const filteredBlogs = blogs.filter((blog) => {
            return blog.title.toLowerCase().includes(searchKey.toLowerCase()) ||
            blog.content.toLowerCase().includes(searchKey.toLowerCase());
        });
        setBlogs(filteredBlogs);
        setIsSearching(true);
    };

    ////
    // const handleSearch = () => {
    //     const threshold = 0.9;
    
    //     const filteredBlogs = blogs.filter((blog) => {
    //       const title = blog.title.toLowerCase();
    //       const content = blog.content.toLowerCase();
    //       const searchString = searchKey.toLowerCase();
    
    //       const minLengthForMatch = Math.floor(searchString.length * threshold);
    
    //       const titleMatches = searchString.split('').filter(char => title.includes(char)).length;
    //       const contentMatches = searchString.split('').filter(char => content.includes(char)).length;
    
    //       return titleMatches + contentMatches >= minLengthForMatch;
    //     });
    
    //     setFilteredBlogs(filteredBlogs);
    //     setBlogs(filteredBlogs);
    //     console.log(blogs);
    // };
    
    ////

    const clearSearch = () => {
        setSearchKey("");
        setIsSearching(false);
        fetchBlogs();
    };

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
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false)
        }, 5000)
    }, []);


    const fetchBlogs = () => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url: `${import.meta.env.VITE_SERVER_URL}/website/blog-list/`,
            params: {
                key: searchKey,
                order_by: ordering.orderBy,
                direction: ordering.direction,
                // id: filtering.id,
                offset: 0,
                limit: 1000
            },
        })
        .then((response) => {
            setIsLoading(false);
            if (response.status === 200) {
                setBlogs(response.data);
            } else {
                console.log('BLOG LIST FETCH FAILED', response.status);
            }
        })
        .catch((error) => {
            setIsLoading(false);
            console.log('BLOG LIST FETCH ERROR', error);
        })
    }

    return (
        <VBox className="pb-2">
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
                            <Category isMobile={isMobile} />
                            <VBox justify="center" className="mb-3">
                                <SearchBar
                                    className='pl-1'
                                    value={searchKey}
                                    onChange={(e) => setSearchKey(e.target.value)}
                                    placeholder={blogData.bloglist.search[language]}
                                />
                                <HBox className="mt-2" justify="center">
                                    <Button size='sm' className="mx-2" cursor="pointer" onClick={handleSearch}>
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
                                {blogs.length === 0 ? (
                                    <P2>No result.</P2>
                                ) : (
                                    blogs.map((blog, index) => (
                                        <Contents
                                            isMobile={isMobile}
                                            id={blog.id}
                                            key={index}
                                            title={blog.title}
                                            content={blog.content}
                                            created_at={blog.created_at}
                                        />
                                    ))
                                )}
                            </VBox>
                        </VBox> 
                    ):(
                        <HBox style={{ margin:"4% 8%", flexWrap: "nowrap" }}>
                            <Category isMobile={isMobile} style={{ width: "25%" }} /> 
                            <VBox className="ml-2" >
                                <HBox align="center" className="ml-5 mb-6">
                                    <SearchBar
                                        className="pl-1 mr-1"
                                        value={searchKey}
                                        onChange={(e) => setSearchKey(e.target.value)}
                                        placeholder={blogData.bloglist.search[language]}
                                    />
                                    <Button onClick={handleSearch} cursor="pointer">{blogData.bloglist.btn1[language]}</Button>
                                    {searchKey && (
                                        <Button className="ml-1" color='second' cursor="pointer" onClick={clearSearch}>
                                            {blogData.bloglist.btn2[language]}
                                        </Button>
                                    )}
                                </HBox>
                                <VBox className="ml-2">
                                    {blogs.length === 0 ? (
                                        <P2>No result.</P2>
                                    ) : (
                                        blogs.map((blog, index) => (
                                            <Contents
                                                isMobile={isMobile}
                                                id={blog.id}
                                                key={index}
                                                title={blog.title}
                                                content={blog.content}
                                                created_at={blog.created_at}
                                            />
                                        ))
                                    )}
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