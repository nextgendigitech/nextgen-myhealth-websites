import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { HBox, VBox } from "../../components/Containers";
import ContentBody from "./components/ContentBody";
import AboutAuthor from "./components/AboutAuthor";
// import ReadMore from "./components/ReadMore";
import responsive from '../../config/responsive';

const Container = styled(VBox)`
    margin-left: 8%;
    margin-right: 8%;
`

const BlogContent = () => {
    let { title } = useParams();
    // const [isLoading, setIsLoading] = useState(false);
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

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetchDoctor();
    // }, []);

    return (
        <Container >
            <ContentBody isMobile={isMobile} title={title}/>
            <AboutAuthor isMobile={isMobile}/>
            {/* <ReadMore/> */}
        </Container>
    )
}

export default BlogContent;