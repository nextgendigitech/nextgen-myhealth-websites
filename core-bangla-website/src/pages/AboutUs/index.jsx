import { useState, useEffect } from "react";

import { VBox } from "../../components/Containers";
import Banner from "./components/Banner";
import WhoWeAre from "./components/WhoWeAre";
import OurAdvantages from "./components/OurAdvantages";
import responsive from "../../config/responsive";
import colors from "../../config/colors";

const AboutUs = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const setResponsiveness = () => {
            let orientation = !navigator.maxTouchPoints ? "desktop" : !window.screen.orientation.angle ? "portrait" : "landscape";
    
            if (orientation === "portrait" || window.innerWidth < responsive.mobileThresh) {
                setIsMobile(true);
            }
            else {
                setIsMobile(false);
            }
        }
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => window.removeEventListener("resize", () => setResponsiveness());
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <VBox style={{ backgroundColor: colors.lightGrey }}>
            <Banner isMobile={isMobile}/>
            <WhoWeAre isMobile={isMobile}/>
            <OurAdvantages isMobile={isMobile}/>
        </VBox>
    );
}

export default AboutUs;