import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to={`/specialities/${surgery.specialityHeader}`} style={{textDecoration: 'none'}}>
                        <SpecialtyContainer key={index} image={surgery.image} specialityHeader={surgery.specialityHeader} specialityBangla={surgery.specialityBangla} />
                    </Link>
                    </Grid>
                </>    
                )}
            </Grid>
        )}
    </Box>
    </>
  )
}

export default SurgerySection