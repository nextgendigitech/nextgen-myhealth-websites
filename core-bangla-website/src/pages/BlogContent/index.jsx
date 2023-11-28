import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { connect } from 'react-redux';

import { VBox } from "../../components/Containers";
import ContentBody from "./components/ContentBody";
import AboutAuthor from "./components/AboutAuthor";
import ReadMore from "./components/ReadMore";
import responsive from '../../config/responsive';

const BlogContent = ({language}) => {
    let { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [blog, setBlog] = useState({});
    const [isMobile, setIsMobile] = useState(false);

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
        setIsLoading(true);
            fetchBlog();
    }, [id]);

    const fetchBlog = () => {
        setIsLoading(true);
        axios({
            method: "GET",
            url: `${import.meta.env.VITE_SERVER_URL}/website/blog-details/`,
            params: {
                id: id,
                offset: 0,
                limit: 1
            },
        })
        .then((response) => {
            setIsLoading(false);
            if (response.status === 200) {
                setBlog(response.data);
            } else {
                console.log("BLOG CONTENT FETCH FAILED", response.status);
            }
        })
        .catch((error) => {
            setIsLoading(false);
            console.log("BLOG CONTENT FETCH ERROR", error);
        })
    }

    return (  
        <VBox className={isMobile ? "mx-2 mt-1" : "mx-8 px-6"}>
            <ContentBody 
                language={language}
                isMobile={isMobile} 
                id={id}
                title={blog?.title}
                content={blog?.content}
                createdAt={blog?.created_at}
                coverImage={blog?.cover_image}
                blogCategory={blog?.category?.length ? blog.category : ""}
            />
            <AboutAuthor 
                isMobile={isMobile}
                createdAt={blog?.created_at}
                authorName={blog?.author?.name}
                authorDetails={blog?.author?.details}
                authorImage={blog?.author?.image}
            />
            <ReadMore 
                isMobile={isMobile}
                blogId={id}
            />
        </VBox>
    )
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(BlogContent);