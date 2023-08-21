import React from 'react'
import Banner from './HomeBanner'
import Specialities from '../Specialities'
import Features from '../Features'
import Steps from '../Steps'
import Testimonial from '../ClientTestimonial'
import DoctorJoinSection from '../DoctorJoinSection'
import Portals from '../Portals'

const Home = () => {
  return (
    <>
        <Banner />
        <Features />
        <Specialities />
        <Portals />
        <Steps />
        <Testimonial />
        <DoctorJoinSection />
    </>
  )
}

export default Home