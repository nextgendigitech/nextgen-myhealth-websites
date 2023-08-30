import React from 'react';
import COLORS from '../../utility/styles';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const SerialNumber = styled('div')(
    ({ theme }) => `
    font-size: 1rem;
    color: ${COLORS.whiteColor};
    background-color: ${COLORS.greenColor};
    border-radius: 5px;
    margin-left: ${theme.spacing(0.5)};
    margin-right: ${theme.spacing(0.5)};
    margin-bottom: ${theme.spacing(1)};
    margin-top: ${theme.spacing(4)};
    padding: ${theme.spacing(0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    `
)

const StepDescCarousel = (props) => {
    const isMediumScreen = useMediaQuery(useTheme().breakpoints.down('md'));
    const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <>
        {
            isMediumScreen ?
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <SerialNumber>Step {props.stepIndex}</SerialNumber>
                <Box
                    sx={{
                        width: isMobileScreen ? '75%' : '50%'
                    }}
                >
                    <Typography variant='body1'>
                        <Box
                            sx={{
                                textAlign: 'center',
                                color: COLORS.greyColor
                            }}
                        >
                            {props.stepDesc}
                        </Box>
                    </Typography>
                </Box>
            </Box>
            :
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <SerialNumber>Step {props.stepIndex}</SerialNumber>
                <Box
                    sx={{
                        width: '25%'
                    }}
                >
                    <Typography variant='h6'>
                        <Box
                            sx={{
                                textAlign: 'center',
                                color: COLORS.greyColor
                            }}
                        >
                            {props.stepDesc}
                        </Box>
                    </Typography>
                </Box>
            </Box>
        }
    </>
  )
}

export default StepDescCarousel