import { TextField } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import COLORS from '../utility/styles';

const Input = styled(TextField)({
    '& label': {
        color: props => props.color,
    },
    '& label.Mui-focused': {
        color: props => props.color,
    },
    '& .MuiInput-underline:after': {
    borderBottomColor: props => props.color,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: props => props.color,
        },
        '&:hover fieldset': {
            borderColor: props => props.color,
        },
        '&.Mui-focused fieldset': {
            borderColor: props => props.color,
        },
    },
})

const TextInput = (props) => {
  return (
    <Input 
        required={props.required ? true : false}
        label={props.label}
        type={props.type}
        variant='outlined'
        fullWidth
        size='small'
        margin='dense'
        onChange={props.handleChange}
    />
  )
}

export default TextInput