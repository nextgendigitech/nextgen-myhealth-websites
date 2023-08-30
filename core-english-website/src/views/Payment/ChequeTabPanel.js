import { Box, Typography } from '@mui/material'
import React from 'react'

const ChequeTabPanel = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2
      }}
    > 
      <Box>
        <Typography variant='h6'>
          <Box
            sx={{
              mb: 3,
              borderBottom: 1
            }}
          >
          Cash/Cheque/Bank Deposit
          </Box>
        </Typography>
        <Typography><b>NEXTGEN DIGITECH LTD.</b></Typography>
        <Typography><b>AC No:</b> 2104174034072</Typography>
        <Typography><b>SWIFT Code:</b> PRBLBDDH001</Typography>
        <Typography><b>Prime Bank Ltd</b></Typography>
        <Typography>Adamjee Court Annex Building 2,</Typography>
        <Typography>119-120 Motijheel C/A,</Typography>
        <Typography>Dhaka 1000, Bangladesh.</Typography>
      </Box>
    </Box>
  )
}

export default ChequeTabPanel