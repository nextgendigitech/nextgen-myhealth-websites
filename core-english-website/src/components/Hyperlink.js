import { color, styled } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import COLORS from '../utility/styles'

export const Hyperlink = styled('a')(
    ({ theme, color }) => `
    color: ${color};
    text-decoration: none;
    margin: ${theme.spacing(0.5)};
    cursor: pointer
    `
)

export const NavigationLink = styled(Link)(
    ({ theme }) =>`
    text-decoration: none;
    margin: ${theme.spacing(0.5)};
    `
)