import { useState, useEffect, CSSProperties } from "react";
import colors from "../../config/colors";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

import { HBox, VBox } from "../../components/Containers";
import { H3, P2 } from "../../components/Typography";
import { specialtyEtoB } from "../../data";
import DoctorCard from "./components/DoctorCard";
import ClipLoader from "react-spinners/ClipLoader";
import { BiArrowBack } from 'react-icons/bi';
import responsive from '../../config/responsive';


const TitleCard = styled(VBox)`
    width: 100%;
    background: ${colors.veryLightGreen};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 30px;
`

const CardsContainer = styled(HBox)`
    margin-left: 6%;
    margin-right: 6%;
`

const SpecialtyDoctors = () => {
    let { specialty } = useParams();
    const [doctors, setDoctors] = useState([]);
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
        window.addEventListener('resize', () => setResponsiveness());

        return () => window.removeEventListener('resize', () => setResponsiveness());
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        fetchDoctors();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false)
        }, 5000)
    }, []);

    const fetchDoctors = () => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url: `${import.meta.env.VITE_SERVER_URL}/patient/doctor-list/`,
            params: {
                specialty: specialty,
                offset: 0,
                limit: 1000
            },
        })
        .then((response) => {
            setIsLoading(false);
            if (response.status === 200) {
                setDoctors(response.data.doctors);
            } else {
                console.log('DOCTOR LIST FETCH FAILED', response.status);
            }
        })
        .catch((error) => {
            setIsLoading(false);
            console.log('DOCTOR LIST FETCH ERROR', error);
        })
    }

    const goBack = () => {
        window.history.back();
    };

    return (
        <VBox>
            <TitleCard className="mt-4" justify="center" align="center" style={{height: isMobile ? '40px' : '70px'}}>
                <BiArrowBack className="mt-1" style={{ marginRight:"90%", cursor: "pointer" }} onClick={goBack} />
                <H3 style={{ position: "absolute" }}>{specialtyEtoB[specialty]}</H3>
            </TitleCard>
            {
                isLoading ?
                <HBox justify="center" align="center" className="p-5">
                    <ClipLoader
                        color= {colors.green}
                        loading={isLoading}
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </HBox>
                :
                <VBox>
                    <VBox style={{ paddingLeft: "8%", marginTop: isMobile ? '12px' : '48px' }}>
                        <P2 className="bold">{doctors.length} জন চিকিৎসক পাওয়া গেছে</P2>
                    </VBox>
                    <CardsContainer justify="center">
                        {doctors.map((doctor, index) => (
                            <DoctorCard
                                isMobile={isMobile}
                                key={index}
                                id={doctor.id}
                                name={doctor.name}
                                bmdc={doctor.bmdc}
                                qualification={doctor.qualification}
                                specialty={doctor.specialty}
                                experience={doctor.experience}
                                affiliation={doctor.affiliation}
                                image={doctor.image}
                                fee={doctor.fee}
                            />
                        ))}
                    </CardsContainer>
                </VBox>
            }
        </VBox> 
    );
}

export default SpecialtyDoctors;