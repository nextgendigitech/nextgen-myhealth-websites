import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { HBox, VBox } from "../../../components/Containers";
import { P2, P3 } from "../../../components/Typography";
import noImage from '../../../assets/images/no-image.png';

const Article = ({isMobile, coverImage, title}) => {
    return (
        <VBox style={{ width: isMobile? "40%" : "25%" }}>
            {coverImage?
                <img 
                    src={`${import.meta.env.VITE_SERVER_URL}${coverImage}`}  
                    className="my-2"
                    style={{ width: isMobile? "120px" : "150px", height: isMobile? "120px" : "110px" }}
                /> 
                : 
                <img 
                    src={noImage} 
                    className="my-2"
                    style={{ width: isMobile? "120px" : "150px", height: isMobile? "120px" : "110px" }}
                /> 
            }
            <P3>{title}</P3>
        </VBox>
    )
}

const ReadMore = ({isMobile, blogId}) => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
            fetchBlogs();
    }, [blogId]);

    const fetchBlogs = () => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url: `${import.meta.env.VITE_SERVER_URL}/website/blog-suggestion-list/`,
            params: {
                blog_id: blogId,
                offset: 0,
                limit: 4
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
        <VBox className={isMobile ? "mt-3 pb-3" : "mt-5 pb-8"}>
            <P2>Read Related Articles...</P2>
            <HBox className="mt-1" justify="space-between" style={{ flexWrap: isMobile? "" : "nowrap" }} >
                {
                    blogs.length === 0 ? (
                        <></>
                    ) : (
                    blogs.map((blog) => ( 
                        <Link
                            key={blog?.id}
                            className='clickable'
                            to={`/blog-content/${blog?.id}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <Article
                                isMobile={isMobile}
                                title={blog?.title}
                                coverImage={blog?.cover_image}
                            /> 
                        </Link>   
                    )))
                }
            </HBox>
        </VBox>
    )
}

export default ReadMore;