import React from 'react';
import MuiButton from '@mui/material/Button';

export const RoundButton = (props) => {
  return (
    <MuiButton
        startIcon={props.icon}
        sx={{
            borderRadius: '50%',
            backgroundColor: props.color
        }}
    >
        {props.name}
    </MuiButton>
  )
}
