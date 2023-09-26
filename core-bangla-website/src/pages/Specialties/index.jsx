import { useState, useEffect } from "react";

import { VBox } from "../../components/Containers";
import MedicineSection from "./components/MedicineSection";
import SurgerySection from "./components/SurgerySection";
import responsive from '../../config/responsive';

const Specialties = () => {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    });

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
            <MedicineSection isMobile={isMobile} />
            <SurgerySection isMobile={isMobile} />
        </VBox>
    );
}

export default Specialties;