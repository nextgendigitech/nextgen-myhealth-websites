import { Grid, useMediaQuery, useTheme, Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Doctor from './Doctor'
import { fetchDoctors }  from '../../services/apis';

const DoctorList = () => {
  const isMediumScreen = useMediaQuery(useTheme().breakpoints.down('md'));
  const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

  const [doctors, setDoctors] = useState([])
  const [loader, setLoader] = useState(false)
  const { specialty } = useParams()

  const showDoctorList = (specialty) => {
    setDoctors([])
    setLoader(true)
    fetchDoctors(specialty)
    .then((response) => {
        setDoctors(response.data.doctors)
        setLoader(false)
    })
  }

  useEffect(() => {
    showDoctorList(specialty)
  }, [])

  return (
    <Box sx={{mt: 15}}>
      {
        isMobileScreen ? 
        <div>
          {loader ? 
            <>
              <h4>Please wait... We value your time!</h4>
            </> :
            <>
            {doctors.length && doctors.length > 0 ? <h4>We have found <b>{doctors.length}</b> {doctors.length > 1 ? 'doctors' : 'doctor'} for you.</h4> : <h4>No doctor found</h4>}
            </>
          }
          
          <Grid container spacing={2}>
            {doctors.map((doctor, index)=> 
              <Doctor 
                key={index}
                id={doctor.id}
                doctorImage={'https://nextgenmyhealth.com:8000' + doctor.image} 
                bmdc={doctor.doctor_type === 'MBBS' ? 'A-' + doctor.bmdc : doctor.bmdc} 
                fee={doctor.fee}
                doctorName={doctor.name} 
                doctorDegree={doctor.qualification}
                doctorSpeciality={doctor.specialty}
                doctorPosition={doctor.affiliation_summary.length > 0 ? doctor.affiliation_summary[0].institution : ''}
                doctorExperience={doctor.experience ? doctor.experience + ' of experience' :  ''}
              />
            )}
          </Grid>
        </div> :
        <div>
          {loader ? 
            <>
              <h4>Please wait... We value your time!</h4>
            </> :
            <>
            {doctors.length && doctors.length > 0 ? <h4>We have found <b>{doctors.length}</b> {doctors.length > 1 ? 'doctors' : 'doctor'} for you.</h4> : <h4>No doctor found</h4>}
            </>
          }
          <Grid container spacing={2}>
            {doctors.map((doctor, index)=> 
              <Doctor 
                key={index}
                id={doctor.id}
                doctorImage={'https://nextgenmyhealth.com:8000' + doctor.image} 
                bmdc={doctor.doctor_type === 'MBBS' ?  'A-' + doctor.bmdc : doctor.bmdc} 
                fee={doctor.fee}
                doctorName={doctor.name} 
                doctorDegree={doctor.qualification}
                doctorSpeciality={doctor.specialty}
                doctorPosition={doctor.affiliation_summary.length > 0 ? doctor.affiliation_summary[0].institution : ''}
                doctorExperience={doctor.experience ? doctor.experience + ' of experience' :  ''}
              />
            )}
          </Grid>
        </div>
    }
    </Box>
    
  )
}

export default DoctorList