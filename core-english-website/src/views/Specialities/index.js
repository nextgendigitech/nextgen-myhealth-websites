import { Box, Grid } from '@mui/material';
import React from 'react';
import SpecialitiesSection from './SpecialitiesSection';

const Specialities = () => {
  return (
    <Box
        id='specialities'
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: 2,
            pb: 2,
            pl: 4,
            pr: 4,
            mt: 15,
            mb: 15
        }}
    >
        <SpecialitiesSection />
    </Box>
  )
}

export default Specialities