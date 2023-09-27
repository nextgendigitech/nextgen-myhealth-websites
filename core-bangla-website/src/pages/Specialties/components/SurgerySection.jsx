import styled from "styled-components";

import { VBox, HBox } from "../../../components/Containers";
import { H3 } from '../../../components/Typography';
import SpecialtyCard from './SpecialtyCard';
import GeneralImage from '../../../assets/images/specialties/general_surgery.png';
import OrthopedicImage from '../../../assets/images/specialties/orthopedic_surgery.png';
import NeurologyImage from '../../../assets/images/specialties/neurology_2.png';
import GynecologyAndObstetricsImage from '../../../assets/images/specialties/gynecology_and_obstetrics.png';
import ENTAndHeadNeckImage from '../../../assets/images/specialties/ent_and_head_neck_surgery.png';
import OpthalmologyImage from '../../../assets/images/specialties/opthalmology.png';
import DentalImage from '../../../assets/images/specialties/oral_and_dental_surgery.png';
import UrologyImage from '../../../assets/images/specialties/urology.png';
import ColorectalImage from '../../../assets/images/specialties/colorectal_surgery.png';
import PediatricsImage from '../../../assets/images/specialties/pediatrics.png';
import VascularImage from '../../../assets/images/specialties/vascular_surgery.png';
import { specialtylistData } from "../../../data";
import { specialtiesData } from "../../../data";

const Container = styled(VBox)`
    
`

const Section = ({ isMobile }) => {
    return (
        <Container align='center'>
            <H3 className='bold mt-7'>{specialtiesData.specialtysection.head2['bang']}</H3>
            <HBox justify='center'>
                <SpecialtyCard isMobile={isMobile} image={GeneralImage} specialtyBang={specialtylistData.pnt18['bang']} specialtyEng={specialtylistData.pnt18['eng']}/>
                <SpecialtyCard isMobile={isMobile} image={OrthopedicImage} specialtyBang={specialtylistData.pnt19['bang']} specialtyEng={specialtylistData.pnt19['eng']}/>
                <SpecialtyCard isMobile={isMobile} image={NeurologyImage} specialtyBang={specialtylistData.pnt20['bang']} specialtyEng={specialtylistData.pnt20['eng']} />
                <SpecialtyCard isMobile={isMobile} image={GynecologyAndObstetricsImage} specialtyBang={specialtylistData.pnt21['bang']} specialtyEng={specialtylistData.pnt21['eng']} />
                <SpecialtyCard isMobile={isMobile} image={ENTAndHeadNeckImage} specialtyBang={specialtylistData.pnt22['bang']} specialtyEng={specialtylistData.pnt22['eng']} />
                <SpecialtyCard isMobile={isMobile} image={OpthalmologyImage} specialtyBang={specialtylistData.pnt23['bang']} specialtyEng={specialtylistData.pnt23['eng']} />
                <SpecialtyCard isMobile={isMobile} image={DentalImage} specialtyBang={specialtylistData.pnt24['bang']} specialtyEng={specialtylistData.pnt24['eng']} />
                <SpecialtyCard isMobile={isMobile} image={UrologyImage} specialtyBang={specialtylistData.pnt25['bang']} specialtyEng={specialtylistData.pnt25['eng']} />
                <SpecialtyCard isMobile={isMobile} image={ColorectalImage} specialtyBang={specialtylistData.pnt26['bang']} specialtyEng={specialtylistData.pnt26['eng']} />
                <SpecialtyCard isMobile={isMobile} image={PediatricsImage} specialtyBang={specialtylistData.pnt27['bang']} specialtyEng={specialtylistData.pnt27['eng']} />
                <SpecialtyCard isMobile={isMobile} image={VascularImage} specialtyBang={specialtylistData.pnt28['bang']} specialtyEng={specialtylistData.pnt28['eng']} />
            </HBox>
        </Container>
    );
}

export default Section;