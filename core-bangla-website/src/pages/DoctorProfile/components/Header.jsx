import { useState } from "react";
import styled from "styled-components";
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { FiShare2 } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi';

import { HBox, VBox } from "../../../components/Containers";
import { H3, P1, P2, P3, P4 } from "../../../components/Typography";
import colors from "../../../config/colors";

const TitleCard = styled(HBox)`
    width: 100%;
    height: 70px;
    background: ${colors.veryLightGreen};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 30px;
`

const Header = () => {
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
    }

    const closeShowAlert = () => {
        setShowAlert(false);
    }

    const goBack = () => {
        window.history.back();
    }

    return (
        <TitleCard className="mt-4" justify="space-between" align="center">
            <BiArrowBack className="ml-1 mt-1" style={{ marginLeft: "60px", cursor: "pointer" }} onClick={goBack} />
            <H3>ডাক্তার সম্পর্কে বিস্তারিত</H3>
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
    );
}

export default Header;