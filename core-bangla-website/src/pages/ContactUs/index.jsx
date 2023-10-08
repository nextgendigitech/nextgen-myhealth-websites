import { useState, useEffect } from "react";
import { SnackbarProvider } from "notistack";
import { VBox } from "../../components/Containers";
import Map from "./components/Map";
import Form from "./components/Form";
import responsive from '../../config/responsive';
import colors from "../../config/colors";

const ContactUs = () => {
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
        <VBox style={{ backgroundColor: colors.lightGrey }}>
            <Map isMobile={isMobile}/>
            <SnackbarProvider maxSnack={1}>
                <Form isMobile={isMobile}/>
            </SnackbarProvider>
        </VBox>
    );
}

export default ContactUs;