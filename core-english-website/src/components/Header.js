import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Header = (props) => {
  return (
    <Typography 
        variant='h6' 
        sx={{ 
            color: props.color,
            textTransform: 'uppercase',
        }}
        p={0.5}
        >
          <Box
            sx={{
              fontWeight: 'bold',
              textTransform: props.textTransform
            }}
          >
            {props.title}
          </Box>
    </Typography>
  )
}

export default Header