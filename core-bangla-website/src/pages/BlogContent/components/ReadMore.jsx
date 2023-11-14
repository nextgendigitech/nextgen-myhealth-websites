import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import bp from "../../../assets/images/blood_pressure.png";
import { HBox, VBox } from "../../../components/Containers";
import { P2 } from "../../../components/Typography";


const Article = ({isMobile, image, title}) => {
    return (
        <VBox>
            <img src={image} className="my-2" style={{ width: isMobile? "150px" : "220px" }}/>
            <P2 align="center">{title}</P2>
        </VBox>
    )
}

const ReadMore = ({isMobile, blog_category}) => {

    const [blogs, setBlogs] = useState([]);
    const [blogCategory, setBlogCategory] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);


    useEffect(() => {
        fetchBlogs();
    }, [1]);

    const fetchBlogs = (key=selectedCategory) => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url: `${import.meta.env.VITE_SERVER_URL}/website/blog-list/`,
            params: {
                key: key,
            },
        })
        .then((response) => {
            setIsLoading(false);
            if (response.status === 200) {
                setBlogs(response.data.blogs);
            } else {
                console.log('BLOG LIST FETCH FAILED', response.status);
            }
        })
        .catch((error) => {
            setIsLoading(false);
            console.log('BLOG LIST FETCH ERROR', error);
        })
    }

    const fetchBlogCategory = () => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url: `${import.meta.env.VITE_SERVER_URL}/website/blog-category/`,
            params: {
                offset: 0,
                limit: 1000
            },
        })
        .then((response) => {
            setIsLoading(false);
            if (response.status === 200) {
                setBlogCategory(response.data);
            } else {
                console.log('BLOG CATEGORY LIST FETCH FAILED', response.status);
            }
        })
        .catch((error) => {
            setIsLoading(false);
            console.log('BLOG CATEGORY LIST FETCH ERROR', error);
        })
    }


    return (
        <VBox className={isMobile ? "mt-3 pb-3" : "mt-5 pb-8"}>
            <P2>Read More...</P2>
            <HBox className="mt-1" justify="space-between">
                <Article isMobile={isMobile} image={bp} title="Article 1" />
                <Article isMobile={isMobile} image={bp} title="Article 2" />
                <Article isMobile={isMobile} image={bp} title="Article 3" />
                <Article isMobile={isMobile} image={bp} title="Article 4" />
            </HBox>
        </VBox>
    )
}

export default ReadMore;