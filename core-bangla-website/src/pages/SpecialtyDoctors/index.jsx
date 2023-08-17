import { useState, useEffect } from "react";
import colors from "../../config/colors";
import styled from "styled-components";
import axios from "axios";

import { useParams } from "react-router-dom";

import { HBox, VBox } from "../../components/Containers";
import { H3, P2 } from "../../components/Typography";
import { specialtyEtoB } from "../../data";
import DoctorCard from "./components/DoctorCard";

const TitleCard = styled(VBox)`
    width: 100%;
    height: 70px;
    background: ${colors.veryLightGreen};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 30px;
`

const SpecialtyDoctors = () => {
    let { specialty } = useParams();
    const [doctors, setDoctors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = () => {
        setIsLoading(true);
        console.log('Fetching...')
        axios({
            method: 'GET',
            url: `${import.meta.env.VITE_SERVER_URL}patient/doctor-list/`,
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

    return (
        <VBox>
            <TitleCard className="mt-4" justify="center" align="center">
                <H3>{specialtyEtoB[specialty]}</H3>
            </TitleCard>
            <VBox style={{ paddingLeft: "120px" }}>
                <P2 className="bold mt-8">{doctors.length} জন চিকিৎসক পাওয়া গেছে</P2>
                {doctors.map((doctor, index) => (
                    <DoctorCard
                        
                    />
                ))}
            </VBox>
        </VBox>
    );
}

export default SpecialtyDoctors;