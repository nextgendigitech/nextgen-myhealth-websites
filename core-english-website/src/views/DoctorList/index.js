import { Grid, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Doctor from './Doctor'

const DoctorList = (props) => {
  const isMediumScreen = useMediaQuery(useTheme().breakpoints.down('md'));
  const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <>
      {
        isMobileScreen ? 
        <div>
          {props.loader ? 
            <>
              <h4>Please wait... We value your time!</h4>
            </> :
            <>
            {props.doctors.length && props.doctors.length > 0 ? <h4>We have found <b>{props.doctors.length}</b> experienced {props.doctors.length > 1 ? 'doctors' : 'doctor'} for you.</h4> : <h4>No doctor found</h4>}
            </>
          }
          
          <Grid container spacing={2}>
            {props.doctors.map((doctor, index)=> 
              <Doctor 
                key={index}
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
          {props.loader ? 
            <>
              <h4>Please wait... We value your time!</h4>
            </> :
            <>
            {props.doctors.length && props.doctors.length > 0 ? <h4>We have found <b>{props.doctors.length}</b> experienced {props.doctors.length > 1 ? 'doctors' : 'doctor'} for you.</h4> : <h4>No doctor found</h4>}
            </>
          }
          <Grid container spacing={2}>
            {props.doctors.map((doctor, index)=> 
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
    </>
    
  )
}

export default DoctorList