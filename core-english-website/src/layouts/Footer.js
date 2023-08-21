import React from 'react';
import { Box, styled, width } from '@mui/system';
import COLORS from '../utility/styles';
import Typography from '@mui/material/Typography';
import { MdEmail } from 'react-icons/md';
import { MdPhoneAndroid } from 'react-icons/md';
import { Grid } from '@mui/material';
import MyHealthLogo from '../images/my-health.png';
import SSLCommerzLogo from '../images/ssl-commerz.png';
import { Link } from 'react-router-dom';
import { Hyperlink, NavigationLink } from '../components/Hyperlink';
import FooterBackground from '../images/footer-background.png';

const FooterContainer = styled('div')(
    ({ theme }) => `
    height: auto;
    width: 100%;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.footerColor};
    `
)

const ContactBox = styled(Box)(
    ({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-top: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(1)};
    `
)

const ContactIcon = styled('div')(
    ({ theme }) => `
    font-size: 1.8rem;
    color: ${COLORS.primaryColor};
    margin-right: ${theme.spacing(0.5)}
    `
)

const ContactText = styled(Typography)(
    ({ theme }) => `
    color: ${COLORS.greyColor};
    `
)

const Logo = styled('img')(
    ({ theme }) => `
    cursor: pointer;
    height: ${theme.spacing(12)};
    margin: ${theme.spacing(0.5)};
    `
)

const FooterSectionHeader = styled(Typography)(
    ({ theme }) => `
    margin-top: ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(4)};
    `
)

const Footer = () => {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <FooterContainer
            id='footer'
        >
            <Box
                sx={{
                    display: 'flex',
                    backgroundImage: `url(${FooterBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: 1,
                    mt: 5
                }}
            >
                <Grid 
                    sx={{
                        paddingLeft: 10,
                        paddingTop: 10,
                        paddingRight: 10,
                        paddingBottom: 10
                    }}
                    container 
                    direction="row"
                    justifyContent="center"
                    spacing={2}>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'start',
                                borderRight: {xl: 1, lg: 1, md: 1, sm: 0, xs: 0},
                                borderColor: {xl: 'grey.300', lg: 'grey.300', md: 'grey.300'}
                            }}
                        >
                            <ContactBox>
                                <Logo src={MyHealthLogo} />
                                <Typography variant='h5'>NextGen MyHealth VCP</Typography>
                                <ContactText variant='body1'><b>Health Division</b></ContactText>
                                <a href='https://nextgendgtech.com/' target='_blank'><ContactText variant='body1'>NextGen DigiTech Ltd.</ContactText></a>
                                <ContactText variant='body1'>Tool & Technology Institute, BITAC</ContactText>
                                <ContactText variant='body1'>Ministry of Industries</ContactText>
                                <ContactText variant='body1'>116 (kha), Tejgaon Industrial Area,</ContactText>
                                <ContactText variant='body1'>Dhaka-1208, Bangladesh.</ContactText>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}
                                >
                                    <ContactIcon><MdPhoneAndroid /></ContactIcon><Typography variant='body1'>+880 1321119391</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}
                                >
                                    <ContactIcon><MdEmail /></ContactIcon><Typography variant='body1'>info@nextgenmyhealth.com</Typography>
                                </Box>
                                
                            </ContactBox>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}
                            sx={{
                                display: 'flex',
                                justifyContent: {xl: 'center', lg: 'center', md: 'center', sm: 'center', xs: 'start'},
                                alignItems: 'start',
                                borderRight: {xl: 1, lg: 1, md: 1, sm: 0, xs: 0},
                                borderColor: {xl: 'grey.300', lg: 'grey.300', md: 'grey.300'}
                            }}
                        >
                            <ContactBox>
                                <FooterSectionHeader variant='h5'>Company</FooterSectionHeader>
                                <NavigationLink to='/contact'><ContactText variant='body1'>Contact Us</ContactText></NavigationLink>
                                <NavigationLink to='/about-us'><ContactText variant='body1'>About Us</ContactText></NavigationLink>
                                <NavigationLink to='/specialities'><ContactText variant='body1'>Specialities</ContactText></NavigationLink>
                            </ContactBox>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}
                            sx={{
                                display: 'flex',
                                justifyContent: {xl: 'center', lg: 'center', md: 'center', sm: 'center', xs: 'start'},
                                alignItems: 'start',
                                borderRight: {xl: 1, lg: 1, md: 1, sm: 0, xs: 0},
                                borderColor: {xl: 'grey.300', lg: 'grey.300', md: 'grey.300'}
                            }}
                        >
                            <ContactBox>
                                <FooterSectionHeader variant='h5'>Services</FooterSectionHeader>
                                <Hyperlink href='https://patient.nextgenmyhealth.com/' target="_blank"><ContactText variant='body1'>Find A Doctor</ContactText></Hyperlink>
                                {/* <Hyperlink><ContactText variant='body1'>FAQs</ContactText></Hyperlink> */}
                                <Hyperlink href='https://doctor.nextgenmyhealth.com/' target="_blank"><ContactText variant='body1'>For Doctors</ContactText></Hyperlink>
                            </ContactBox>
                        </Grid>
                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}
                            sx={{
                                display: 'flex',
                                justifyContent: {xl: 'center', lg: 'center', md: 'center', sm: 'center', xs: 'start'},
                                alignItems: 'start',
                            }}
                        >
                            <ContactBox>
                                <FooterSectionHeader variant='h5'>Pay With</FooterSectionHeader>
                                {/* <AppIcon src={GooglePlay} />
                                <AppIcon src={AppleStore} /> */}
                                <NavigationLink to='/payment'><ContactText variant='body1'>Payment</ContactText></NavigationLink>
                            </ContactBox>
                        </Grid>
                </Grid>
            </Box>
    
            <Box 
                sx={{
                    display: 'flex',
                    // justifyContent: 'center',
                    flexDirection: 'column',
                    width: '100%',
                    background: COLORS.primaryFooterColor,
                    p: 2
                }}
            >   
                <Typography 
                    variant='body2' 
                    align="center"
                >
                    <Box
                        sx={{
                            color: COLORS.lightGrey
                        }}
                    >
                        <Hyperlink 
                            href='/terms-and-conditions' 
                            color={COLORS.lightGrey}
                        >
                            Terms and Conditions
                        </Hyperlink>| 
                        <Hyperlink 
                            href='/privacy-policy' 
                            color={COLORS.lightGrey}
                        >
                            Privacy Policy
                        </Hyperlink>| 
                        <Hyperlink 
                            href='/refund-policy' 
                            color={COLORS.lightGrey}
                        >
                            Refund Policy
                        </Hyperlink>
                    </Box>
                </Typography>
                <Typography variant='body2' sx={{color: COLORS.lightGrey}} align="center">Copyright © {getYear()} NextGen DigiTech Ltd. All rights reserved.</Typography>
            </Box> 
        </FooterContainer>
    )
}

export default Footer