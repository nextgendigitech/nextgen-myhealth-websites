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
  // const isMediumScreen = useMediaQuery(useTheme().breakpoints.down('md'));
  // const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

  // const sliderList = [SliderOne, SliderTwo, SliderThree]
  const sliderList = [SliderOne]

  const [bannerIndex, setBannerIndex] = useState(0)
  
  let items = sliderList.length;
  
  function nextSlide() {
    setBannerIndex(index => {
      if (index < items-1) return index + 1;
      else return 0;
    });
  }

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      nextSlide()
    }, 4000);
    return () => clearInterval(interval);
  }, [bannerIndex])

  function handleClickBanner() {
    if (bannerIndex === 0) window.open('https://patient.nextgenmyhealth.com/doctor/136');
    else window.open('https://patient.nextgenmyhealth.com');
  }
  
  return (
    <BannerImage
      className='clickable'
      src={sliderList[bannerIndex]}
      onClick={handleClickBanner}
    />
  )
}

export default HomeBanner