import { Paper, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import COLORS from '../utility/styles'

const SpecialityIcon = styled('img')(
    ({ theme }) => `
    height: 50px;
    width: 50px;
    margin-bottom: 5px;
    margin-right: 10px
    `
)

const SpecialtyContainer = (props) => {
    return (
        <Paper
            onClick={props.handleClick}
            variant="outlined"
            sx={{
                borderRadius: '8px',
                borderColor: COLORS.specialtyBackgroundColor,
                backgroundColor: COLORS.specialtyBackgroundColor,
                minWidth: '360px',
                maxWidth: '360px',
                minHeight: '100px',
                p: 2,
                mr: 2,
                mb: 2,
                cursor: 'pointer'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <SpecialityIcon src={props.image} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                    }}
                >
                    <Typography variant='h6'>{props.specialityHeader}</Typography>
                    <Typography>{props.specialityBangla}</Typography>
                </Box>
            </Box>
        </Paper>
    )
}

export default SpecialtyContainer