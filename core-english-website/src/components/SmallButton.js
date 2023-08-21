
import MuiButton from '@mui/material/Button';
import React from 'react';
import COLORS from '../utility/styles';

const SmallButton = (props) => {
  return (
    <MuiButton
        startIcon={props.icon}
        size={props.size}
        sx={{
            backgroundColor: props.color,
            color: COLORS.whiteColor,
            ':hover': {
                backgroundColor: props.color,
                color: COLORS.whiteColor,
            },
            mr: 0.25,
            textTransform: 'none',
            fontSize: props.fontSize
        }}
    >{props.name}
    </MuiButton>
  )
}

export default SmallButton