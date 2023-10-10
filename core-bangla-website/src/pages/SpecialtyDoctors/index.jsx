import { useState, useEffect } from "react";
import colors from "../../config/colors";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';

import { HBox, VBox } from "../../components/Containers";
import { H3, P2 } from "../../components/Typography";
import DoctorCard from "./components/DoctorCard";
import ClipLoader from "react-spinners/ClipLoader";
import { BiArrowBack } from 'react-icons/bi';
import responsive from '../../config/responsive';
import { specialtydoctorsData } from "../../data";
import { specialtyEtoB } from "../../data";

const TitleCard = styled(VBox)`
    width: 100%;
    background: ${colors.veryLightGreen};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`

const SpecialtyDoctors = ({ language }) => {
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
        <VBox className={isMobile ? "pt-2" : "mt-4"} style={{ paddingBottom: isMobile ? '60px' : '100px', backgroundColor: colors.lightGrey }}>
            <TitleCard justify="center" align="center" style={{ height: isMobile ? '40px' : '70px', borderRadius: isMobile ? '0px 15px' : '0px 30px'}}>
                <BiArrowBack justify="center" style={{ marginRight:"90%", cursor: "pointer" }} onClick={goBack} />
                { language == 'bang' ?
                    <H3 style={{ position: "absolute" }}>{specialtyEtoB[specialty]}</H3>
                    :
                    <H3 style={{ position: "absolute" }}>{specialty}</H3>
                }
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
                    <VBox className={isMobile ? "mt-3" : "mt-6"} 
                        style={{ paddingLeft: isMobile ? "40px" : "100px", 
                            paddingRight: isMobile ? "40px" : "100px", 
                            alignItems: isMobile ? "center" : "" }}>
                        <P2 className="bold">{specialtydoctorsData.index.head11[language]}{doctors.length}{specialtydoctorsData.index.head12[language]}</P2>
                    </VBox>
                    <HBox justify="center" style={{marginRight: isMobile ? "10px" : "100px", marginLeft: isMobile ? "10px" : "100px"}}>
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
                    </HBox>
                </VBox>
            }
        </VBox> 
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(SpecialtyDoctors);