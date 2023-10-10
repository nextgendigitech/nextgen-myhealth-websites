import styled from "styled-components";
import { connect } from 'react-redux';

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
import { specialtyEtoB } from "../../../data";
import { specialtiesData } from "../../../data";


const SurgerySection = ({ isMobile, language }) => {
    return (
        <VBox align='center' className={isMobile ? 'mt-5' : 'mt-7'} style={{  paddingBottom: isMobile ? '60px' : '100px' }}>
            <H3 className='bold'>{specialtiesData.specialtysection.head2[language]}</H3>
            <HBox justify='center'>
                <SpecialtyCard isMobile={isMobile} image={GeneralImage} specialtyBang={specialtyEtoB['General Surgery']} specialtyEng='General Surgery'/>
                <SpecialtyCard isMobile={isMobile} image={OrthopedicImage} specialtyBang={specialtyEtoB['Orthopedic Surgery']} specialtyEng='Orthopedic Surgery'/>
                <SpecialtyCard isMobile={isMobile} image={NeurologyImage} specialtyBang={specialtyEtoB['Neurosurgery']} specialtyEng='Neurosurgery' />
                <SpecialtyCard isMobile={isMobile} image={GynecologyAndObstetricsImage} specialtyBang={specialtyEtoB['Gynecology & Obstetrics']} specialtyEng='Gynecology & Obstetrics' />
                <SpecialtyCard isMobile={isMobile} image={ENTAndHeadNeckImage} specialtyBang={specialtyEtoB['ENT & Head Neck Surgery']} specialtyEng='ENT & Head Neck Surgery' />
                <SpecialtyCard isMobile={isMobile} image={OpthalmologyImage} specialtyBang={specialtyEtoB['Ophthalmology']} specialtyEng='Ophthalmology' />
                <SpecialtyCard isMobile={isMobile} image={DentalImage} specialtyBang={specialtyEtoB['Oral & Dental Surgery']} specialtyEng='Oral & Dental Surgery' />
                <SpecialtyCard isMobile={isMobile} image={UrologyImage} specialtyBang={specialtyEtoB['Urology']} specialtyEng='Urology' />
                <SpecialtyCard isMobile={isMobile} image={ColorectalImage} specialtyBang={specialtyEtoB['Colorectal Surgery']} specialtyEng='Colorectal Surgery' />
                <SpecialtyCard isMobile={isMobile} image={PediatricsImage} specialtyBang={specialtyEtoB['Pediatric Surgery']} specialtyEng='Pediatric Surgery' />
                <SpecialtyCard isMobile={isMobile} image={VascularImage} specialtyBang={specialtyEtoB['Vascular Surgery']} specialtyEng='Vascular Surgery' />
            </HBox>
        </VBox>
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(SurgerySection);