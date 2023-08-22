import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import { CenterPanel, HeaderContainer } from '../../layouts/Container'
import COLORS from '../../utility/styles'
import MedicineSection from './MedicineSection'
import SurgerySection from './SurgerySection'

const AllSpecialities = () => {
  const isMediumScreen = useMediaQuery(useTheme().breakpoints.down('md'));
  const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <CenterPanel>
        <HeaderContainer>
            <h1>Specialities</h1>
        </HeaderContainer>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            mt: 3,
            mb: 4
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: isMobileScreen ? '70%' : '50%'
            }}
          >
            {isMobileScreen ?
            <Header title='Medicine Field' color={COLORS.textColor} />
            :
            <>
              <Header title='Fields of Medicine' textTransform='none' color={COLORS.textColor} />
            </>
            }
          </Box>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
          }}
        >
          <MedicineSection />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            mb: 4,
          }}
        >
          <Typography variant='h6'>
            <Box
              sx={{
                color: COLORS.greyColor,
                textAlign: 'center'
              }}
            >
            <Header title='Fields of Surgery' color={COLORS.textColor} textTransform='none'/>
            </Box>
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <SurgerySection />
        </Grid>
    </CenterPanel>
  )
}

export default AllSpecialities