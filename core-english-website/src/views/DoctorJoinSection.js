import { Snackbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef, useState } from 'react';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import COLORS from '../utility/styles';
import JoinUsBackground from '../images/join-us-background.png';
import { Hyperlink } from '../components/Hyperlink';
import emailjs from '@emailjs/browser';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const DemoForm = () => {
    const isMediumScreen = useMediaQuery(useTheme().breakpoints.down('md'));

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    //   const form = useRef()
    const [name, setName] = useState('')
    const [mobiledNumber, setMobiledNumber] = useState('')
    const [email, setEmail] = useState('')
    var templateParams = {
        name: name,
        mobileNumber: mobiledNumber,
        email: email
    }

    const sendEmail = () => {
        emailjs.send('service_ilbasd8', 'template_fujnx8x', templateParams, 'uIv4xQE1US2YpdfGw')
            .then((result) => {
                console.log(result.text);
                setEmail('');
                setMobiledNumber('');
                setName('');
                setOpen(true);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <Box
            sx={{
                backgroundImage: `url(${JoinUsBackground})`,
                height: '95vh',
                pt: 2,
                pb: 2,
                position: "relative",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {isMediumScreen ?
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: "absolute",
                        bottom: 160,
                        right: 50,
                        margin: "8vh",
                        justifyContent: 'center',
                        alignContent: 'start'
                    }}
                >

                    <Typography variant='h5'>
                        <Box sx={{ fontWeight: 'bold' }}>Are you a Doctor looking to join us?</Box>
                    </Typography>
                    <Typography>You can fill up this <Hyperlink href='https://docs.google.com/forms/d/e/1FAIpQLSfNShKQKr6CsCpBg0oI5UQqROwP0i_-Q479RzbvEQ7Tev7bWQ/viewform' target="_blank">Google Form</Hyperlink></Typography>
                    {/* <Typography>
                        <Box sx={{ textAlign: 'center' }}>
                            Or
                        </Box>
                    </Typography>
                    <Typography>Fill up below form and we will get back to you soon!</Typography>
                    <TextInput label='Name' type='text' color={COLORS.primaryDark} handleChange={(event) => setName(event.target.value)} />
                    <TextInput label='Mobile Number' type='text' handleChange={(event) => setMobiledNumber(event.target.value)} />
                    <TextInput label='Email' handleChange={(event) => setEmail(event.target.value)} />
                    <Button name='Submit' color={COLORS.primaryDark} handleClick={() => sendEmail()} /> */}
                </Box>
                :
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: "absolute",
                        bottom: 55,
                        left: '40%',
                        margin: "8vh",
                        justifyContent: 'center',
                        // alignItems: 'center'
                    }}
                >

                    <Typography variant='h5'>
                        <Box sx={{ fontWeight: 'bold' }}>Are you a Doctor looking to join us?</Box>
                    </Typography>
                    <Typography>You can fill up this <Hyperlink href='https://docs.google.com/forms/d/e/1FAIpQLSe2oTRWq02VzSy7S5HyZLXbUtGdY1uwZrnmZjM5bEXNPWZMZA/viewform?pli=1' target="_blank">Google Form</Hyperlink></Typography>
                    {/* <Typography>
                        <Box sx={{ textAlign: 'center' }}>
                            Or
                        </Box>
                    </Typography>
                    <Typography>Fill up below form and we will get back to you soon!</Typography>
                    <TextInput label='Name' type='text' color={COLORS.primaryDark} handleChange={(event) => setName(event.target.value)} />
                    <TextInput label='Mobile Number' type='text' handleChange={(event) => setMobiledNumber(event.target.value)} />
                    <TextInput label='Email' handleChange={(event) => setEmail(event.target.value)} />
                    <Button name='Submit' color={COLORS.primaryDark} handleClick={() => sendEmail()} /> */}
                </Box>
            }
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Your request has been submitted!
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default DemoForm