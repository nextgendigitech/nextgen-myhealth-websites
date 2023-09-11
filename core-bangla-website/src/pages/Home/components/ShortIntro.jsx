import styled from 'styled-components';
import { FaArrowRightLong } from 'react-icons/fa6';
import responsive from '../../../config/responsive';
import { P1, P2, P3, P4, H1, H2, H3, H4, H6 } from '../../../components/Typography'
import { HBox, VBox } from '../../../components/Containers';
import image from '../../../assets/images/short_intro_image.png';
import colors from '../../../config/colors';

const Container = styled(HBox)`
    /* margin-left: 120px;
    margin-right: 120px;
    margin-top: 120px; */
    padding-left: 8%;
    padding-right: 8%;
    padding-top: 8%;
    width: 100%;
`

const GreenBox = styled.div`
    /* height: 100px; */
    /* width: 100px; */
    background-color: ${colors.darkGreen};
    border-radius: 0px 10px 0px 10px;
    position: relative;
    /* @media only screen and (max-width: ${responsive.mobileThresh-1}px) {
        width: 35%;
        height: 35%;
    } */
`

const Image = styled.img`
    width: 80%;
    height: auto;
    position: relative;
    top: calc(-100px + 8px);
    left: 8px;
    /* z-index: 1; */
`

const RightArrowIcon = styled(FaArrowRightLong)`
    font-size: 24px;
    color: ${colors.darkGreen};
`

const ShortIntro = ({ isMobile }) => {
    return (
        <Container align='space-around'>
            <VBox style={{ width: '30%' }}>
                <GreenBox style={{ width: isMobile ? '35%' : '100px', height: isMobile ? '35%' : '100px' }}/>
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