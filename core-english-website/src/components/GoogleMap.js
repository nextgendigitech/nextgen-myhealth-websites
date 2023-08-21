import { Box } from '@mui/material'
import React from 'react'

const GoogleMap = (props) => {
  return (
    <Box
        sx={{
            mb: 2
        }}
    >
        <iframe src={props.location} 
            width="100%" 
            height="450"    
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            style={{ border: 0}}
        >

        </iframe>

    </Box>
  )
}

export default GoogleMap