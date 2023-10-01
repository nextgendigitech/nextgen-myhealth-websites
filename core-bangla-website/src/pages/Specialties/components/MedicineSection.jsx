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
import GeneralPhysicianImage from '../../../assets/images/specialties/generalphysician.png';
import { specialtyEtoB } from "../../../data";
import { specialtiesData } from "../../../data";

const Container = styled(VBox)`
    
`

const MedicineSection = ({ isMobile }) => {
    return (
        <Container align='center'>
            <H3 className='bold mt-7'>{specialtiesData.specialtysection.head1['bang']}</H3>
            <HBox justify='center'>
                <SpecialtyCard isMobile={isMobile} image={GeneralPhysicianImage} specialtyBang={specialtyEtoB['General Physician']} specialtyEng='General Physician' />
                <SpecialtyCard isMobile={isMobile} image={InternalMedicineImage} specialtyBang={specialtyEtoB['Internal Medicine']} specialtyEng='Internal Medicine' />
                <SpecialtyCard isMobile={isMobile} image={CardiologyImage} specialtyBang={specialtyEtoB['Cardiology']} specialtyEng='Cardiology' />
                <SpecialtyCard isMobile={isMobile} image={RespiratoryMedicineImage} specialtyBang={specialtyEtoB['Respiratory Medicine']} specialtyEng='Respiratory Medicine' />
                <SpecialtyCard isMobile={isMobile} image={NeurologyImage} specialtyBang={specialtyEtoB['Neurology']} specialtyEng='Neurology' />
                <SpecialtyCard isMobile={isMobile} image={NephrologyImage} specialtyBang={specialtyEtoB['Nephrology']} specialtyEng='Nephrology' />
                <SpecialtyCard isMobile={isMobile} image={GastroenterologyImage} specialtyBang={specialtyEtoB['Gastroenterology']} specialtyEng='Gastroenterology' />
                <SpecialtyCard isMobile={isMobile} image={HepatologyImage} specialtyBang={specialtyEtoB['Hepatology']} specialtyEng='Hepatology' />
                <SpecialtyCard isMobile={isMobile} image={EndocrinologyImage} specialtyBang={specialtyEtoB['Endocrinology']} specialtyEng='Endocrinology' />
                <SpecialtyCard isMobile={isMobile} image={PediatricsImage} specialtyBang={specialtyEtoB['Pediatrics']} specialtyEng='Pediatrics' />
                <SpecialtyCard isMobile={isMobile} image={OncologyImage} specialtyBang={specialtyEtoB['Oncology']} specialtyEng='Oncology' />
                <SpecialtyCard isMobile={isMobile} image={RheumatologyImage} specialtyBang={specialtyEtoB['Rheumatology']} specialtyEng='Rheumatology' />
                <SpecialtyCard isMobile={isMobile} image={HematologyImage} specialtyBang={specialtyEtoB['Hematology']} specialtyEng='Hematology' />
                <SpecialtyCard isMobile={isMobile} image={DermatologyImage} specialtyBang={specialtyEtoB['Dermatology & Venereology']} specialtyEng='Dermatology & Venereology' />
                <SpecialtyCard isMobile={isMobile} image={PsychiatryImage} specialtyBang={specialtyEtoB['Psychiatry']} specialtyEng='Psychiatry' />
                <SpecialtyCard isMobile={isMobile} image={PhysicalMedicineImage} specialtyBang={specialtyEtoB['Physical Medicine & Rehabilitation']} specialtyEng='Physical Medicine & Rehabilitation' />
                <SpecialtyCard isMobile={isMobile} image={AestheticDermatologyImage} specialtyBang={specialtyEtoB['Aesthetic Dermatology']} specialtyEng='Aesthetic Dermatology' />
            </HBox>
        </Container>
    );
}

export default MedicineSection;