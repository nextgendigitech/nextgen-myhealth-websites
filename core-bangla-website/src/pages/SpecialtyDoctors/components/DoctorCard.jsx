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
    width: calc(50% - 32px);
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

const SButton = styled(Button)`
   height: 40px;
   border-radius: 30px;
`

const DoctorCard = ({ id, name, bmdc, qualification, specialty,
                      experience, affiliation, image, fee, isMobile }) => {
    return (
        <CardContainer className="m-2 p-3" style={{ width: isMobile ? "calc(100% - 32px)" : "calc(50% - 32px)" }}>
                <VBox align='center' style={{ width: "22%" }}>
                    <Image
                        className="mb-3"
                        src={`${import.meta.env.VITE_SERVER_URL}${image}` ? `${import.meta.env.VITE_SERVER_URL}${image}` : noImage}
                    />
                    <P4 className="bold">বি.এম.ডি.সি&nbsp;</P4>
                    <P4 className="bold">{qualification.includes("MBBS") ? "এ-" : ""}{bmdc}</P4>
                    <P2 className="bold mt-2" color="first"><TbCurrencyTaka/>{fee}</P2>
                </VBox>
                <VBox className='pl-5' style={{ width: "78%" }}>
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
                    <P4 className="bold mb-4">অভিজ্ঞতা: {experience}</P4>
                    <HBox justify="space-around">
                        <NavLink to= {`/doctor-profile/${id}`} style={{textDecoration: 'none'}}>
                            <SButton style={{ fontSize: "15px", width: "100%" }} color='first' elevated>বিস্তারিত দেখুন</SButton> 
                        </NavLink>
                        <Link to={`https://patient.nextgenmyhealth.com/doctor/${id}`} style={{textDecoration: 'none'}}>
                            <SButton style={{ fontSize: "15px", width: "100%" }} color='third' elevated>অ্যাপয়েন্টমেন্ট নিন</SButton> 
                        </Link>
                    </HBox>
                </VBox>
        </CardContainer>
    );
}

export default DoctorCard;