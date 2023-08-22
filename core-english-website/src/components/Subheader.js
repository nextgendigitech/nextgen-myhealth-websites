import React from 'react'
import Typography from '@mui/material/Typography';

const Subheader = (props) => {
  return (
    <Typography 
        variant='body1' 
        sx={{ 
            color: props.color,
        }}
        p={0.5}
        >
        {props.title}
    </Typography>
  )
}

export default Subheader