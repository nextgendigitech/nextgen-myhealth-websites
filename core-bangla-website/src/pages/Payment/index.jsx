import { useState, useEffect } from "react";

import { VBox } from "../../components/Containers";
import Banner from './components/Banner';
import PaymentMethods from './components/PaymentMethods';
import responsive from '../../config/responsive';

const Payment = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

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
            <PaymentMethods isMobile={isMobile} />
        </VBox>
    );
}

export default Payment;