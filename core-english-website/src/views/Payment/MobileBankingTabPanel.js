import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import BkashLogo from '../../images/bkash.png';

const MobileBankingTabPanel = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <img src={BkashLogo} />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              ml: 2
            }}
          >
            <Typography>Bkash Number: +88 01321119383</Typography>
            <Typography>Type: Merchant Account</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MobileBankingTabPanel