import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SpecialtyContainer from '../../components/SpecialtyContainer'
import CardiovascularSurgery from '../../images/specialties/cardiosurgery.png';
import ColorectalSurgery from '../../images/specialties/colorectalsurgery.png';
import ENTHeadNeckSurgery from '../../images/specialties/ent.png';
import GeneralSurgery from '../../images/specialties/generalsurgery.png';
import GynecologySurgery from '../../images/specialties/gynecology.png';
import HepatobiliarySurgery from '../../images/specialties/hepatobiliary.png';
import Neurosurgery from '../../images/specialties/neurosurgery.png';
import OrthopedicSurgery from '../../images/specialties/orthopedicsurgery.png';
import PediatricSurgery from '../../images/specialties/pediatricsurgery.png';
import Ophthalmology from '../../images/specialties/opthalmology.png';
import Urology from '../../images/specialties/urology.png';
import VascularSurgery from '../../images/specialties/vascularsurgery.png';
import DentalSurgery from '../../images/specialties/dentistry.png';
import Modal from '../../components/Modal';
import { fetchDoctors }  from '../../services/apis';
import DoctorList from '../DoctorList';

const SurgerySection = () => {
    const specialitySurgeryList = [
        [{
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
        {	
            image: GynecologySurgery, 
            specialityHeader: 'Gynecology & Obstetrics', 
            specialityBangla: 'স্ত্রীরোগ ও প্রসূতি'
        }],
        [
        //     {
        //     image: CardiovascularSurgery, 
        //     specialityHeader: 'Cardiovascular Surgery',
        // },
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
        {
            image: DentalSurgery, 
            specialityHeader: 'Oral & Dental Surgery',
            specialityBangla: 'ডেন্টাল সার্জারি'
        }],
        [
        //     {
        //     image: HepatobiliarySurgery, 
        //     specialityHeader: 'Hepatobiliary Surgery',
        //     specialityBangla: 'জেনারেল সার্জারি'
        // },
        {	
            image: Urology, 
            specialityHeader: 'Urology', 
            specialityBangla: 'মুত্ররোগ সার্জারি'
        },
        {
            image: VascularSurgery, 
            specialityHeader: 'Vascular Surgery',
            specialityBangla: 'রক্তনালী সার্জারি'
        },
        {	
            image: ENTHeadNeckSurgery, 
            specialityHeader: 'ENT & Head Neck Surgery', 
            specialityBangla: 'নাক, কান ও গলা'
        }],
        // [{
        //     image: DentalSurgery, 
        //     specialityHeader: 'Oral & Dental Surgery',
        // }]
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
        {specialitySurgeryList.map((row, index) =>
            <Grid
                key={index}
                container
                spacing={1}
                sx={{
                    ml: 1,
                }}
                justifyContent='center'
            >
                {row.map((surgery, index) =>
                <>
                    <Grid item xl={3} lg={3} md={4} sm={5} xs={12}
                        justifyContent='center'
                        container
                        spacing={2}
                        sx={{
                            mb: 1,
                        }}
                    >
                        <SpecialtyContainer key={index} image={surgery.image} specialityHeader={surgery.specialityHeader} specialityBangla={surgery.specialityBangla} handleClick={() => handleClick(surgery.specialityHeader)}/>
                    </Grid>
                </>    
                )}
            </Grid>
        )}
    </Box>
    <Modal open={openDialog} loader={loader} handleClose={handleClose} modalHeader={selectedSpecialty} fullScreen={true} modalContent={<DoctorList doctors={doctors} loader={loader} />}/>
    </>
  )
}

export default SurgerySection