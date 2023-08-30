import { Box } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system'
import COLORS from '../utility/styles'

export const CenterPanel = styled(Box)(
    ({ theme }) => `
    display: flex;
    flex-direction: column;
    margin-top: 12vh
    `
)

export const HeaderContainer = styled(Box)(
    ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 12vh;
    color: ${COLORS.whiteColor};
    background-color: ${COLORS.primaryColor}
    `
)