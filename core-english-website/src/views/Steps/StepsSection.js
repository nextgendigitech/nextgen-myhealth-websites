import React, { useState } from 'react';
import StepDescCarousel from './StepDescCarousel';
import StepImageCarousel from './StepImageCarousel';
import StepRegister from '../../images/steps/step-register.png';
import StepLogin from '../../images/steps/step-login.png';
import StepDashboard from '../../images/steps/step-dashboard.png';
import StepSearchDoctor from '../../images/steps/step-search-doctor.png';
import StepSelectDoctor from '../../images/steps/step-select-doctor.png';
import StepSelectSlot from '../../images/steps/step-select-slot.png';
import StepConfirmAppointment from '../../images/steps/step-confirm-appointment.png';
import StepFindAppointment from '../../images/steps/step-find-appointment.png';
import StepDescriptionBox from './StepDescriptionBox';
import { Grid } from '@mui/material';
import Search from '../../images/steps/step-search.png';
import Login from '../../images/steps/step-login.png';
import Slot from '../../images/steps/step-slot.png';
import Confirm from '../../images/steps/step-confirm.png';
import { styled } from '@mui/system';

const StepImage = styled('img')(
    ({ theme }) => `
    height: 90vh;
    `
)

const stepDictionary = {
    1: {
        image: StepRegister,
        stepDesc: 'Find a doctor by specialization, profile, and experience, or according to your needs, symptoms.'
    },
    2: {
        image: StepLogin,
        stepDesc: 'Login to the patient portal with phone number/email address and password. If you are new register yourself in a very simple process by using your name,phone number/email address and password.'
    },
    3: {
        image: StepDashboard,
        stepDesc: 'Click on the Book Appointment button and book the appointment of the doctor as per your convenient time.'
    },
    4: {
        image: StepSearchDoctor,
        stepDesc: 'Search doctor using doctor name, BMDC number and speciality.'
    },
    5: {
        image: StepSelectDoctor,
        stepDesc: 'Select doctor according to the speciality for a consultation.'
    },
    6: {
        image: StepSelectSlot,
        stepDesc: 'Check the available slot of the doctor and select the suitable slot for the consultation.'
    },
    7: {
        image: StepConfirmAppointment,
        stepDesc: 'Confirm the selected slot.'
    },
    8: {
        image: StepFindAppointment,
        stepDesc: 'After confirming the selected slot, the patient will be redirected to appointment details.'
    },
}

const stepList = [
    {
        headerLeading: 'Search',
        headerTrailing: 'Doctors',
        description: "Find a doctor by specialization, profile, and experience, or according to your needs, symptoms.",    
        image: Search
    },
    {
        headerLeading: 'Get',
        headerTrailing: 'Logged In',
        description: "Login to the patient portal with phone number/email address and password. If you are new register yourself in a very simple process by using your name,phone number/email address and password." ,   
        image: Login
    },
    {
        headerLeading: 'Choose',
        headerTrailing: 'Appointment',
        description: "Click on the Book Appointment button and book the appointment of the doctor as per your convenient time.",    
        image: Slot
    },
    {
        headerLeading: 'Book',
        headerTrailing: 'Appointment',
        description: "Confirm your appointment by online payment.",    
        image: Confirm
    },
    
]

const StepsSection = () => {
    const [stepIndex, setStepIndex] = useState(1);
    const [stepCounter, setStepCounter] = useState(1);

    var lastStepIndex = Object.keys(stepDictionary).pop();

    const handleClickBackward = () => {
        if (stepIndex > 1) {
            setStepIndex(stepIndex-1);
        }
    }

    const handleClickForward = () => {
        if (stepIndex < lastStepIndex) {
            setStepIndex(stepIndex+1);
        }
    }

    const handleClick = (counter) => {
        setStepCounter(counter)
    }

  return (
   <>   
        <Grid
            container
            justifyContent='center'
            alignItems='center'
        >   
            <Grid
                item xl={5} lg={9} md={6} sm={12} xs={12}
            >
                
                {
                    stepList.map((step, index) => 
                        <StepDescriptionBox order={stepCounter} counter={index+1} handleClick={() => handleClick(index+1)} headerLeading={step.headerLeading} headerTrailing={step.headerTrailing} description={step.description}/>
                    )
                }
            </Grid>
            <Grid
                item xl={3} lg={3} md={6} sm={12} xs={12}
            >
                <StepImage src={stepList[stepCounter-1].image} />
            </Grid>
        </Grid>
        {/* <StepDescCarousel stepDesc={stepDictionary[stepIndex].stepDesc} stepIndex={stepIndex}/>
        <StepImageCarousel handleClickBackward={handleClickBackward} handleClickForward={handleClickForward} image={stepDictionary[stepIndex].image} /> */}
   </>
  )
}

export default StepsSection