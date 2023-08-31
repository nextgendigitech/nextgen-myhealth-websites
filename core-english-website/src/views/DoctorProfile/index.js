import { useState, forwardRef, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { FiX, FiArrowLeft, FiSearch } from "react-icons/fi";
import { Scrollbars } from 'react-custom-scrollbars-2';

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

const DoctorProfile = (props) => {
    const navigate = useNavigate();
    const { doctorId } = useParams();
    const [doctor, setDoctor] = useState({});
    
    const [isLoading, setIsLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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
        await axios({
            method: 'GET',
            url: `https://nextgenmyhealth.com:8000/patient/doctor-details/`,
            params: {
                id: props.doctorId
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

    return (
        <>
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
                {doctor.chambers?.length && <><H4 color='first' className={`${isMobile ? 'mx-2' : 'mx-4'} mb-1`}>Chambers ({doctor.chambers?.length})</H4>
                <VBox className={`${isMobile ? 'mx-2' : 'mx-4'} mb-2`}>
                    {doctor.chambers?.map((chamber, index) => (
                        <Chamber
                            isMobile={isMobile}
                            address={chamber.address}
                        />
                    ))}
                </VBox></>}
                {/* <H3 className={`${isMobile ? 'mx-2' : 'mx-4'} mb-2`}>Ratings & Reviews</H3> */}
                {/* <Reviews isMobile={isMobile} /> */}
            </VBox>
        </>
    );
}

export default DoctorProfile;