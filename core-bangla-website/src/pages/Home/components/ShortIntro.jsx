import styled from 'styled-components';
import { FaArrowRightLong } from 'react-icons/fa6';

import { P1 } from '../../../components/Typography'
import { HBox } from '../../../components/Containers';
import image from '../../../assets/images/short_intro_image.png';
import colors from '../../../config/colors';

const Container = styled(HBox)`
    margin-left: 120px;
    margin-right: 120px;
    justify-content: space-between;
`
const ImageContainer = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${colors.darkGreen};
  border-radius: 0px 10px 0px 10px;
`
const Image = styled.img`
  height: 435px;
`
const ShortIntroText = styled.div`
  width: 750px;
`
const Text1 = styled(P1)`
  font-size: 30px;
  color: ${colors.darkGreen};
  margin-top: 20px;
`
const Text2 = styled(P1)`
  font-size: 40px;
`
const Text3 = styled(P1)`
  font-size: 23px;
`
const Text4 = styled(P1)`
  font-size: 30px;
  color: ${colors.darkGreen};
`
const RightArrowIcon = styled(FaArrowRightLong)`
  font-size: 24px;
  color: ${colors.darkGreen};
`

const ShortIntro = () => {
  return (
    <Container>
      <ImageContainer><Image className='pt-2 pl-2' src={image}/></ImageContainer>
      <ShortIntroText>
        <Text1 className='bold'>আমরা কারা?</Text1>
        <Text2 className='bold'>আমাদের সংক্ষিপ্ত পরিচিতি</Text2>
        <Text3>নেক্সটজেন মাইহেলথ ভিসিপি, নেক্সটজেন ডিজিটেক লিমিটেড বাংলাদেশের একটি স্বাস্থ্য সেবা প্রদানকারী প্ল্যাটফর্ম | 
          নেক্সটজেন মাইহেলথ ভিসিপি আমেরিকা, ইউরোপ, যুক্তরাজ্য এবং বাংলাদেশের সহস্রাধিক বিএমডিসি নিবন্ধিত বিশেষজ্ঞ চিকিৎসকদের সঙ্গে ঘরে বসে ভিডিও কলের মাধ্যমে পরামর্শ ও স্বাস্থ্যসেবা নেয়া সম্ভব করেছে | 
          প্রযুক্তির নিত্যনতুন উদ্ভাবন ব্যবহার করে স্বাস্থ্যসেবাকে দেশের প্রত্যন্ত অঞ্চল থেকে শহর পর্যন্ত সকলের কাছে পৌঁছে দেয়ার লক্ষ্যে বাংলাদেশে শুরু হয় নেক্সটজেন মাইহেলথ ভিসিপি এর কার্যক্রম |</Text3>
        
        <HBox align='center' className='mt-2'>
          <Text4 className='bold'>ইস্তাহার দেখুন</Text4>
          <RightArrowIcon className='ml-1' />
        </HBox>
      </ShortIntroText>
    </Container>
  );
}

export default ShortIntro;