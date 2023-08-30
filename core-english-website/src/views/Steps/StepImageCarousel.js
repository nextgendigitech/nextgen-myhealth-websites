import React from 'react';
import COLORS from '../../utility/styles';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import StepBackground from '../../images/step-background.png';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';

const StepImage = styled('img')(
    ({ theme, size }) => `
    height: ${size};
    `
)

const PaginationIcon = styled('div')(
    ({ theme, size }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${COLORS.whiteColor};
    border: 1px solid ${COLORS.whiteColor};
    border-radius: 50%;
    padding: ${size === 'small' ? theme.spacing(1) : theme.spacing(2)};
    cursor: pointer
    `
)

const StepImageCarousel = (props) => {
    const isMediumScreen = useMediaQuery(useTheme().breakpoints.down('md'));
    const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <>
    {
        isMediumScreen ?
        <Box
            sx={{
                backgroundSize: 'cover',
                height: isMobileScreen ? '25vh' : '35vh',
                backgroundImage: `url(${StepBackground})`,
                mb: 20,
                justifyContent: 'center'
            }}
        >
            <Grid
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Grid item xl={4}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <div>
                        <PaginationIcon onClick={props.handleClickBackward} size='small'><BsChevronDoubleLeft /></PaginationIcon>
                    </div>
                    <StepImage src={props.image} size={isMobileScreen ? '25vh' : '35vh'}></StepImage>
                    <div>
                        <PaginationIcon onClick={props.handleClickForward} size='small'><BsChevronDoubleRight /></PaginationIcon>
                    </div>
                </Grid>
            </Grid>
        </Box>
        :
        <Box
            sx={{
                backgroundSize: 'cover',
                height: 'auto',
                backgroundImage: `url(${StepBackground})`,
                mb: 20,
                justifyContent: 'center'
            }}
        >
            <Grid
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Grid item xl={4}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <div>
                        <PaginationIcon onClick={props.handleClickBackward}><BsChevronDoubleLeft /></PaginationIcon>
                    </div>
                    <StepImage src={props.image} size='55vh'></StepImage>
                    <div>
                        <PaginationIcon onClick={props.handleClickForward}><BsChevronDoubleRight /></PaginationIcon>
                    </div>
                </Grid>
            </Grid>
        </Box>
    }
    </>
  )
}

export default StepImageCarousel