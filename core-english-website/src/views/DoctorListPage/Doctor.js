import { Avatar, Box, Card, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import COLORS from '../../utility/styles.js'
import Button from '../../components/Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Doctor = (props) => {
  const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('sm'));
  const [loader, setLoader] = useState(false)

  return (
    <>
      {
        isMobileScreen ?
          <>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Card variant='outlined'>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    p: 1
                  }}
                >
                  <Box
                    sx={{
                      m: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <Avatar
                      src={props.doctorImage}
                      sx={{
                        width: 100,
                        height: 100,
                        boxShadow: `1px 1px 2px 2px ${COLORS.lightGrey}`
                      }}
                    />
                    <Typography variant='body2'>BMDC No</Typography>
                    <Typography variant='body1'><b>{props.bmdc}</b></Typography>
                    <Typography variant='body2'>{'Regular Fee: ৳' + props.fee}</Typography>
                  </Box>
                  <Grid
                    container
                    spacing={2}
                    alignItems='center'
                  >
                    <Grid item xl={9} lg={12} md={12} sm={12} xs={12}>
                      <Typography variant='body1'><b>
                        <Box
                          sx={{
                            color: COLORS.primaryDark
                          }}
                        >
                          {props.doctorName}
                        </Box>
                      </b></Typography>
                      <Typography variant='body1'> {props.doctorDegree}</Typography>
                      <Typography variant='body1'>
                        <Box
                          sx={{
                            color: COLORS.redColor
                          }}
                        >
                          {props.doctorSpeciality}
                        </Box>
                      </Typography>
                      <Typography variant='body1'>
                        <Box
                          sx={{
                            color: COLORS.greenColor
                          }}
                        >
                          {props.doctorPosition}
                        </Box>
                      </Typography>
                      <Typography variant='body1'>
                        <i>
                          <Box
                            sx={{
                              color: COLORS.primaryFooterColor
                            }}
                          >
                            {props.doctorExperience}
                          </Box>
                        </i>
                      </Typography>
                      <Box>
                        {/* <Hyperlink href='https://patient.nextgenmyhealth.com/' target="_blank"><Button name='Book Appointment' color={COLORS.facebookColor}></Button></Hyperlink> */}
                        <Link to={`/doctor-details/${props.id}`}>
                          <Button name='Doctor Profile' color={COLORS.greenColor}></Button>
                        </Link>
                        {/* <Link to={`/doctor-details/${props.id}`} >
                          <AiOutlineShareAlt />
                        </Link> */}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid>
          </>
          :
          <>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Card variant='outlined'>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    p: 1
                  }}
                >
                  <Box
                    sx={{
                      m: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <Avatar
                      src={props.doctorImage}
                      sx={{
                        width: 150,
                        height: 150,
                        boxShadow: `1px 1px 2px 2px ${COLORS.lightGrey}`
                      }}
                    />
                    <Typography variant='body2'>BMDC No</Typography>
                    <Typography variant='body1'><b>{props.bmdc}</b></Typography>
                    <Typography variant='body2'>{'Regular Fee: ৳' + props.fee}</Typography>
                  </Box>
                  <Grid
                    container
                    spacing={2}
                    alignItems='center'
                  >
                    <Grid item xl={9} lg={12} md={12} sm={12} xs={12}>
                      <Typography variant='h5'><b>
                        <Box
                          sx={{
                            color: COLORS.primaryDark
                          }}
                        >
                          {props.doctorName}
                        </Box>
                      </b></Typography>
                      <Typography variant='body1'> {props.doctorDegree}</Typography>
                      <Typography variant='body1'>
                        <Box
                          sx={{
                            color: COLORS.redColor
                          }}
                        >
                          {props.doctorSpeciality}
                        </Box>
                      </Typography>
                      <Typography variant='body1'>
                        <Box
                          sx={{
                            color: COLORS.greenColor
                          }}
                        >
                          {props.doctorPosition}
                        </Box>
                      </Typography>
                      <Typography variant='h6'>
                        <i>
                          <Box
                            sx={{
                              color: COLORS.primaryFooterColor
                            }}
                          >
                            {props.doctorExperience}
                          </Box>
                        </i>
                      </Typography>
                      <Box>
                        {/* <Hyperlink href='https://patient.nextgenmyhealth.com/' target="_blank"><Button name='Book Appointment' color={COLORS.facebookColor}></Button></Hyperlink> */}
                        <Link to={`/doctor-details/${props.id}`}>
                          <Button name='Doctor Profile' color={COLORS.greenColor}></Button>
                        </Link>
                        {/* <Link to={`/doctor-details/${props.id}`} >
                          <AiOutlineShareAlt onClick={() => navigator.clipboard.writeText(`https://nextgenmyhealth.com/doctor-details/${props.id}`)}/>
                        </Link> */}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid>
          </>

      }
    </>
  )
}

export default Doctor