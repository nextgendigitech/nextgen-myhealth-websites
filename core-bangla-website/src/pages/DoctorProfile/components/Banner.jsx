import { useState } from "react";
import styled from "styled-components";
import colors from "../../../config/colors";
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import { Button } from '../../../components/Buttons';
import { HBox, VBox } from "../../../components/Containers";
import { H3, P1, P2, P3, P4 } from "../../../components/Typography";
import { TbCurrencyTaka } from 'react-icons/tb';
import { FiShare2 } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi';


const TitleCard = styled(HBox)`
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
    border-left: 1px solid ${colors.green};
    height: auto;
    margin-left: 8px;
`

const HorizontalLine = styled.div`
    border-bottom: 1px solid ${colors.green};
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

const Circle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid ${colors.lightGreen};
    justify-content: center;
    align-items: center;
    margin-left: 60px;
    margin-right: 60px;
    background-color: ${colors.lightGreen};
    cursor: pointer;
`

const Banner = ({ image, name, bmdc, doctor_type, qualification, specialty,
    experience, institution, designation, department, consultation_fee }) => {
    
    const [showAlert, setShowAlert] = useState(false);

    const copyToClipboard = () => {
        const pageUrl = window.location.href;
        navigator.clipboard.writeText(pageUrl)
            .then(() => {
                setShowAlert(true);
                setTimeout(() => {
                  setShowAlert(false);
                }, 3000);
            })
            .catch((error) => {
            console.error('Error copying to clipboard:', error);
            });
    };

    const closeShowAlert = () => {
        setShowAlert(false);
    };

    const goBack = () => {
        window.history.back();
    };

    return (
        <VBox>
            <TitleCard className="mt-4" justify="space-between" align="center">
                <Circle onClick={goBack}>
                    <BiArrowBack className="ml-1 mt-1"/>
                </Circle>
                <H3>ডাক্তার বর্ণনা</H3>
                <Circle onClick={copyToClipboard}>
                    <FiShare2 className="ml-1 mt-1" />
                    <Snackbar
                        open={showAlert}
                        autoHideDuration={3000}
                        onClose={closeShowAlert}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    >
                        <SnackbarContent
                            sx={{
                                backgroundColor: colors.green,
                            }}
                            message="Doctor profile link is copied to clipboard!"
                            action={
                                <IconButton size="small" aria-label="close" color="inherit" onClick={closeShowAlert}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            }
                        />
                    </Snackbar>
                </Circle>
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