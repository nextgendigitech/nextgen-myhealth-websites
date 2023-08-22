import React from 'react';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import { Box, Typography, Grid } from '@mui/material';
import COLORS from '../../utility/styles';
import Subheader from '../../components/Subheader';
import Button from '../../components/Button';
import { styled } from '@mui/system';
import { useState } from 'react';
import Speciality  from './Speciality';
import Gastroenterology from '../../images/specialties/gastroenterology.png';
import InternalMedicine from '../../images/specialties/internal-medicine.png';
import Cardiology from '../../images/specialties/cardiology.png';
import RespiratoryMedicine from '../../images/specialties/resp-medicine.png';
import Rheumatology from '../../images/specialties/rheumatology.png';
import CardiovascularSurgery from '../../images/specialties/cardiosurgery.png';
import ColorectalSurgery from '../../images/specialties/colorectalsurgery.png';
import DermatologyVenereology from '../../images/specialties/dermatology.png';
import Endocrinology from '../../images/specialties/endocrinology.png';
import ENTHeadNeckSurgery from '../../images/specialties/ent.png';
import GeneralSurgery from '../../images/specialties/generalsurgery.png';
import GynecologySurgery from '../../images/specialties/gynecology.png';
import Hematology from '../../images/specialties/hematology.png';
import HepatobiliarySurgery from '../../images/specialties/hepatobiliary.png';
import Hepatology from '../../images/specialties/hepatology.png';
import Nephrology from '../../images/specialties/nephrology.png';
import Neurology from '../../images/specialties/neurology.png';
import Neurosurgery from '../../images/specialties/neurosurgery.png';
import Oncology from '../../images/specialties/oncology.png';
import Psychiatry from '../../images/specialties/psychiratry.png';
import Rehab from '../../images/specialties/rehabilitation.png';
import OrthopedicSurgery from '../../images/specialties/orthopedicsurgery.png';
import PediatricSurgery from '../../images/specialties/pediatricsurgery.png';
import Ophthalmology from '../../images/specialties/opthalmology.png';
import Urology from '../../images/specialties/urology.png';
import VascularSurgery from '../../images/specialties/vascularsurgery.png';
import DentalSurgery from '../../images/specialties/dentistry.png';
import AestheticDermatology from '../../images/specialties/female_beautification.png';
import { NavigationLink } from '../../components/Hyperlink';

const PaginationIcon = styled('div')(
    ({ theme }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${COLORS.lightBlue};
    border: 1px solid ${COLORS.lightBlue};
    border-radius: 50%;
    padding: ${theme.spacing(2)};
    margin-left: ${theme.spacing(4)};
    cursor: pointer
    `
 )
 
 const HBox = styled('div')(
     ({ theme }) => `
     display: flex;
     justify-content: center;
     align-items: center;
     `
 )

const specialityDictionary = {
    1: [
        {
            image: InternalMedicine,
            specialityHeader: 'Internal Medicine',
            specialityBangla: 'ইন্টারনাল মেডিসিন'
        },
        {
            image: Cardiology,
            specialityHeader: 'Cardiology',
            specialityBangla: 'হৃদরোগ'
        },
        {
            image: Nephrology,
            specialityHeader: 'Nephrology',
            specialityBangla: 'কিডনি'
        },
        {
            image: RespiratoryMedicine,
            specialityHeader: 'Respiratory Medicine',
            specialityBangla: 'ফুসফুস'
        },
        {
            image: Rheumatology,
            specialityHeader: 'Rheumatology',
            specialityBangla: 'বাতরোগ'
        },
        { 
            image: Hepatology, 
            specialityHeader: 'Hepatology', 
            specialityBangla: 'লিভার'
        },
            
    ],
    2: [
        {
            image: Gastroenterology, 
            specialityHeader: 'Gastroenterology',
            specialityBangla: 'পরিপাকতন্ত্র'
        },
        {	
            image: Neurology, 
            specialityHeader: 'Neurology', 
            specialityBangla: 'স্নায়ুরোগ'
        },
        {
            image: Oncology, 
            specialityHeader: 'Oncology',
            specialityBangla: 'ক্যান্সার'
        },
        {	
            image: Hematology, 
            specialityHeader: 'Hematology', 
            specialityBangla: 'রক্তরোগ'
        },
        {
            image: Endocrinology, 
            specialityHeader: 'Endocrinology',
            specialityBangla: 'হরমোন'
        },
        {	
            image: DermatologyVenereology, 
            specialityHeader: 'Dermatology & Venereology', 
            specialityBangla: 'চর্ম ও যৌনরোগ'
        }        
    ],
    3: [
        {
            image: AestheticDermatology,
            specialityHeader: 'Aesthetic Dermatology',
            specialityBangla: 'এস্থেটিক ডার্মাটোলজি'
        },
        {	
            image: Psychiatry, 
            specialityHeader: 'Psychiatry', 
            specialityBangla: 'মনোরোগ'
        },
        {
            image: Rehab, 
            specialityHeader: 'Physical Medicine & Rehabilitation',
            specialityBangla: 'ফিজিক্যাল মেডিসিন'
        },
        {
            image: GeneralSurgery, 
            specialityHeader: 'General Surgery',
            specialityBangla: 'জেনারেল সার্জারি'
        },
        {	
            image: OrthopedicSurgery, 
            specialityHeader: 'Orthopedic Surgery', 
            specialityBangla: 'অর্থোপেডিক সার্জারি'
        },
        {
            image: PediatricSurgery, 
            specialityHeader: 'Pediatric Surgery',
            specialityBangla: 'শিশুরোগ সার্জারি'
        },      
    ],
    4: [
        {	
            image: GynecologySurgery, 
            specialityHeader: 'Gynecology & Obstetrics', 
            specialityBangla: 'স্ত্রীরোগ ও প্রসূতি'
        },
        // {
        //     image: CardiovascularSurgery, 
        //     specialityHeader: 'Cardiovascular Surgery',
        // },
        {
            image: DentalSurgery, 
            specialityHeader: 'Oral & Dental Surgery',
        },
        {	
            image: ColorectalSurgery, 
            specialityHeader: 'Colorectal Surgery', 
            specialityBangla: 'কোলন, রেকটাম সার্জারি'
        },
        {
            image: Neurosurgery, 
            specialityHeader: 'Neurosurgery',
            specialityBangla: 'স্নায়ু সার্জারি'
        },
        {	
            image: Ophthalmology, 
            specialityHeader: 'Ophthalmology', 
            specialityBangla: 'চক্ষু'
        },
        // {
        //     image: HepatobiliarySurgery, 
        //     specialityHeader: 'Hepatobiliary Surgery',
        // },   
        {	
            image: Urology, 
            specialityHeader: 'Urology', 
            specialityBangla: 'মুত্ররোগ সার্জারি'
        },  
    ],
    5: [
        
        {
            image: VascularSurgery, 
            specialityHeader: 'Vascular Surgery',
            specialityBangla: 'রক্তনালী সার্জারি'
        },
        {	
            image: ENTHeadNeckSurgery, 
            specialityHeader: 'ENT & Head Neck Surgery',
            specialityBangla: 'নাক, কান ও গলা' 
        },
    ]
}

const SpecialityDescription = () => {
    const [specialityIndex, setSpecialityIndex] = useState(1);
    
    var lastSpecialityIndex = Object.keys(specialityDictionary).pop();

    const handleClickForward = () => {
        if (specialityIndex < lastSpecialityIndex) {
            setSpecialityIndex(specialityIndex+1);
        }
    }

    const handleClickBackward = () => {
        if (specialityIndex > 1) {
            setSpecialityIndex(specialityIndex-1);
        }
    }

  return (
    <Grid
        container
        spacing={2}
        display='flex'
        justifyContent='center'
        id='specialities'
    >
        <Grid item xl={5} lg={4} md={8} sm={12} xs={12} >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Subheader title='What are the' color={COLORS.textColor} />
                <Typography variant='h5'>
                    <Box
                        sx={{
                            color: COLORS.textColor,
                            fontWeight: 'bold'
                        }}
                    >
                        Specialities We Cover!
                    </Box>
                </Typography>
                <Typography variant='body2'>
                    <Box
                        sx={{
                            pt: 2,
                            pb: 2,
                            pr: 5
                        }}
                    >
                        {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                        it to make a type specimen book. */}
                    </Box>
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        pt: 4,
                        pb: 2,
                        justifyContent: 'space-between'
                    }}
                >
                    <div><NavigationLink to='/specialities'><Button name='View All Specialities' color={COLORS.redColor} /></NavigationLink></div>
                    <HBox >
                        <PaginationIcon onClick={handleClickBackward}><BsChevronDoubleLeft /></PaginationIcon>
                        <PaginationIcon onClick={handleClickForward}><BsChevronDoubleRight /></PaginationIcon>
                    </HBox>
                </Box>
            </Box>
        </Grid>
        <Grid item xl={6} lg={8} md={8} sm={12} xs={12} display='flex' justifyContent='center'>
            <Speciality specialityIndex={specialityIndex} specialityDictionary={specialityDictionary}/>
        </Grid>
    </Grid>
    
  )
}

export default SpecialityDescription