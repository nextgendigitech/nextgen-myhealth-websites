import { Grid } from '@mui/material'
import React from 'react';
import Feature from './Feature';
import TrustedDoctor from '../../images/trusted-doctors.png';
import EprescriptionService from '../../images/e-prescription.png';
import Security from '../../images/cloud-based.png';
import VideoAudioConsultation from '../../images/consultation.png';
import Reportupload from '../../images/report-upload.png';
import OnlineOfflineConsultation from '../../images/online-offline-consultation.png';

const FeatureList = () => {
    // Create list of feature rows
    const featureRowOne = [
        {
            image: TrustedDoctor,
            featureHeader: 'Registered Doctors',
            featureText: 'All doctors on our platform are BMDC certified. We verify relevant information before the doctor can consult any patient.'
        },
        {
            image: EprescriptionService,
            featureHeader: 'E-Presciption Service',
            featureText: 'Get your prescriptions electronically and dispense medication from pharmacies by consulting with our doctors virtually.'
        },
        {
            image: Security,
            featureHeader: 'Cloud Based Data & Privacy Security',
            featureText: 'We protect your privacy through a collection of security measures designed to secure all the data stored in our cloud-based infrastructure.'
        },
    ]

    const featureRowTwo = [
        {
            image: VideoAudioConsultation,
            featureHeader: 'Video & Audio Consultation',
            featureText: 'Get your appointment with a healthcare professional over video & audio calls, as you feel comfortable.'
        },
        {
            image: Reportupload,
            featureHeader: 'Diagonostic Report Upload',
            featureText: 'Upload the scanned copy of your pathology test report & get a consultation virtually, while staying at home.'
        },
        {
            image: OnlineOfflineConsultation,
            featureHeader: 'Online & Offline Consultation',
            featureText: 'We provide booking appointments for both online & offline consultations with your doctor.'
        },
    ]



  return (
    <>  
        {/* Row One */}
        <Grid
            container
            flexDirection='row'
            justifyContent='center'
            sx={{
                mt: 3
            }}
        >
            {featureRowOne.map((feature, index) =>
                <Feature key={index} image={feature.image} featureHeader={feature.featureHeader} featureText={feature.featureText} />
            )}
        </Grid>
        
        {/* Row Two */}
        <Grid
            container
            flexDirection='row'
            justifyContent='center'
        >
            {featureRowTwo.map((feature, index) =>
                <Feature key={index} image={feature.image} featureHeader={feature.featureHeader} featureText={feature.featureText} />
            )}
        </Grid>
    </>
  )
}

export default FeatureList