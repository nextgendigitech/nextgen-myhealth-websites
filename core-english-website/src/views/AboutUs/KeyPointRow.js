import { Grid } from '@mui/material';
import React from 'react';
import KeyPoint from './KeyPoint';

const KeyPointRow = () => {
  const keyPointRowOne = [
    {
      title: 'User Friendly Portals',
      description: 'Simple to use for users of all ages on the patient and doctor sides. '
    },
    {
      title: 'Reputed Specialists',
      description: 'Access to all renowned specialist doctors on NextGen MyHealth VCP.'
    },
    {
      title: 'E-prescription Service',
      description: 'The doctor will upload the E-prescription following the conclusion of the video session. The E-prescription is available for download and usage right away or later. '
    }
  ]

  const keyPointRowTwo = [
    {
      title: 'Appointment Notification',
      description: 'Early notification through SMS and E-mail  to both patient and doctors for online consultation.'
    },
    {
      title: 'Diagnostic Report Upload',
      description: 'The patient can use both the smartphone camera and an image upload to upload their diagnostic report to the portal.'
    },
    {
      title: '7 Days Services',
      description: 'NextGen MyHealth VCP is devoted to providing top-notch service seven days a week.'
    }
  ]
  return (
    <>
      {/* Row one */}
      <Grid
        container
        flexDirection='row'
        justifyContent='center'
        spacing={2}
      >
        {keyPointRowOne.map((keyPoint, index) =>
          <KeyPoint index={index} title={keyPoint.title} description={keyPoint.description} />
        )}
      </Grid>

      {/* Row two */}
      <Grid
        container
        flexDirection='row'
        justifyContent='center'
        spacing={2}
        >
        {keyPointRowTwo.map((keyPoint, index) =>
          <KeyPoint index={index} title={keyPoint.title} description={keyPoint.description} />
        )}
      </Grid>
    </>
  )
}

export default KeyPointRow