import React from 'react';
import { Box, color } from '@mui/system';
import COLORS from '../../utility/styles';
import { styled } from '@mui/system';
import ProfilePhoto from '../../images/pro-pic.png';
import { Typography } from '@mui/material';
import { IoStarSharp } from 'react-icons/io5';

const TestimonialContainer = styled('div')(
    ({ theme }) => `
    background-color: #ebebeb;
    margin-top: -16%;
    max-width: 400px;
    margin-left: 4%;
    margin-right: 4%;
    padding-top: 6%;
    padding-bottom: 8%;
    padding-left: 5%;
    padding-right: 5%;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `
)

const ClientImage = styled('img')(
    ({ theme }) => `
    height: ${theme.spacing(16)};
    margin: ${theme.spacing(0.5)};
    border-radius: 50%;
    border: 3px solid #FFFFFF;
    width: 139px !important;
    `
)

const TestimonialIconStyle = {
    fontSize: 34,
    color: '#FFD700'
}

const Testimonial = (props) => {
    const ratingHtml = () => {
        const ratingBox = [];
        for (let i = 0; i < props.rating; i++) {
            ratingBox.push(
                <IoStarSharp key={i+1} style={TestimonialIconStyle}/>
            )
        }
        return ratingBox;
    }
  return (
    <div>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',                  
            }}
        >
            <ClientImage src={props.image}></ClientImage>
        </Box>
        
        <TestimonialContainer>
            <Box
                sx={{
                    pt: 7,
                    pb: 4,
                }}
            >
                <Typography variant='h5'>{props.clientName}</Typography>
            </Box>
            <Box
                sx={{
                    pb: 4
                }}
            >
            <Typography variant='body2'>{props.testimonialText}</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                
                {ratingHtml()}
            </Box>
        </TestimonialContainer>
    </div>
  )
}

export default Testimonial