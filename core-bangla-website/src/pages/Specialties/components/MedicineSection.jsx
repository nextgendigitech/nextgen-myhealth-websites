import styled from "styled-components";

import { VBox, HBox } from "../../../components/Containers";
import { H3 } from '../../../components/Typography';
import SpecialtyCard from './SpecialtyCard';
import InternalMedicineImage from '../../../assets/images/internal_medicine_2.png';
import CardiologyImage from '../../../assets/images/cardiology_2.png';
import RespiratoryMedicineImage from '../../../assets/images/respiratory_medicine_2.png';
import NeurologyImage from '../../../assets/images/neurology_2.png';
import NephrologyImage from '../../../assets/images/nephrology.png';
import GastroenterologyImage from '../../../assets/images/gastroenterology.png';
import HepatologyImage from '../../../assets/images/hepatology.png';
import EndocrinologyImage from '../../../assets/images/endocrinology.png';
import PediatricsImage from '../../../assets/images/pediatrics.png';
import OncologyImage from '../../../assets/images/oncology.png';
import RheumatologyImage from '../../../assets/images/rheumatology.png';
import HematologyImage from '../../../assets/images/hematology.png';
import DermatologyImage from '../../../assets/images/dermatology.png';
import PsychiatryImage from '../../../assets/images/psychiatry.png';
import PhysicalMedicineImage from '../../../assets/images/physical_medicine.png';
import AestheticDermatologyImage from '../../../assets/images/aesthetic_dermatology.png';



const Container = styled(VBox)`
    
`

const MedicineSection = () => {
    return (
        <Container align='center'>
            <H3 className='bold mt-7'>মেডিসিন</H3>
            <HBox justify='center'>
                <SpecialtyCard image={InternalMedicineImage} text='ইন্টারনাল মেডিসিন'></SpecialtyCard>
                <SpecialtyCard image={CardiologyImage} text='হৃদরোগ'></SpecialtyCard>
                <SpecialtyCard image={RespiratoryMedicineImage} text='ফুসফুস'></SpecialtyCard>
                <SpecialtyCard image={NeurologyImage} text='স্নায়ুরোগ'></SpecialtyCard>
                <SpecialtyCard image={NephrologyImage} text='কিডনি'></SpecialtyCard>
                <SpecialtyCard image={GastroenterologyImage} text='পরিপাকতন্ত্র'></SpecialtyCard>
                <SpecialtyCard image={HepatologyImage} text='লিভার'></SpecialtyCard>
                <SpecialtyCard image={EndocrinologyImage} text='হরমোন'></SpecialtyCard>
                <SpecialtyCard image={PediatricsImage} text='শিশুরোগ'></SpecialtyCard>
                <SpecialtyCard image={OncologyImage} text='ক্যান্সার'></SpecialtyCard>
                <SpecialtyCard image={RheumatologyImage} text='বাতরোগ'></SpecialtyCard>
                <SpecialtyCard image={HematologyImage} text='রক্তরোগ'></SpecialtyCard>
                <SpecialtyCard image={DermatologyImage} text='চর্ম ও যৌনরোগ'></SpecialtyCard>
                <SpecialtyCard image={PsychiatryImage} text='মনোরোগ'></SpecialtyCard>
                <SpecialtyCard image={PhysicalMedicineImage} text='ফিজিক্যাল মেডিসিন'></SpecialtyCard>
                <SpecialtyCard image={AestheticDermatologyImage} text='এস্থেটিক ডার্মাটোলজি'></SpecialtyCard>
            </HBox>
        </Container>
    );
}

export default MedicineSection;