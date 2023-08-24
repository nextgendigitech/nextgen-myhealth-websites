import { useEffect } from "react";

import { VBox } from "../../components/Containers";
import MedicineSection from "./components/MedicineSection";
import SurgerySection from "./components/SurgerySection";

const Specialties = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <VBox>
            <MedicineSection />
            <SurgerySection />
        </VBox>
    );
}

export default Specialties;