import { Box, Typography } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import Subheader from '../../components/Subheader';
import COLORS from '../../utility/styles';
import StepsSection from './StepsSection';

const index = () => {
    
  return (
   <>
    <Box
        id='steps'
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: 2,
            pb: 2,
            pl: 2,
            pr: 2
        }}
    >   
        <Header title='Do not wait in line for hours!' color={COLORS.textColor} textTransform='none' />
        <Typography variant='h6'>
            <Box
                sx={{
                    color: COLORS.textColor,
                    fontWeight: 'bold'
                }}
            >
            Easy Steps to Get Consultation
            </Box>
        </Typography>
        
    </Box>
    <StepsSection />
   </>
    
  )
}

export default index