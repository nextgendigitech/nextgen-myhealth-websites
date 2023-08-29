import styled from "styled-components";
import colors from "../../../config/colors";

import { Button } from '../../../components/Buttons';
import { HBox, VBox } from "../../../components/Containers";
import { H3, P1, P2, P3, P4 } from "../../../components/Typography";
import { TbCurrencyTaka } from 'react-icons/tb';


const TitleCard = styled(VBox)`
    width: 100%;
    height: 70px;
    background: ${colors.veryLightGreen};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 30px;
`

const BannerCard = styled(HBox)`
    width: 80%;
    height: auto;
    margin-left: 120px;
    background: linear-gradient(
        0deg,
        ${colors.lightBlue} 0.51%,
        ${colors.veryLightBlue} 50.78%,
        ${colors.lightBlue} 100%
    );
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 30px;
`

const Image = styled.img`
    height: 190px;
    width: 180px;
    border-radius: 20px;
    box-shadow: 0px 3px 5px ${colors.shadow};
`

const VerticalLine = styled.div`
    border-left: 1px solid green;
    height: auto;
    margin-left: 8px;
`

const HorizontalLine = styled.div`
    border-bottom: 1px solid green;
    width: 100%;
    margin-bottom: 8px;
`

const SButton = styled(Button)`
    height: 40px;
    border-radius: 30px;
`

const SpecialtyBox = styled(HBox)`
    background-color: ${colors.blue};
    color: ${colors.white};
    border-radius: 3px;
    width: fit-content;
    padding-left: 3px; 
    padding-right: 3px;
`

const Banner = ({ image, name, bmdc, doctor_type, qualification, specialty,
    experience, institution, designation, department, consultation_fee }) => {
    return (
        <VBox>
            <TitleCard className="mt-4" justify="center" align="center">
                <H3>ডাক্তার বর্ণনা</H3>
            </TitleCard>
            
            <BannerCard className="m-6 p-4">
                <VBox align='center' style={{ width: "22%" }}>
                    <Image className="mb-3" src={`${import.meta.env.VITE_SERVER_URL}${image}`} alt="image"/>
                    <P3 className="bold" color="third">বি.এম.ডি.সি: {doctor_type===("MBBS") ? "এ-" : ""}{bmdc}</P3>
                </VBox>
                <VerticalLine />
                
                <VBox className="pl-3" style={{ width: "74%" }}>
                    <P1 className="bold mb-2" color="third">{name}</P1>
                    <P4 className="bold mb-2">{qualification}</P4>
                    <P4 className="bold mb-2">{designation}, {department}, {institution}</P4>
                    <SpecialtyBox className="mb-2">
                        <P4 className="bold" color="white" justify="center" align="center">{specialty}</P4>
                    </SpecialtyBox>
                    <HBox className="mb-2">
                        <P4 className="bold">Consultation fee: </P4>
                        <P2 className="bold"><TbCurrencyTaka/>{consultation_fee}</P2>
                    </HBox>
                    <P4 className="bold mb-2">Experience: {experience}</P4>
                    <SButton className="mb-2" style={{ marginLeft: "70%", fontSize: "16px", width: "190px" }} color='third' elevated>অ্যাপয়েন্টমেন্ট নিন</SButton>
                </VBox>
                <HorizontalLine />
            </BannerCard>
        </VBox>
    );
}

export default Banner;