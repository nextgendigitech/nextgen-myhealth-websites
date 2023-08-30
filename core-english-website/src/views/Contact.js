import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import TextArea from '../components/TextArea'
import Button from '../components/Button'
import { CenterPanel, HeaderContainer } from '../layouts/Container'
import COLORS from '../utility/styles'
import GoogleMap from '../components/GoogleMap'
import { FiSend } from 'react-icons/fi'

const Contact = () => {
  return (
    <CenterPanel>
        <HeaderContainer>
            <h1>Contact Us</h1>
        </HeaderContainer>
        <GoogleMap location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.63227680257!2d90.39878073036495!3d23.759569753355972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89d3dd8b15b%3A0x67e1927b435c9207!2sBangladesh%20Industrial%20Technical%20Assistance%20Center%20(BITAC)!5e0!3m2!1sen!2sbd!4v1666255392380!5m2!1sen!2sbd"/>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2,
          }}
        >
          {/* <Header title='Get In Touch' color={COLORS.textColor} />
          <Grid
            container
            spacing={1}
            justifyContent='center'
          >
            <Grid item xl={4} lg={6} md={4} sm={12}>
              <TextInput label='Name' type='text' color={COLORS.primaryDark}/>
            </Grid>
            <Grid item xl={4} lg={6} md={4} sm={12}>
              <TextInput label='Subject' type='text' />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            justifyContent='center'
          >
            <Grid item xl={4} lg={6} md={4} sm={12}>
              <TextInput label='Email' type='text' />
            </Grid>
            <Grid item xl={4} lg={6} md={4} sm={12}>
              <TextInput label='Mobile' type='text' />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            justifyContent='center'
          >
            <Grid item xl={8} lg={12} md={8} sm={12}>
              <TextArea label='Message' type='text' />
            </Grid>
          </Grid>
          <Button name='Send' color={COLORS.primaryDark} icon={<FiSend />}/> */}
        </Box>
    </CenterPanel>
  )
}

export default Contact