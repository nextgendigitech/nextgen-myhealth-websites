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

// const override: CSSProperties = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
// };

const TitleCard = styled(VBox)`
    width: 100%;
    height: 70px;
    background: ${colors.veryLightGreen};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 30px;
`

const CardsContainer = styled(HBox)`
    margin-left: 104px;
    margin-right: 104px;
`

const SpecialtyDoctors = () => {
    let { specialty } = useParams();
    const [doctors, setDoctors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
            {
                isLoading ?
                <HBox justify="center" align="center" className="p-5">
                    <ClipLoader
                        color= "green"
                        /*cssOverride={override}*/
                        loading={isLoading}
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </HBox>
                :
                <VBox>
                    <VBox style={{ paddingLeft: "120px" }}>
                        <P2 className="bold mt-8">{doctors.length} জন চিকিৎসক পাওয়া গেছে</P2>
                    </VBox>
                    <CardsContainer>
                        {doctors.map((doctor, index) => (
                            <DoctorCard
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