import { Link } from 'react-router-dom';
import styled from "styled-components";
import { TbCurrencyTaka } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import colors from "../../../config/colors";
import { Button } from '../../../components/Buttons';
import { HBox, VBox } from "../../../components/Containers";
import { P2, P4 } from "../../../components/Typography";
import { specialtydoctorsData } from '../../../data';
import noImage from '../../../assets/images/no_image.svg';

const CardContainer = styled(HBox)`
    background: ${colors.veryLightBlue};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 30px;
`

const Image = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 40px;
    box-shadow: 0px 3px 5px ${colors.shadow};
`

const DoctorCard = ({ id, name, bmdc, qualification, specialty,
                      experience, affiliation, image, fee, isMobile, language }) => {
    return (
        <CardContainer align="center" justify="center"
            className={isMobile ? "m-1 py-2 px-1" : "mx-5 my-3 p-2"}
            style={{ width: isMobile ? "100%" : "calc(50% - 120px)", height: isMobile ? "" : "270px" }}
        >
            <VBox align='center' style={{ width: "20%" }}>
                <Image
                    className="mb-3"
                    src={`${import.meta.env.VITE_SERVER_URL}${image}` ? `${import.meta.env.VITE_SERVER_URL}${image}` : noImage}
                />
                <P4>{specialtydoctorsData.doctorCard.head1[language]}</P4>
                <P4 className="bold">{qualification.includes("MBBS") ? specialtydoctorsData.doctorCard.head2[language] : ""}{bmdc}</P4>
                <P2 className={isMobile ? "bold mt-1" : "bold mt-2"} color="first"><TbCurrencyTaka/>{fee}</P2>
            </VBox>
            <VBox className={isMobile ? "pl-5" : "pl-3"} style={{ width: "80%" }}>
                <P2 className="bold mb-1">{name}</P2>
                <P4 className="mb-1">{affiliation}</P4>
                <VBox>{typeof specialty === "object" ? specialty.map((spec, index) => (
                        <P4 className="mb-1" key={index}>{spec}</P4>
                    ))
                    : 
                    typeof specialty === "string" && (
                        <P4 className="mb-1">{specialty}</P4>
                    )}
                </VBox>
                <P4 className="mb-1">{qualification}</P4>
                <P4 className={isMobile ? "bold mb-2" : "mb-3"}>
                    {experience ? specialtydoctorsData.doctorCard.head3[language] : ""}{experience}
                    {/* {experience?.substring(0,2) ? experience.substring(0,2) + "+ Years" : ""} */}
                </P4>
                <HBox justify="space-around" >
                    <NavLink to= {`/doctor-profile/${id}`} style={{textDecoration: 'none'}} className={isMobile ? "mb-1" : ""}>
                        <Button 
                            style={{ fontSize: "14px", width: "fit-content", borderRadius: 25, height: isMobile ? 25 : 37 }} 
                            color='first' 
                            elevated>{specialtydoctorsData.doctorCard.btn1[language]}</Button> 
                    </NavLink>
                    <Link to={`https://patient.nextgenmyhealth.com/doctor/${id}`} style={{textDecoration: 'none'}} target='_blank' className={isMobile ? "mb-1" : ""}>
                        <Button 
                            style={{ fontSize: "14px", width: "fit-content", borderRadius: 25, height: isMobile ? 25 : 37 }}
                            color='third' 
                            elevated>{specialtydoctorsData.doctorCard.btn2[language]}</Button> 
                    </Link>
                </HBox>
            </VBox>
        </CardContainer>
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(DoctorCard);