import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import COLORS from '../../utility/styles';

const Image = styled('img')(
    ({ theme }) => `
    height: 90px;
    width: 100px;
    float: center;
    margin: ${theme.spacing(0.5)};
    border-radius: 20%;
    border: 1px solid ${COLORS.primaryLight};
    background: ${COLORS.primaryLight};
    padding: ${theme.spacing(0.5)}
    `
)
  
const ImageBox = styled(Box)(
    ({ theme }) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${theme.spacing(2)};
`
)

const FeatureCard = styled(Card)(
    ({ theme }) => ({
        boxShadow: `0px 1px 4px 3px ${COLORS.lightGrey}`,
        ':hover': {
            boxShadow: `0px 1px 4px 5px ${COLORS.lightGrey}`
        }
    })

)

const Feature = (props) => {
  return (
    <Grid container alignItems="center" justifyContent='center' item xl={2} lg={3} md={4} sm={4} xs={9}>
        <FeatureCard 
            sx={{ 
                maxWidth: 500,
                minHeight: 290, 
                m: 1, 
            }}
        >
            <ImageBox>
                <Image src={props.image}></Image>
            </ImageBox>
            <CardContent>
                <Typography variant='body1'>
                    <Box
                        sx={{
                            textTransform: 'uppercase',
                            textAlign: 'center',
                            color: COLORS.redColor
                        }}
                    >
                        {props.featureHeader}
                    </Box>
                </Typography>
                <Typography variant="body2">
                    <Box
                        sx={{
                            textAlign: 'center',
                            color: COLORS.greyColor
                        }}
                        >
                        {props.featureText}
                    </Box>
            </Typography>
            </CardContent>
        </FeatureCard>
    </Grid>
  )
}

export default Feature