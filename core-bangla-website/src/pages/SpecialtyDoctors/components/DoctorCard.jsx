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
    padding: 16px;
    height: auto;
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
            justify="center" 
            align="center" 
            style={{ width: isMobile ? "calc(100% - 32px)" : "calc(50% - 100px)", 
                    margin: isMobile ? '12px' : '40px' }}
        >
            <VBox align='center' style={{ width: "fit-content" }}>
                <Image
                    className="mb-3"
                    src={`${import.meta.env.VITE_SERVER_URL}${image}` ? `${import.meta.env.VITE_SERVER_URL}${image}` : noImage}
                />
                <P4 className="bold">বি.এম.ডি.সি&nbsp;</P4>
                <P4 className="bold">{qualification.includes("MBBS") ? "এ-" : ""}{bmdc}</P4>
                <P2 className="bold" style={{ marginTop: isMobile ? '6px' : '16px' }} color="first"><TbCurrencyTaka/>{fee}</P2>
            </VBox>
            <VBox style={{ alignItems: isMobile ? "center" :"", width: isMobile ? "100%" : "78%", paddingLeft: isMobile ? '0px' : '24px' }}>
                <P2 className="bold mb-1">{name}</P2>
                <P4 className="bold mb-1">{affiliation}</P4>
                <HBox>{typeof specialty === "object" ? specialty.map((spec, index) => (
                        <P4 className="bold mb-1" key={index}>{spec}</P4>
                    ))
                    : 
                    typeof specialty === "string" && (
                        <P4 className="bold mb-1">{specialty}</P4>
                    )}
                </HBox>
                <P4 className="bold mb-1">{qualification}</P4>
                <P4 className="bold" style={{ marginBottom: isMobile ? '6px' : '32px' }}>অভিজ্ঞতা: {experience}</P4>
                <HBox justify="space-around">
                    <NavLink to= {`/doctor-profile/${id}`} style={{textDecoration: 'none'}}>
                        <Button 
                            className='mb-1'
                            style={{ fontSize: "15px", width: "100%", borderRadius: 25, height: isMobile ? 30 : 50 }} 
                            size={isMobile ? 'xs' : 'sm'}
                            color='first' 
                            elevated>বিস্তারিত দেখুন</Button> 
                    </NavLink>
                    <Link to={`https://patient.nextgenmyhealth.com/doctor/${id}`} style={{textDecoration: 'none'}}>
                        <Button 
                            style={{ fontSize: "15px", width: "100%", borderRadius: 25, height: isMobile ? 30 : 50 }} 
                            size={isMobile ? 'xs' : 'sm'}
                            color='third' 
                            elevated>অ্যাপয়েন্টমেন্ট নিন</Button> 
                    </Link>
                </HBox>
            </VBox>
        </CardContainer>
    );
}

export default DoctorCard;