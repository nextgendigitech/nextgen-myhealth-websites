import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import COLORS from '../../utility/styles'

const CounterContainer = styled('div')(
  ({ theme, color }) => `
    padding-top: ${theme.spacing(3)};
    padding-bottom: ${theme.spacing(3)};
    padding-right: ${theme.spacing(4)};
    padding-left: ${theme.spacing(4)};
    margin-right: ${theme.spacing(3)};
    margin-bottom: ${theme.spacing(5)};
    background-color: ${color};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: white
  `
)

const StepDescriptionBox = (props) => {
  const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <Box
      sx={{
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'start'
      }}
      onClick={props.handleClick}
    >
      <CounterContainer color={props.counter === props.order ? COLORS.redColor : COLORS.orangeColor}>
        <Typography variant='h2'>{props.counter}</Typography>
      </CounterContainer>
      <Box>
        <Typography variant='h5'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              fontWeight: 'bold'
            }}
          >
            <Box
              sx={{
                color: COLORS.textColor,
                mr: 1
              }}
            >
              {props.headerLeading}
            </Box>
            <Box
              sx={{
                color: COLORS.primaryColor
              }}
            >
              {props.headerTrailing}
            </Box>
          </Box>
        </Typography>
        <Typography>{props.description}</Typography>
      </Box>
    </Box>
  )
}

export default StepDescriptionBox