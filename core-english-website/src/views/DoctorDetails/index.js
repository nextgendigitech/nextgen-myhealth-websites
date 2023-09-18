import { useState, forwardRef, useEffect } from "react";
import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineShareAlt } from "react-icons/ai";
import { Box, IconButton, Typography, Snackbar, Alert } from "@mui/material";

import { HBox, VBox } from "../../components/Containers";
import { H1, H2, H3, H4, H5, H6, P1, P2, P3 } from "../../components/Typography";
import COLORS from "../../utility/styles";
import responsive from "../../utility/responsive";
import Banner from "./components/Banner";
import AppointmentDetails from "./components/AppointmentDetails";
import Affiliation from "./components/Affiliation";
import Chamber from "./components/Chamber"
import Reviews from "./components/Reviews";

const SLink = styled(Link)`
    text-decoration: none;
`

const DoctorDetails = () => {
    const navigate = useNavigate();
    const { doctorId } = useParams();
    const [doctor, setDoctor] = useState({});
    const { state } = useLocation();
    
    const [isLoading, setIsLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [openShareSnack, setOpenShareSnack] = useState(false);

    useEffect(() => {
        const setResponsiveness = () => {
            let orientation = !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape';
            
            if (orientation === 'portrait' || window.innerWidth < responsive.mobileThresh) {
                setIsMobile(true);
            }
            else {
                setIsMobile(false);
            }
        }
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness())
    
        return () => window.removeEventListener('resize', () => setResponsiveness());
    }, []);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        setIsLoading(true);
        console.log(doctorId);
        await axios({
            method: 'GET',
            url: `https://nextgenmyhealth.com:8000/patient/doctor-details/`,
            params: {
                id: doctorId
            }
        })
        .then((response) => {
            setIsLoading(false);
            if (response.status === 200) {
                setDoctor(response.data);
            } else {
                console.log('DOCTOR FETCH FAILED', response.status);
            }
        })
        .catch((error) => {
            setIsLoading(false);
            console.log('DOCTOR FETCH ERROR', error);
        })
    }

    const copyUrl = () => {
        navigator.clipboard.writeText(window.location.href)
    }

    return (
        <>
        <Box
            display='flex'
            direction='row'
            sx={{mt: 16, p: 2,
                color: COLORS.whiteColor,
                backgroundColor: COLORS.primaryColor,
                alignItems: 'center',
                justifyContent: 'space-between'
                }}
        >
            <Box display='flex' direction='row' sx={{alignItems: 'center'}}>
                <IconButton
                    color="inherit"
                    onClick={() => navigate(-1)}
                > 
                    <BiArrowBack />
                </IconButton>
                <Typography sx={{ml: 2}} variant="h6" component="div">
                    Doctor Details
                </Typography>
            </Box>
            <IconButton color='inherit'>
                <AiOutlineShareAlt onClick={() => {copyUrl(); setOpenShareSnack(true)}} />
            </IconButton>
        </Box>
        <Snackbar open={openShareSnack} autoHideDuration={6000} onClose={() => setOpenShareSnack(false)}>
            <Alert onClose={() => setOpenShareSnack(false)} severity="success" sx={{ width: '100%' }}>
                Doctor profile link is copied to your clipboard!
            </Alert>
        </Snackbar>
        <Box
        sx={{
        }}
        >
            <Banner
                isMobile={isMobile}
                id={doctor.id}
                name={doctor.name}
                image={doctor.image}
                bmdc={doctor.bmdc}
                doctorType={doctor.doctor_type}
                qualification={doctor.qualification}
                experience={doctor.experience}
                specialty={doctor.specialty}
                rating={doctor.rating}
                isOnline={doctor.is_online}
                affiliationSummary={doctor.affiliation_summary}
            />
            <VBox style={{ width: '100%' }}>
                <AppointmentDetails
                    isMobile={isMobile}
                    fee={doctor.appointment_config?.fee}
                    followupFee={doctor.appointment_config?.followup_fee}
                    attended={doctor.attended}
                    appointmentSchedules={doctor.appointment_schedules}
                    createdAt={doctor.created_at}
                />
                {doctor.about?.length ?
                    <>
                        <H4 color="first" className={`${isMobile ? 'mx-2' : 'mx-4'} mb-1`}>About Doctor</H4>
                        <P1 className={`${isMobile ? 'mx-2' : 'mx-4'} mb-4`}>{doctor.about}</P1>
                    </>
                    :
                    <></>
                }
                
                <H4 color='first' className={`${isMobile ? 'mx-2' : 'mx-4'} mb-1`}>Spoken Languages</H4>
                <P1 className={`${isMobile ? 'mx-2' : 'mx-4'} mb-4`}>Bangla</P1>
                <H4 color='first' className={`${isMobile ? 'mx-2' : 'mx-4'} mb-1`}>Affiliations ({doctor.affiliations?.length})</H4>
                <HBox className={`${isMobile ? 'mx-2' : 'mx-4'} mb-2`} justify='space-between'>
                    {doctor.affiliations?.map((affiliation, index) => (
                        <Affiliation
                            isMobile={isMobile}
                            institution={affiliation.institution}
                            designation={affiliation.designation}
                            department={affiliation.department}
                        />
                    ))}
                </HBox>
                {doctor.chambers?.length ? <><H4 color='first' className={`${isMobile ? 'mx-2' : 'mx-4'} mb-1`}>Chambers ({doctor.chambers?.length})</H4>
                <VBox className={`${isMobile ? 'mx-2' : 'mx-4'} mb-2`}>
                    {doctor.chambers?.map((chamber, index) => (
                        <Chamber
                            isMobile={isMobile}
                            address={chamber.address}
                        />
                    ))}
                </VBox></> : null}
                {/* <H3 className={`${isMobile ? 'mx-2' : 'mx-4'} mb-2`}>Ratings & Reviews</H3> */}
                {/* <Reviews isMobile={isMobile} /> */}
            </VBox>
        </Box>
        </>
    );
}

export default DoctorDetails;