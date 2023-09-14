import { Link } from 'react-router-dom';
import styled from "styled-components";
import { TbCurrencyTaka } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

import colors from "../../../config/colors";
import { Button } from '../../../components/Buttons';
import { HBox, VBox } from "../../../components/Containers";
import { P2, P4 } from "../../../components/Typography";

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
                      experience, affiliation, image, fee, isMobile }) => {
    return (
        <CardContainer 
            style={{ width: isMobile ? "100%" : "calc(50% - 100px)", 
                    margin: isMobile ? '8px' : '40px',
                    padding: isMobile ? "16px 10px" : "16px 16px" }}
        >
            <VBox align='center' style={{ width: "20%" }}>
                <Image
                    className="mb-3"
                    src={`${import.meta.env.VITE_SERVER_URL}${image}` ? `${import.meta.env.VITE_SERVER_URL}${image}` : noImage}
                />
                <P4 className="bold">বি.এম.ডি.সি&nbsp;</P4>
                <P4 className="bold">{qualification.includes("MBBS") ? "এ-" : ""}{bmdc}</P4>
                <P2 className="bold" style={{ marginTop: isMobile ? '6px' : '16px' }} color="first"><TbCurrencyTaka/>{fee}</P2>
            </VBox>
            <VBox style={{ width: "80%", paddingLeft: isMobile ? '40px' : '24px' }}>
                <P2 className="bold mb-1">{name}</P2>
                <P4 className="bold mb-1">{affiliation}</P4>
                <VBox>{typeof specialty === "object" ? specialty.map((spec, index) => (
                        <P4 className="bold mb-1" key={index}>{spec}</P4>
                    ))
                    : 
                    typeof specialty === "string" && (
                        <P4 className="bold mb-1">{specialty}</P4>
                    )}
                </VBox>
                <P4 className="bold mb-1" >{qualification}</P4>
                <P4 className="bold" style={{ marginBottom: isMobile ? '8px' : '32px' }}>অভিজ্ঞতা: {experience}</P4>
                <HBox justify="space-around">
                    <NavLink to= {`/doctor-profile/${id}`} style={{textDecoration: 'none'}}>
                        <Button 
                            className='mb-1'
                            style={{ fontSize: "15px", width: "fit-content", borderRadius: 25, height: isMobile ? 25 : 40 }} 
                            color='first' 
                            elevated>বিস্তারিত দেখুন</Button> 
                    </NavLink>
                    <Link to={`https://patient.nextgenmyhealth.com/doctor/${id}`} style={{textDecoration: 'none'}}>
                        <Button 
                            style={{ fontSize: "15px", width: "fit-content", borderRadius: 25, height: isMobile ? 25 : 40 }}
                            color='third' 
                            elevated>অ্যাপয়েন্টমেন্ট নিন</Button> 
                    </Link>
                </HBox>
            </VBox>
        </CardContainer>
    );
}

export default DoctorCard;