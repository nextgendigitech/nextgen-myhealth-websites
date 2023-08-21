import React from 'react';
import Testimonial from './Testimonial';
import ClientImage from '../../images/pro-pic.png';
import ClientImageTwo from '../../images/ClientImageTwo.jpg';
import { useMediaQuery, useTheme } from '@mui/material';

const TestimonialList = () => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
    const testimonialList = [
        {
            image: ClientImageTwo,
            clientName: 'Habibur Rahman',
            testimonialText: 'I’m happy that we now have world class online treatment options available in Bangladesh. This gives a chance to many patients like me to lead normal lives without having to incur heavy expenses of going abroad for the same treatment',
            rating: 4
        },
        {
            image: ClientImageTwo,
            clientName: 'Imam Hashem',
            testimonialText: 'I am really happy that the doctors gave me an opportunity to learn more about my condition and the therapy which helped me undergo the procedure. I’m back to my routine and with no lingering back pain. I’m finally at peace',
            rating: 5
        },
        {
            image: ClientImage,
            clientName: 'Tasnima Wahid',
            testimonialText: 'NextGen MyHealth is the best online platform for the treatment. I treated by one of their doctors and the doctor is very good and took a lot of care while treating. I felt really comfortable. Definitely recommended.',
            rating: 5
        }
    ];
  return (
    <>
        {
            isMobile ?
                <Testimonial 
                    image={testimonialList[1].image} 
                    clientName={testimonialList[1].clientName} 
                    testimonialText={testimonialList[1].testimonialText} 
                    rating={testimonialList[1].rating}
                />
            :
            testimonialList.map((testimonial, index) => 
                <Testimonial 
                    key={index}
                    image={testimonial.image} 
                    clientName={testimonial.clientName} 
                    testimonialText={testimonial.testimonialText} 
                    rating={testimonial.rating}
                />
            )
        }
    </>
  )
}

export default TestimonialList