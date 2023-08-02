import styled from 'styled-components';
import colors from '../../../config/colors';
import bannerimage from '../../../assets/images/banner_image.png';

import { Button } from '../../../components/Buttons';
import { HBox, VBox } from '../../../components/Containers';
import { H1, H4, P2 } from '../../../components/Typography';


const Container = styled(HBox)`
    margin-left: 120px;
    margin-right: 120px;
`
const SH1 = styled(H1)`
    font-weight: 800;
    font-size: 3.5rem;
`;

const BannerImage = styled.img`
    height: 100%;
    width: auto;
`

const SButton = styled(Button)`
   height: 60px;
   border-radius: 30px;
`

const Banner = () => {
  return (
    <>
    <Container justify='space-between'>
      <VBox className='mt-5'>
        <H1 className='bold mb-2'>স্বাগতম আপনাকে</H1>
        <H4 className='bold' color='third'>নেক্সটজেন</H4>
        <VBox className='bold mb-4'> 
          <HBox>
            <SH1 color='second' style={{ lineHeight: 1.2 }}>মাই</SH1>
            <SH1 color='first' style={{ lineHeight: 1.2 }}>হেলথ</SH1>
          </HBox>
          <H1 color='third' style={{ lineHeight: 0.5 }}>ভার্চুয়াল কেয়ার প্লাটফর্মে</H1>
        </VBox>
        <P2>জরুরী সমস্যায় আক্রান্ত রোগীদের জন্য আমরা সর্বদা প্রস্তুত|</P2>
        <P2>আপনি যেকোন সময় আমাদের সাথে সহজেই যোগাযোগ করতে পারেন|</P2>
        <P2>আমরা সর্বোচ্চ মানের সেবা দেওয়ার চেষ্টা করি|</P2>
        <HBox className='bold px-0 mt-4'>
          <SButton color='third' elevated>অ্যাপয়েন্টমেন্ট নিন</SButton> 
        </HBox>
      </VBox>
      <BannerImage src={bannerimage} />
    </Container>
    </>
  );
}

export default Banner;