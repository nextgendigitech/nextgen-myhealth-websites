import { useState, useEffect } from "react";

import { HBox, VBox } from "../../components/Containers";
import Header from "./components/Header";
import Category from "./components/Category";
import Contents from "./components/Contents";
import responsive from '../../config/responsive';



const Blog = () => {
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

    return (
        <VBox>
            <Header isMobile={isMobile}/>
            <HBox style={{ margin: isMobile ? "4% 4%" : "4% 8%" }}>
                <Category isMobile={isMobile} style={{ width: "25%" }} />
                <Contents isMobile={isMobile} className="ml-2" style={{ width: "40%" }} />
            </HBox> 
        </VBox> 
    );
}

export default Blog;