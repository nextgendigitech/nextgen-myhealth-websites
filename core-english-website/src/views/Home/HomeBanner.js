import { Box, Grid, Slide, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SliderOne from '../../images/web-banner.png';
import SliderTwo from '../../images/home-banner.png';
import SliderThree from '../../images/home-banner-1.png';
import { styled } from '@mui/system';
import '../../App.css'

const BannerImage = styled('img')(
  ({ theme }) => `
  margin-top: ${theme.spacing(15)};
  height: auto;
  width: 100%;
  `
)

const HomeBanner = () => {
  const isMediumScreen = useMediaQuery(useTheme().breakpoints.down('md'));
  const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

  const sliderList = [SliderOne, SliderTwo, SliderThree]

  const [bannerIndex, setBannerIndex] = useState(0)
  const [slideIn, setSlideIn] = useState(false)

  let slide = 0;
  let items = sliderList.length;
  
  function nextSlide() {
    if (slide < items) {
      setBannerIndex(slide)
      slide ++;
    } else if (slide === items) {
      slide = 0;
      setBannerIndex(slide);
    }
  }

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      nextSlide()
    }, 4000);
    return () => clearInterval(interval);
  }, [bannerIndex])
  

  return (
    
    <>
      {
        
        isMediumScreen ?
      //   <Box
      //     sx={{
      //         display: 'flex',
      //         backgroundImage: `url(${sliderList[bannerIndex]})`,
      //         height: isMobileScreen ? '30vh' : '45vh',
      //         width: 1,
      //         marginTop: isMobileScreen ? '90px' : '45px',
      //         backgroundSize: 'contain',
      //         backgroundPosition: 'center',
      //         backgroundRepeat: 'no-repeat',
      //         transition: '1s'
      //     }}
      //   >
      // </Box> 
      <BannerImage src={sliderList[bannerIndex]} />
      : 
        // <Box
        //   sx={{
        //       display: 'flex',
        //       backgroundImage: `url(${sliderList[bannerIndex]})`,
        //       height: '75vh',
        //       width: 1,
        //       flexWrap: 'wrap',
        //       marginTop: '10vh',
        //       backgroundSize: 'contain',
        //       backgroundPosition: 'center',
        //       backgroundRepeat: 'no-repeat',
        //       transition: '1s'
        //   }}
        // >
        // </Box>
        <BannerImage src={sliderList[bannerIndex]} />
      }
    </>
  )
}

export default HomeBanner