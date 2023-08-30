import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import COLORS from '../../utility/styles';
import YoutubeEmbed from '../../components/YoutubeEmbed';
import Subheader from '../../components/Subheader';
import { CenterPanel, HeaderContainer } from '../../layouts/Container';
import KeyPointRow from './KeyPointRow';

const AboutUs = () => {
    const isMediumScreen = useMediaQuery(useTheme().breakpoints.down('md'));
    const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <CenterPanel>
        <HeaderContainer>
            <h1>About Us</h1>
        </HeaderContainer>
        <Box
            id='about-us'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: isMobileScreen ? 'start' : 'center',
                pt: 2,
                pb: 2,
                pl: 4,
                pr: 4,
            }}
        >   
            {
                isMobileScreen ?
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Subheader title='Know more'  color={COLORS.textColor}></Subheader>
                    <Header title='About Us' color={COLORS.textColor} textTransform='none'></Header>
                </Box>
                :
                <Header title='Know More About Us' color={COLORS.textColor} textTransform='none'></Header>
            }
            
            <Grid
                container
                spacing={2}
                alignItems='center'
                sx={{
                    mt: 3
                }}
                >
                    <Grid container item lg={6} md={6} sm={12} xs={12} justifyContent="center">
                        <Typography variant='h6' sx={{ color: COLORS.greyColor}}>
                            Our company, NextGen DigiTech Ltd,
                            is a private research-based company
                            composed of a team of doctors,
                            medical experts, researchers, and IT
                            experts. At NextGen DigiTech, we
                            have an uncompromising focus on
                            making every day better for both
                            patients and doctors. NextGen MyHealth VCP is a health product 
                            of NextGen DigiTech Ltd. Bangladesh.
                        </Typography>
                    </Grid>
                    <Grid container item lg={6} md={6} sm={12} xs={12} justifyContent="center">
                        <YoutubeEmbed embedId='NdZ9vPHAy7w' />
                    </Grid>
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 4,
                    mb: 2,
                }}
            >
                <Header title='Why Choose NextGen MyHealth?' textTransform='none' color={COLORS.textColor}/>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '60%',
                        m: 2                     
                    }}
                >
                    <Typography variant='h6' sx={{ color: COLORS.greyColor}}>
                        <Box
                            textAlign='center'
                        >
                        
                        </Box>
                    </Typography>
                </Box>
                <KeyPointRow />
            </Box>
        </Box>
    </CenterPanel>
  )
}

export default AboutUs