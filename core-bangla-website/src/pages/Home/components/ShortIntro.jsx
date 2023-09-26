import styled from 'styled-components';
import { FaArrowRightLong } from 'react-icons/fa6';

import { P1, P2, P3, P4, H1, H2, H3, H4, H6 } from '../../../components/Typography'
import { HBox, VBox } from '../../../components/Containers';
import image from '../../../assets/images/short_intro_image.png';
import colors from '../../../config/colors';
import responsive from '../../../config/responsive';

const Container = styled(HBox)`
    padding-left: 8%;
    padding-right: 8%;
    width: 100%;
`

const GreenBox = styled.div`
    /* height: 100px; */
    /* width: 100px; */
    background-color: ${colors.darkGreen};
    border-radius: 0px 10px 0px 10px;
    position: relative;

    @media only screen and (max-width: ${responsive.xs-1}px) { // xs
        height: 60px;
        width: 60px;
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {  // sm
        height: 70px;
        width: 70px;
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {  // md
        height: 80px;
        width: 80px;
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg-1}px) {  // lg
        height: 100px;
        width: 100px;
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        height: 100px;
        width: 100px;
    }
`

const Image = styled.img`
    width: 80%;
    height: auto;
    position: relative;
    left: 8px;

    @media only screen and (max-width: ${responsive.xs-1}px) { // xs
        top: calc(-60px + 8px);
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {  // sm
        top: calc(-70px + 8px);
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {  // md
        top: calc(-80px + 8px);
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg-1}px) {  // lg
        top: calc(-100px + 8px);
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        top: calc(-100px + 8px);
    }
`

// const RightArrowIcon = styled(FaArrowRightLong)`
//     font-size: 24px;
//     color: ${colors.darkGreen};
// `

const ShortIntro = ({ isMobile }) => {
    return (
        <Container align='space-around' style={{marginTop: isMobile ? '60px' : '100px'}}>
            <VBox style={{ width: '30%' }}>
                <GreenBox />
                <Image className='' src={image}/>
            </VBox>
            <VBox style={{ width: '70%' }}>
                <H3 className='bold' color='third'>আমরা কারা?</H3>
                <H3 className='bold'>আমাদের সংক্ষিপ্ত পরিচিতি</H3>
                <P2 className='mt-2'>
                    নেক্সটজেন মাইহেলথ ভিসিপি, নেক্সটজেন ডিজিটেক লিমিটেড বাংলাদেশের একটি স্বাস্থ্য সেবা প্রদানকারী প্ল্যাটফর্ম। 
                    নেক্সটজেন মাইহেলথ ভিসিপি আমেরিকা, ইউরোপ, যুক্তরাজ্য এবং বাংলাদেশের সহস্রাধিক বিএমডিসি নিবন্ধিত বিশেষজ্ঞ চিকিৎসকদের সঙ্গে ঘরে বসে ভিডিও কলের মাধ্যমে পরামর্শ ও স্বাস্থ্যসেবা নেয়া সম্ভব করেছে। 
                    প্রযুক্তির নিত্যনতুন উদ্ভাবন ব্যবহার করে স্বাস্থ্যসেবাকে দেশের প্রত্যন্ত অঞ্চল থেকে শহর পর্যন্ত সকলের কাছে পৌঁছে দেয়ার লক্ষ্যে বাংলাদেশে শুরু হয় নেক্সটজেন মাইহেলথ ভিসিপি এর কার্যক্রম।
                </P2>
            </VBox>
        </Container>
    );
}

export default ShortIntro;