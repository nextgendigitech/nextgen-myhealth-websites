import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { HBox, VBox } from "../../../components/Containers";
import { P2, P3 } from "../../../components/Typography";
import no_image from '../../../assets/images/no-image.png';


const Article = ({isMobile, cover_image, title}) => {
    return (
        <VBox style={{width: "24%"}}>
            {cover_image?
                <img 
                    src={`${import.meta.env.VITE_SERVER_URL}${cover_image}`}  
                    className="my-2"
                    style={{ width: isMobile? "170px" : "150px", height: isMobile? "130px" : "110px" }}
                /> 
                : 
                <img 
                    src={no_image} 
                    className="my-2"
                    style={{ width: isMobile? "170px" : "150px", height: isMobile? "130px" : "110px" }}
                /> 
            }
            <P3>{title}</P3>
        </VBox>
    )
}

const ReadMore = ({isMobile, blog_id}) => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
            fetchBlogs();
    }, [blog_id]);


    const fetchBlogs = () => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url: `${import.meta.env.VITE_SERVER_URL}/website/blogsuggestion-list/`,
            params: {
                id: blog_id,
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
            <HBox className="mt-1" justify="flex-start" style={{ flexWrap:"nowrap" }}>
                {
                    blogs.length === 0 ? (
                        <></>
                    ) : (
                    blogs.map((blog, index) => ( 
                        <Link
                            key={blog?.id}
                            className='clickable'
                            to={`/blog-content/${blog?.id}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <Article
                                isMobile={isMobile}
                                title={blog?.title}
                                cover_image={blog?.cover_image}
                            /> 
                        </Link>   
                    )))
                }
            </HBox>
        </VBox>
    )
}

export default ReadMore;