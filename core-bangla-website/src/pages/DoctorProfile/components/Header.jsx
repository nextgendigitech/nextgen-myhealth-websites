import { useState } from "react";
import styled from "styled-components";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { FiShare2 } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
import { connect } from 'react-redux';

import { HBox } from "../../../components/Containers";
import { H3, P3, P4 } from "../../../components/Typography";
import colors from "../../../config/colors";
import { doctorProfile } from "../../../data";

const TitleCard = styled(HBox)`
    width: 100%;
    background: ${colors.veryLightGreen};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`

const Header = ({ isMobile, language }) => {
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
                console.error("Error copying to clipboard:", error);
            });
    }

    const closeShowAlert = () => {
        setShowAlert(false);
    }

    const goBack = () => {
        window.history.back();
    }

    return (
        <TitleCard 
            justify="space-between" 
            align="center" 
            className={isMobile ? "mt-2" : "mt-4"}
            style={{alignContent: "center", 
                    height: isMobile ? "40px" : "70px", 
                    borderRadius: isMobile ? "0px 15px" : "0px 30px"}}>
            <BiArrowBack 
                className={isMobile ? "ml-2" : "ml-8"}
                justify="center" 
                style={{ cursor: "pointer" }} 
                onClick={goBack} 
            />
            <H3>{doctorProfile.header.head1[language]}</H3>
            <HBox className={isMobile ? "clickable mr-2" : "clickable mr-8"} justify="center" onClick={copyToClipboard}>
                <FiShare2 />
                <P3 className="ml-1"><a>{doctorProfile.header.head2[language]}</a></P3>
            </HBox>
            <Snackbar
                open={showAlert}
                autoHideDuration={3000}
                onClose={closeShowAlert}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <SnackbarContent
                    sx={{
                        backgroundColor: colors.green, fontSize: "12px"
                    }}
                    message="Doctor profile link is copied to clipboard."
                    action={
                        <IconButton size="small" aria-label="close" color="inherit" onClick={closeShowAlert}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }
                />
            </Snackbar>
        </TitleCard>
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(Header);