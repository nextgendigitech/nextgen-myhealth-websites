import { VBox } from "../../components/Containers";
import MedicineSection from "./components/MedicineSection";
import SurgerySection from "./components/SurgerySection";

const Specialties = () => {
    return (
        <VBox>
            <MedicineSection></MedicineSection>
            <SurgerySection></SurgerySection>
        </VBox>
    );
}

export default Specialties;