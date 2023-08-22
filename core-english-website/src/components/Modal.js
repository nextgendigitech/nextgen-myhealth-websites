import { AppBar, Dialog, DialogContent, IconButton, Toolbar, Typography, Backdrop, CircularProgress } from '@mui/material'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import COLORS from '../utility/styles'
import Slide from '@mui/material/Slide';
import Loader from '../images/loader.gif'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = (props) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose} fullScreen={props.fullScreen}>
      <AppBar sx={{ position: 'relative', backgroundColor: COLORS.primaryColor }}>
        <Toolbar>
        <IconButton
            edge="end"
            color="inherit"
            onClick={props.handleClose}
            aria-label="close"
          > 
            <BiArrowBack />
          </IconButton>
        <Typography sx={{ ml: 2}} variant="h6" component="div">
            {props.modalHeader}
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent>
        {props.modalContent}
      </DialogContent>
      <Backdrop
          sx={{ backgroundColor: 'rgba(0,0,0,0)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={props.loader}
      >
          <img src={Loader} />
      </Backdrop>
    </Dialog>
  )
}

export default Modal