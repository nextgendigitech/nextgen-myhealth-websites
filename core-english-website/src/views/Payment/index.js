import { Box, styled } from '@mui/system'
import React from 'react'
import { CenterPanel, HeaderContainer } from '../../layouts/Container'
import OptionTab from './OptionTab'
import BackgroundImage from '../../images/payment-background.png'
import { Typography, useMediaQuery, useTheme } from '@mui/material'
import COLORS from '../../utility/styles'

const Banner = styled(Box)(
    ({ theme }) => `
    display: flex,
    background-image: url(${BackgroundImage}),
    height: 80vh,
    width: 1,
    flex-wrap: wrap,
    background-size: contain,
    background-position: center,
    background-repeat: no-repeat,
    `
)
const Payment = () => {
    const isMediumScreen = useMediaQuery(useTheme().breakpoints.down('md'));
    const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <CenterPanel>
        <HeaderContainer>
            <h1>Payment</h1>
        </HeaderContainer>
        {isMediumScreen ?
            <Box
                sx={{
                    display: 'flex',
                    backgroundImage: `url(${BackgroundImage})`,
                    height: isMobileScreen ? '20vh' : '50vh',
                    width: 1,
                    flexWrap: 'wrap',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
            </Box> :
            <Box
                sx={{
                    display: 'flex',
                    backgroundImage: `url(${BackgroundImage})`,
                    height: '50vh',
                    width: 1,
                    flexWrap: 'wrap',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
            </Box>
        }
        <Typography variant={isMobileScreen ? 'h6' : 'h5'}>
            <Box
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}
            >
                Follow your preferred procedure to complete payment. For any queries contact us.
            </Box>
        </Typography>
        <OptionTab />
        <Box
            sx={{
                backgroundColor: COLORS.primaryLight
            }}
        >
            <Typography variant='h6'>
                <Box
                    sx={{
                        textAlign: 'center',
                        p: 1,
                        color: COLORS.redColor
                    }}
                >
                    If you face any problem related to the payment, please call at +880 1321119391
                </Box>
            </Typography>
        </Box>
    </CenterPanel>
  )
}

export default Payment