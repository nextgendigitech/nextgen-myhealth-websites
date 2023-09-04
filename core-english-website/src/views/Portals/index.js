import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import DoctorPortal from '../../images/doctor-portal.png'
import PatientPortal from '../../images/patient-portal.png'
import COLORS from '../../utility/styles'
import Button from '../../components/Button'
import { Hyperlink } from '../../components/Hyperlink'
import { motion, useAnimation } from "framer-motion";

const PortalImage = styled('img')(
  ({ theme }) => `
  margin-top: -30%;
  height: ${theme.spacing(50)};
  width: ${theme.spacing(50)};
  `
)

const PortalBox = styled('div')(
  ({ theme }) => `
  padding-top: 6%;
  padding-bottom: 8%;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 10%;
  margin-top: 10%;
  `
)

const Portals = () => {
  return (
    // <div>Portals</div>
    <motion.div
      initial={{ width: "0vw", x: "100%" }}
      animate={{ width: "100%", x: 0 }}
      transition={{ duration: 0.5, origin: 1 }}>
      <Grid
        container
      >
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <PortalBox
            sx={{
              backgroundColor: COLORS.lightGreenColor
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
              }}
            >
            <PortalImage src={DoctorPortal}/>
            <Typography variant='h4'>
              <Box
                sx={{
                  color: COLORS.greenColor,
                  fontWeight: 'bold'
                }}
              >
                If you are a Doctor,
              </Box>

            </Typography>
            <Typography variant='h5'>Please click the below button</Typography>
            <Hyperlink href='https://doctor.nextgenmyhealth.com/'><Button name='Doctor Portal' size='large' color={COLORS.greenColor}/></Hyperlink>
          </Box>
          </PortalBox>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
        <PortalBox
            sx={{
              backgroundColor: COLORS.secondaryLightBlue
            }}
          >
            <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <PortalImage src={PatientPortal}/>
            <Typography variant='h4'>
              <Box
                sx={{
                  color: COLORS.primaryColor,
                  fontWeight: 'bold'
                }}
              >
                If you are a Patient,
              </Box>

            </Typography>
            <Typography variant='h5'>Please click the below button</Typography>
            <Hyperlink href='https://patient.nextgenmyhealth.com/' target="_blank"><Button name='Patient Portal' size='large' color={COLORS.primaryColor}/></Hyperlink>
          </Box>
          </PortalBox>
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Portals