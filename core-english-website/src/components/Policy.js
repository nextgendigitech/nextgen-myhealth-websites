import { Box, Typography } from '@mui/material'
import React from 'react'
import COLORS from '../utility/styles'
import Header from './Header'

const Policy = (props) => {
  return (
    <Box
        sx={{
            m: 2
        }}
    >
        {
            props.sectionHeader.map((element, key) => 
               <Box
                    sx={{
                        m: 1,
                        p: 2
                    }}
               >
                    <Header key={key} title={element} color={COLORS.textColor}>{element}</Header>
                    <hr></hr>
                    {props.sectionParaphrase[element].map((element, key) => 
                        <Typography key={key} variant='body1'
                            sx={{
                                pl: 2,
                                pr: 2 ,
                                pb: 1
                            }}
                        >
                            {element}
                        </Typography>
                    )}
               </Box>
            )
        }
    </Box>
  )
}

export default Policy