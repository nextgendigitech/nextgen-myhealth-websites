import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

import { VBox } from "../../components/Containers";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Summary from "./components/Summary";
import Details from "./components/Details";

const Container = styled(VBox)`
    margin-left: 120px;
    margin-right: 120px;
`

const DoctorProfile = () => {
    let { id } = useParams();
    const [doctor, setDoctor] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchDoctor();
    }, []);

    const fetchDoctor = () => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url: `${import.meta.env.VITE_SERVER_URL}/patient/doctor-details/`,
            params: {
                id: id
            },
        })
        .then((response) => {
            setIsLoading(false);
            if (response.status === 200) {
                setDoctor(response.data);
            } else {
                console.log('DOCTOR DETAILS FETCH FAILED', response.status);
            }
        })
        .catch((error) => {
            setIsLoading(false);
            console.log('DOCTOR DETAILS FETCH ERROR', error);
        })
    }

    return (
        <VBox>
            <Header />
            <Container>
                <Banner
                    id={doctor?.id}
                    name={doctor?.name}
                    is_online={doctor?.is_online}
                    bmdc={doctor?.bmdc}
                    image={doctor?.image}
                    doctor_type={doctor?.doctor_type}
                    qualification={doctor?.qualification}
                    consultation_fee={doctor?.appointment_config?.fee}
                    experience={doctor?.experience}
                    institution={doctor?.affiliation_summary?.length ? doctor.affiliation_summary[0].institution : ''}
                    designation={doctor?.affiliation_summary?.length ? doctor.affiliation_summary[0].designation : ''}
                    department={doctor?.affiliation_summary?.length ? doctor.affiliation_summary[0].department : ''}
                    specialty={doctor?.specialty}
                />
                <Summary 
                    id={doctor?.id}
                    consultation_fee={doctor?.appointment_config?.fee}
                    followup_fee={doctor?.appointment_config?.followup_fee}
                />
                <Details
                    id={doctor?.id}
                    attended={doctor?.attended}
                    created_at={doctor?.created_at?.length ? doctor.created_at : ''}
                    affiliations={doctor?.affiliations?.length ? doctor.affiliations : ''}
                    chambers={doctor?.chambers?.length ? doctor.chambers : ''}
                />
            </Container>
        </VBox>
    )
}

export default DoctorProfile;