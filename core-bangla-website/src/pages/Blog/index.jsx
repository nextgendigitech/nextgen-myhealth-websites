import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars-2';
import ReactPaginate from "react-paginate";

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
    const pageSize = 10;
    const [blogs, setBlogs] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(pageSize);
    const [hasMore, setHasMore] = useState(true);
    const [count, setCount] = useState(null);
    const [pageNumber, setPageNumber] = useState(0);

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

    const handlePageChange = ({ selected }) => {
        setPageNumber(selected);
    };

    const fetchBlogs = () => {
        setIsLoading(true);
        const newOffset = pageNumber * pageSize;
        axios({
            method: 'GET',
            url: `${import.meta.env.VITE_SERVER_URL}/website/blog-list/`,
            params: {
                key: searchKey,
                offset: newOffset,
                limit: limit
            },
        })
        .then((response) => {
            setIsLoading(false);
            if (response.status === 200) {
                setBlogs(blogs.concat(response.data.blogs));
                setHasMore(response.data.has_more);
                setCount(response.data.count);
                setOffset(offset+pageSize);
                setLimit(limit+pageSize);
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
        setCount(null);
        setOffset(0);
        setLimit(pageSize);
        setHasMore(true);
        setBlogs([]);
    };

    const clearSearch = () => {
        setSearchKey("");
        setCount(null);
        setOffset(0);
        setLimit(pageSize);
        setHasMore(true);
        setBlogs([]);
    };

    const handleFetchBlogs = () => {
        if (hasMore & !isLoading) {
            fetchBlogs();
        }
    }

    const handleScrollUpdate = (values) => {
        const { scrollTop, scrollHeight, clientHeight } = values;
        const pad = 100;
        const t = ((scrollTop + pad) / (scrollHeight - clientHeight));
        if (t > 1) handleFetchBlogs();
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
                            <Category isMobile={isMobile} />
                            <VBox justify="center" className="mb-3" style={{ position: 'fixed' }}>
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
                                {
                                blogs.length === 0 ? (
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
                                )
                                }
                            </VBox>
                        </VBox> 
                    ):(
                        <HBox style={{ margin:"4% 8%", flexWrap: "nowrap" }}>
                            <Category isMobile={isMobile} style={{ width: "25%" }} /> 
                            <VBox style={{ width: "100%" }}>
                                <HBox align="center" className="ml-5 mb-6 mt-2">
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
                                {/* <Scrollbars
                                    style={{ height: '100vh', scrollMarginLeft: "200px" }}
                                    onUpdate={handleScrollUpdate}
                                    renderThumbVertical={({ style, ...props }) =>
                                        <div {...props} style={{ ...style, backgroundColor: colors.darkGrey, width: '5px', borderRadius: '3px', opacity: '0.4'}}/>
                                }>
                                    {blogs.length ?
                                        <VBox className="ml-2">
                                            {
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
                                            }
                                        </VBox>
                                    : (
                                        <VBox className="ml-4">
                                            <P2>No result.</P2>
                                        </VBox>
                                    )}
                                </Scrollbars> */}
                                <ReactPaginate
                                    pageCount={Math.ceil(count / pageSize)}
                                    pageRangeDisplayed={5}
                                    marginPagesDisplayed={2}
                                    onPageChange={handlePageChange}
                                    containerClassName="pagination"
                                    activeClassName="active"
                                />
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