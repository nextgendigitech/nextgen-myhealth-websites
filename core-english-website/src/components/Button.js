
import MuiButton from '@mui/material/Button';
import React from 'react';
import COLORS from '../utility/styles';

const Button = (props) => {
  return (
    <MuiButton
        onClick={props.handleClick}
        startIcon={props.icon}
        size={props.size}
        sx={{
            backgroundColor: props.color,
            color: COLORS.whiteColor,
            ':hover': {
                backgroundColor: props.color,
                color: COLORS.whiteColor,
            },
            mt: 1,
            mb: 1,
            pr: 4,
            pl: 4,
        }}
    >{props.name}
    </MuiButton>
  )
}

export default Button