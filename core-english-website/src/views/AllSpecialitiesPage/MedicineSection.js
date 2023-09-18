import { Backdrop, Box, CircularProgress, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SpecialtyContainer from '../../components/SpecialtyContainer'
import Gastroenterology from '../../images/specialties/gastroenterology.png';
import GeneralPhysician from '../../images/specialties/generalphysician.png';
import InternalMedicine from '../../images/specialties/internal-medicine.png';
import Cardiology from '../../images/specialties/cardiology.png';
import RespiratoryMedicine from '../../images/specialties/resp-medicine.png';
import Rheumatology from '../../images/specialties/rheumatology.png';
import DermatologyVenereology from '../../images/specialties/dermatology.png';
import Endocrinology from '../../images/specialties/endocrinology.png';
import Hematology from '../../images/specialties/hematology.png';
import Hepatology from '../../images/specialties/hepatology.png';
import Nephrology from '../../images/specialties/nephrology.png';
import Neurology from '../../images/specialties/neurology.png';
import Oncology from '../../images/specialties/oncology.png';
import Psychiatry from '../../images/specialties/psychiratry.png';
import Rehab from '../../images/specialties/rehabilitation.png';
import Pediatrics from '../../images/specialties/pediatrics.png';
import AestheticDermatology from '../../images/specialties/female_beautification.png';

const MedicineSection = () => {
    const specialityMedicineList = [
        
        [{
            image: GeneralPhysician,
            specialityHeader: 'General Physician',
            specialityBangla: 'জেনারেল ফিজিসিয়ান'
        },
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
        }],
        [{
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
        {
            image: Gastroenterology, 
            specialityHeader: 'Gastroenterology',
            specialityBangla: 'পরিপাকতন্ত্র'
        }],
        [
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
        }],
        [{	
            image: DermatologyVenereology, 
            specialityHeader: 'Dermatology & Venereology', 
            specialityBangla: 'চর্ম ও যৌনরোগ'
        },
        {
            image: Pediatrics, 
            specialityHeader: 'Pediatrics',
            specialityBangla: 'শিশুরোগ'
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
            image: AestheticDermatology,
            specialityHeader: 'Aesthetic Dermatology',
            specialityBangla: 'এস্থেটিক ডার্মাটোলজি'
        }]
    ]
    
  return (
    <>
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'

        }}
    >
        {specialityMedicineList.map((row, index) =>
            <Grid
                key={index}
                container
                spacing={1}
                justifyContent='center'
                sx={{
                    ml: 1,
                }}
            >
                {row.map((medicine, index) =>
                    <Grid item xl={3} lg={3} md={4} sm={5} xs={12}
                        justifyContent='center'
                        container
                        spacing={2}
                        sx={{
                            mb: 1,
                        }}
                    >
                    <Link to={`/specialities/${medicine.specialityHeader}`} style={{textDecoration: 'none'}}>
                        <SpecialtyContainer key={index} image={medicine.image} specialityHeader={medicine.specialityHeader} specialityBangla={medicine.specialityBangla} />
                    </Link>
                    </Grid>
                )}
            </Grid>
        )}
    </Box>
    </>
  )
}

export default MedicineSection