import styled from "styled-components";

import { VBox, HBox } from "../../../components/Containers";
import { H3 } from '../../../components/Typography';
import SpecialtyCard from './SpecialtyCard';
import InternalMedicineImage from '../../../assets/images/specialties/internal_medicine_2.png';
import CardiologyImage from '../../../assets/images/specialties/cardiology_2.png';
import RespiratoryMedicineImage from '../../../assets/images/specialties/respiratory_medicine_2.png';
import NeurologyImage from '../../../assets/images/specialties/neurology_2.png';
import NephrologyImage from '../../../assets/images/specialties/nephrology.png';
import GastroenterologyImage from '../../../assets/images/specialties/gastroenterology.png';
import HepatologyImage from '../../../assets/images/specialties/hepatology.png';
import EndocrinologyImage from '../../../assets/images/specialties/endocrinology.png';
import PediatricsImage from '../../../assets/images/specialties/pediatrics.png';
import OncologyImage from '../../../assets/images/specialties/oncology.png';
import RheumatologyImage from '../../../assets/images/specialties/rheumatology.png';
import HematologyImage from '../../../assets/images/specialties/hematology.png';
import DermatologyImage from '../../../assets/images/specialties/dermatology.png';
import PsychiatryImage from '../../../assets/images/specialties/psychiatry.png';
import PhysicalMedicineImage from '../../../assets/images/specialties/physical_medicine.png';
import AestheticDermatologyImage from '../../../assets/images/specialties/aesthetic_dermatology.png';

const Container = styled(VBox)`
    
`

const MedicineSection = ({ isMobile }) => {
    return (
        <Container align='center'>
            <H3 className='bold mt-7'>মেডিসিন</H3>
            <HBox justify='center'>
                <SpecialtyCard isMobile={isMobile} image={InternalMedicineImage} specialtyBang='ইন্টারনাল মেডিসিন' specialtyEng='Internal Medicine' />
                <SpecialtyCard isMobile={isMobile} image={CardiologyImage} specialtyBang='হৃদরোগ' specialtyEng='Cardiology' />
                <SpecialtyCard isMobile={isMobile} image={RespiratoryMedicineImage} specialtyBang='ফুসফুস' specialtyEng='Respiratory Medicine' />
                <SpecialtyCard isMobile={isMobile} image={NeurologyImage} specialtyBang='স্নায়ুরোগ' specialtyEng='Neurology' />
                <SpecialtyCard isMobile={isMobile} image={NephrologyImage} specialtyBang='কিডনি' specialtyEng='Nephrology' />
                <SpecialtyCard isMobile={isMobile} image={GastroenterologyImage} specialtyBang='পরিপাকতন্ত্র' specialtyEng='Gastroenterology' />
                <SpecialtyCard isMobile={isMobile} image={HepatologyImage} specialtyBang='লিভার' specialtyEng='Hepatology' />
                <SpecialtyCard isMobile={isMobile} image={EndocrinologyImage} specialtyBang='হরমোন' specialtyEng='Endocrinology' />
                <SpecialtyCard isMobile={isMobile} image={PediatricsImage} specialtyBang='শিশুরোগ' specialtyEng='Pediatrics' />
                <SpecialtyCard isMobile={isMobile} image={OncologyImage} specialtyBang='ক্যান্সার' specialtyEng='Oncology' />
                <SpecialtyCard isMobile={isMobile} image={RheumatologyImage} specialtyBang='বাতরোগ' specialtyEng='Rheumatology' />
                <SpecialtyCard isMobile={isMobile} image={HematologyImage} specialtyBang='রক্তরোগ' specialtyEng='Hematology' />
                <SpecialtyCard isMobile={isMobile} image={DermatologyImage} specialtyBang='চর্ম ও যৌনরোগ' specialtyEng='Dermatology & Venereology' />
                <SpecialtyCard isMobile={isMobile} image={PsychiatryImage} specialtyBang='মনোরোগ' specialtyEng='Psychiatry' />
                <SpecialtyCard isMobile={isMobile} image={PhysicalMedicineImage} specialtyBang='ফিজিক্যাল মেডিসিন' specialtyEng='Physical Medicine & Rehabilitation' />
                <SpecialtyCard isMobile={isMobile} image={AestheticDermatologyImage} specialtyBang='এস্থেটিক ডার্মাটোলজি' specialtyEng='Aesthetic Dermatology' />
            </HBox>
        </Container>
    );
}

export default MedicineSection;