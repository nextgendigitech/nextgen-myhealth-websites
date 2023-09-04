import { Backdrop, Box, CircularProgress, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
import Modal from '../../components/Modal';
import DoctorList from '../DoctorList';
import { fetchDoctors }  from '../../services/apis';

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

    const [openDialog, setOpenDialog] = useState(false)
    const [selectedSpecialty, setSelectedSpecialty] = useState('')
    const [doctors, setDoctors] = useState([])
    const [loader, setLoader] = useState(false)

    const handleClick = (specialty) => {
        setOpenDialog(true)
        setSelectedSpecialty(specialty)
        // showDoctorList(specialty)
    }

    const handleClose = () => {
        setOpenDialog(false)
    }

    const showDoctorList = (specialty) => {
        setDoctors([])
        setLoader(true)
        fetchDoctors(specialty)
        .then((response) => {
            setDoctors(response.data.doctors)
            setLoader(false)
        })
    }
    
    useEffect(() => {
      openDialog && showDoctorList(selectedSpecialty)
    }, [openDialog])
    
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
                        <SpecialtyContainer key={index} image={medicine.image} specialityHeader={medicine.specialityHeader} specialityBangla={medicine.specialityBangla} handleClick={() => handleClick(medicine.specialityHeader)} />
                    </Grid>
                )}
            </Grid>
        )}
    </Box>
    <Modal open={openDialog} loader={loader} handleClose={handleClose} modalHeader={selectedSpecialty} fullScreen={true} modalContent={<DoctorList doctors={doctors} loader={loader}/>}/>
    </>
  )
}

export default MedicineSection