import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import COLORS from '../utility/styles'
import Button from './Button'

const Image = styled('img')(
  ({ theme }) => `
  height: ${theme.spacing(80)};
  `
)

const ImageDialog = (props) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose} maxWidth>
        <DialogTitle>
            {props.title}
        </DialogTitle>
        <DialogContent>
            <Image src={props.src}/>
        </DialogContent>
        <DialogActions>
            <Button name='Close' color={COLORS.primaryFooterColor} handleClick={props.handleClose}>Close</Button>
        </DialogActions>
    </Dialog>
  )
}

export default ImageDialog