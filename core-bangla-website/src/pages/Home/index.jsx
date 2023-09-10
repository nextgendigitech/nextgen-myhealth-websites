import { useState, useEffect } from "react";

import { VBox } from "../../components/Containers";
import Banner from "./components/Banner";
import ShortIntro from "./components/ShortIntro";
import WhyUs from "./components/WhyUs";
import SpecialtiesSummary from "./components/SpecialtiesSummary";
import BookingSteps from "./components/BookingSteps";
import CustomerReview from "./components/CustomerReview";
import JoinDoctor from "./components/JoinDoctor";
import responsive from '../../config/responsive';

const Home = () => {
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

    return (
        <VBox>
            <Banner isMobile={isMobile} />
            <ShortIntro isMobile={isMobile} />
            <WhyUs isMobile={isMobile} />
            <SpecialtiesSummary isMobile={isMobile} />
            <BookingSteps isMobile={isMobile} />
            <CustomerReview isMobile={isMobile} />
            <JoinDoctor isMobile={isMobile} />
        </VBox>
    );
}

export default Home;