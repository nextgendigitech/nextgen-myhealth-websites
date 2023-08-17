import styled from "styled-components";

import { VBox, HBox } from "../../../components/Containers";
import { H3 } from '../../../components/Typography';
import SpecialtyCard from './SpecialtyCard';
import GeneralSurgeryImage from '../../../assets/images/specialties/general_surgery.png';
import OrthopedicSurgeryImage from '../../../assets/images/specialties/orthopedic_surgery.png';
import NeurologySurgeryImage from '../../../assets/images/specialties/neurology_2.png';
import GynecologyAndObstetricsImage from '../../../assets/images/specialties/gynecology_and_obstetrics.png';
import ENTAndHeadNeckSurgeryImage from '../../../assets/images/specialties/ent_and_head_neck_surgery.png';
import OpthalmologyImage from '../../../assets/images/specialties/opthalmology.png';
import DentalSurgeryImage from '../../../assets/images/specialties/oral_and_dental_surgery.png';
import UrologyImage from '../../../assets/images/specialties/urology.png';
import ColorectalSurgeryImage from '../../../assets/images/specialties/colorectal_surgery.png';
import PediatricsSurgeryImage from '../../../assets/images/specialties/pediatrics.png';
import VascularSurgeryImage from '../../../assets/images/specialties/vascular_surgery.png';

const Container = styled(VBox)`
    
`

const SurgerySection = () => {
    return (
        <Container align='center'>
            <H3 className='bold mt-7'>সার্জারি</H3>
            <HBox justify='center'>
                <SpecialtyCard image={GeneralSurgeryImage} specialtyBang='জেনারেল সার্জারি' specialtyEng='General Surgery' />
                <SpecialtyCard image={OrthopedicSurgeryImage} specialtyBang='অর্থোপেডিক সার্জারি' specialtyEng='Orthopedic Surgery' />
                <SpecialtyCard image={NeurologySurgeryImage} specialtyBang='স্নায়ু সার্জারি' specialtyEng='Neurosurgery' />
                <SpecialtyCard image={GynecologyAndObstetricsImage} specialtyBang='স্ত্রীরোগ ও প্রসূতি' specialtyEng='Gynecology & Obstetrics' />
                <SpecialtyCard image={ENTAndHeadNeckSurgeryImage} specialtyBang='নাক, কান ও গলা' specialtyEng='ENT & Head Neck Surgery' />
                <SpecialtyCard image={OpthalmologyImage} specialtyBang='চক্ষু' specialtyEng='Ophthalmology' />
                <SpecialtyCard image={DentalSurgeryImage} specialtyBang='ডেন্টাল সার্জারি' specialtyEng='Oral & Dental Surgery' />
                <SpecialtyCard image={UrologyImage} specialtyBang='মুত্ররোগ সার্জারি' specialtyEng='Urology' />
                <SpecialtyCard image={ColorectalSurgeryImage} specialtyBang='কোলন, রেকটাম সার্জারি' specialtyEng='Colorectal Surgery' />
                <SpecialtyCard image={PediatricsSurgeryImage} specialtyBang='শিশুরোগ সার্জারি' specialtyEng='Pediatric Surgery' />
                <SpecialtyCard image={VascularSurgeryImage} specialtyBang='রক্তনালী সার্জারি' specialtyEng='Vascular Surgery' />
            </HBox>
        </Container>
    );
}

export default SurgerySection;