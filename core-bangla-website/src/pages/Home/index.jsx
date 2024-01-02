import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { VBox } from "../../components/Containers";
import Banner from "./components/Banner";
import ShortIntro from "./components/ShortIntro";
import WhyUs from "./components/WhyUs";
import SpecialtiesSummary from "./components/SpecialtiesSummary";
import BookingSteps from "./components/BookingSteps";
import CustomerReview from "./components/CustomerReview";
import JoinDoctor from "./components/JoinDoctor";
import QRcode from "./components/QRcode";
import responsive from '../../config/responsive';
import colors from "../../config/colors";
import { toggleLang } from "../../services/actions/generalAction";

const Home = ({ toggleLang }) => {
    const [isMobile, setIsMobile] = useState(false);
    let { language } = useParams();

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
        if (language) {
            if (language === 'bangla') toggleLang('bang');
            else if (language === 'english') toggleLang('eng');
        };
        window.scrollTo(0, 0);
    });

    return (
        <VBox style={{ backgroundColor: colors.lightGrey }}>
            <Banner isMobile={isMobile} />
            <ShortIntro isMobile={isMobile} />
            <WhyUs isMobile={isMobile} />
            <SpecialtiesSummary isMobile={isMobile} />
            <BookingSteps isMobile={isMobile} />
            <CustomerReview isMobile={isMobile} />
            <JoinDoctor isMobile={isMobile} />
            <QRcode isMobile={isMobile} />
        </VBox>
    );
}

export default connect(null, { toggleLang })(Home);