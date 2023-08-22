import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import SongsQRCode from '../images/song-qrcode.png';
import COLORS from '../utility/styles';
import WorldHeartDayLogo from '../images/world-heart-logo.jpg';
import Header from '../components/Header';
import Subheader from '../components/Subheader';


const QRCode = styled('img')(
    ({ theme, size }) => `
    height: ${theme.spacing(size)};
    width: ${theme.spacing(size)};
    margin: ${theme.spacing(2)};
    `
)

const HeartDayLogo = styled('img')(
    ({ theme, size }) => `
    height: ${theme.spacing(size)};
    width: ${theme.spacing(size)};
    `
)

const WorldHeartDay = () => {
    const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <>
        {
            isMobileScreen ?
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 4,
                    mb: 4
                }}
            >
                <Subheader title='World Heart Day: Scan & Listen songs' color={COLORS.textColor} textTransform='none'></Subheader>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xl={6} lg={6} md={5} sm={12} xs={12}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <QRCode src={SongsQRCode} size={18}/>  
                    </Grid>
                    <Grid item xl={6} lg={6} md={7} sm={12} xs={12}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <HeartDayLogo src={WorldHeartDayLogo} size={20}/>
                    </Grid>
                </Grid>
            </Box>:
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 4,
                    mb: 4
                }}
            >
                <Header title='World Heart Day: Scan & Listen songs' color={COLORS.textColor} textTransform='none'></Header>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xl={6} lg={6} md={5} sm={12} xs={12}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <QRCode src={SongsQRCode} size={35}/>  
                    </Grid>
                    <Grid item xl={6} lg={6} md={7} sm={12} xs={12}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <img src={WorldHeartDayLogo}/>
                    </Grid>
                </Grid>
            </Box>
        }
    </>
    
  )
}

export default WorldHeartDay