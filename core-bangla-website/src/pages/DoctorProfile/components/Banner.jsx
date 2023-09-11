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

const Chip = styled(HBox)`
    color: ${colors.white};
    width: fit-content;
    padding-left: 3px; 
    padding-right: 3px;
`

const Banner = ({ image, name, bmdc, doctor_type, qualification, specialty,
    experience, institution, designation, department, consultation_fee, is_online }) => {
    
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
                <BiArrowBack className="ml-1 mt-1" style={{ marginLeft: "60px", cursor: "pointer" }} onClick={goBack} />
                <H3>ডাক্তার বর্ণনা</H3>
                <FiShare2 className="ml-1 mt-1" style={{ marginRight: "60px", cursor: "pointer" }} onClick={copyToClipboard} />
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
            </TitleCard>
            
            <BannerCard className="m-6 p-4">
                <VBox align='center' style={{ width: "22%" }}>
                    <Image className="mb-3" src={`${import.meta.env.VITE_SERVER_URL}${image}`} alt="image"/>
                    <P3 className="bold" color="">বি.এম.ডি.সি: {doctor_type===("MBBS") ? "এ-" : ""}{bmdc}</P3>
                </VBox>
                <VerticalLine />
                
                <VBox className="pl-3" style={{ width: "74%" }}>
                    <HBox>
                        <P1 className="bold mb-2" color="third">{name}</P1>
                        <Chip className="mb-3 ml-1" justify="center" align="center">
                            <P4
                                className="bold px-1 py-0_5"
                                color="white"
                                justify="center"
                                align="center"
                                style={{
                                    backgroundColor: is_online ? colors.green : colors.lessDarkGrey,
                                    borderRadius: "20px",
                                }}
                            >
                                {is_online ? "Online" : "Offline"}
                            </P4>
                        </Chip>
                    </HBox>
                    <P3 className="mb-2">{qualification}</P3>
                    <P3 className="mb-2">{designation}, {department}, {institution}</P3>
                    <Chip className="mb-2">
                        <P4 className="bold px-1" color="white" justify="center" align="center" style={{ backgroundColor: colors.blue, borderRadius: "5px" }}>{specialty}</P4>
                    </Chip>
                    <HBox className="mb-2" align="center">
                        <P3 className="">Consultation fee: </P3>
                        <P2 className="bold mt-0_5"><TbCurrencyTaka/></P2>
                        <P2 className="bold">{consultation_fee}</P2>
                    </HBox>
                    <HBox className="mb-2">
                        <P3>Experience:</P3>
                        <P3 className="bold ml-1">{experience}</P3>
                    </HBox>
                    
                    <SButton className="mb-2" style={{ marginLeft: "70%", fontSize: "16px", width: "190px" }} color='third' elevated>অ্যাপয়েন্টমেন্ট নিন</SButton>
                </VBox>
                <HorizontalLine />
            </BannerCard>
        </VBox>
    );
}

export default Banner;