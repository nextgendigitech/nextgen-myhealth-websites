import { Grid, Slide, styled, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import Header from '../../components/Header'
import COLORS from '../../utility/styles'
import Button from '../../components/Button'
import FeatureList from './FeatureList'
import Subheader from '../../components/Subheader'
import { useState } from 'react'
import ImageDialog from '../../components/ImageDialog'
import Flyer from '../../images/flyer.png'
import Feature from '../../images/feature.png'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureBox = styled('img')(
    ({ theme }) => `
    height: auto;
    width: 90vw;
    `
)

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { ease: "easeOut", duration: 0.25 } },
    hidden: { opacity: 0, scale: 0 }
};

const Features = () => {
    const isMediumScreen = useMediaQuery(useTheme().breakpoints.down('md'));
    const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

    const [openDialog, setOpenDialog] = useState(false)

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView])
    


    const handleClose = () => {
        setOpenDialog(false)
    }
  return (
    <Box
        id='features'
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: 2,
            pb: 2,
            pl: 4,
            pr: 4,
            mt: 2

        }}
    >
        {isMobileScreen ?
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Subheader title='What is' color={COLORS.textColor} />
                <Header title='NextGen MyHealth VCP!' color={COLORS.textColor}></Header>
            </Box>
            :
            <Header title='What is NextGen MyHealth VCP!' color={COLORS.textColor}></Header>
        }
        
        <Box
            sx={{
                width: isMobileScreen ? '100%' : '50%',
            }}
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant={isMobileScreen ? 'body1' : 'h6'}>
                    <Box
                        sx={{
                            textAlign: 'center',
                            mt: 3,
                            mb: 3,
                            color: COLORS.greyColor
                        }}
                    >
                        NextGen MyHealth VCP is a health product of <a href='https://nextgendgtech.com/' target='_blank'>NextGen DigiTech Ltd.</a> Bangladesh.
                        "NextGen MyHealth VCP" offers unbroken care
                        chains, access to thousands of
                        doctors and specialists from
                        America, Europe, UK and
                        Bangladesh. Whether rural,
                        community-based, or urban, the
                        doctors and specialists can provide
                        high quality patient care anywhere,
                        anytime using "NextGen MyHealth VCP".
                    </Box>
                </Typography>
                <Button name='Flyer' color={COLORS.redColor}
                    handleClick={() => setOpenDialog(true)}
                />
                <ImageDialog title='NextGen MyHealth Flyer' open={openDialog} handleClose={handleClose} src={Flyer} />
            </Grid>
        </Box>
        {/* <FeatureList /> */}
        <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            <FeatureBox src={Feature} />
        </motion.div>
        
    </Box>
  )
}

export default Features