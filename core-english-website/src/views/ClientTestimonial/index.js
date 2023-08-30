import React from 'react';
import SubHeader from '../../components/Subheader';
import Header from '../../components/Header';
import { Box } from '@mui/system';
import COLORS from '../../utility/styles';
import TestimonialList from './TestimonialList';

const index = () => {
  return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            pt: 5,
            pb: 5
        }}
    >
        <Header title='Client Testimonials' color={COLORS.textColor} textTransform='none' />
        <Header title='What Our Clients Say' color={COLORS.textColor} />
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                pt: 6,
                m: 2
            }}
        >
           
           <TestimonialList />
        </Box>
    </Box>
  )
}

export default index