import { Grid, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import COLORS from '../../utility/styles';
import { BsShieldCheck } from 'react-icons/bs';

const IconContainer = styled('div')(
    ({ theme }) => `
    display: flex;
    align-items: center;
    margin: ${theme.spacing(1)};
    border-radius: 50%;
    border: 1px solid ${COLORS.primaryLight};
    background: ${COLORS.primaryLight};
    color: ${COLORS.primaryDark};
    font-size: 2.4rem;
    padding: ${theme.spacing(2)}
    `
)

const KeyPoint = (props) => {
  return (
    <Grid container alignItems="center" justifyContent='center' item xl={3} lg={3} md={4} sm={4} xs={9}>
        <Grid
            container
            spacing={2}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    mb: 4,
                    mt: 4,
                    mr: 3,
                    alignItems: 'center'
                }}
            >
                <IconContainer><BsShieldCheck /></IconContainer>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Typography variant='h6'>
                        <Box
                            sx={{
                                fontWeight: 'bold'
                            }}
                        >
                            {props.title}
                        </Box>
                    </Typography>
                    <Typography variant='body2'>{props.description}</Typography>
                </Box>
            </Box>
        </Grid>
    </Grid>
  )
}

export default KeyPoint