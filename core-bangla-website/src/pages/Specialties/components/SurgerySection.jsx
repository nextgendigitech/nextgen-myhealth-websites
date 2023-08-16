import styled from "styled-components";

import { VBox, HBox } from "../../../components/Containers";
import { H3 } from '../../../components/Typography';
import SpecialtyCard from './SpecialtyCard';
import GeneralSurgeryImage from '../../../assets/images/general_surgery.png';
import OrthopedicSurgeryImage from '../../../assets/images/orthopedic_surgery.png';
import NeurologySurgeryImage from '../../../assets/images/neurology_2.png';
import GynecologyAndObstetricsImage from '../../../assets/images/gynecology_and_obstetrics.png';
import ENTAndHeadNeckSurgeryImage from '../../../assets/images/ent_and_head_neck_surgery.png';
import OpthalmologyImage from '../../../assets/images/opthalmology.png';
import DentalSurgeryImage from '../../../assets/images/oral_and_dental_surgery.png';
import UrologyImage from '../../../assets/images/urology.png';
import ColorectalSurgeryImage from '../../../assets/images/colorectal_surgery.png';
import PediatricsSurgeryImage from '../../../assets/images/pediatrics.png';
import VascularSurgeryImage from '../../../assets/images/vascular_surgery.png';

const Container = styled(VBox)`
    
`

const SurgerySection = () => {
    return (
        <Container align='center'>
            <H3 className='bold mt-7'>সার্জারি</H3>
            <HBox justify='center'>
                <SpecialtyCard image={GeneralSurgeryImage} text='জেনারেল সার্জারি'></SpecialtyCard>
                <SpecialtyCard image={OrthopedicSurgeryImage} text='অর্থোপেডিক সার্জারি'></SpecialtyCard>
                <SpecialtyCard image={NeurologySurgeryImage} text='স্নায়ু সার্জারি'></SpecialtyCard>
                <SpecialtyCard image={GynecologyAndObstetricsImage} text='স্ত্রীরোগ ও প্রসূতি'></SpecialtyCard>
                <SpecialtyCard image={ENTAndHeadNeckSurgeryImage} text='নাক, কান ও গলা'></SpecialtyCard>
                <SpecialtyCard image={OpthalmologyImage} text='চক্ষু'></SpecialtyCard>
                <SpecialtyCard image={DentalSurgeryImage} text='ডেন্টাল সার্জারি'></SpecialtyCard>
                <SpecialtyCard image={UrologyImage} text='মুত্ররোগ সার্জারি'></SpecialtyCard>
                <SpecialtyCard image={ColorectalSurgeryImage} text='কোলন, রেকটাম সার্জারি'></SpecialtyCard>
                <SpecialtyCard image={PediatricsSurgeryImage} text='শিশুরোগ সার্জারি'></SpecialtyCard>
                <SpecialtyCard image={VascularSurgeryImage} text='রক্তনালী সার্জারি'></SpecialtyCard>
            </HBox>
        </Container>
    );
}

export default SurgerySection;