import styled from 'styled-components';

import { HBox, VBox } from '../../../components/Containers';
import { P1, P2, P3 } from '../../../components/Typography';
import colors from '../../../config/colors';

const Container = styled(VBox)`
  margin-top: 120px;
  padding-left: 120px;
  padding-right: 120px;
`

const LeftStepBox = styled(VBox)`
  width: 50%;
  border-right: 4px solid ${colors.darkGreen};
  border-bottom: 4px solid ${colors.darkGreen};
`

const RightStepBox = styled(VBox)`
  width: 50%;
  position: relative;
  left: -4px;
  border-left: 4px solid ${colors.darkGreen};
  border-bottom: 4px solid ${colors.darkGreen};
`

const Circle = styled(VBox)`
  height: 8vw;
  width: 8vw;
  border: 3px solid ${colors.darkGreen};
  border-radius: 50%;
`

const BookingSteps = () => {
  return (
    <Container>
      <VBox align='center' className='mb-4'>
        <P1 className='bold' color='third'>ঘণ্টার পর ঘণ্টা লাইনে দাঁড়িয়ে থাকার দিন শেষ!</P1>
        <P1 className='bold'>পরামর্শ নিন কিছু সহজ পদক্ষেপেই</P1>
      </VBox>

      <HBox>
        <LeftStepBox align='center' justify='flex-end'>
          <Circle align='center' justify='center' className='mb-4'>
            <P2 className='bold' color='third'>স্টেপ</P2>
            <P2 className='bold' color='third'>০১</P2>
          </Circle>
          <VBox style={{ width: '80%' }} className='mb-1'>
            <P3 className='bold' color='third' align='left'>ডাক্তার অনুসন্ধান করুন</P3>
            <P3 className='bold' align='left'>
              স্পেশালাইজেশন, প্রোফাইল, এবং অভিজ্ঞতা দ্বারা
              বা আপনার প্রয়োজন এবং উপসর্গ অনুসারে
              একজন ডাক্তার খুঁজুন।</P3>
          </VBox>
        </LeftStepBox>
      </HBox>

      <HBox justify='flex-end'>
        <RightStepBox align='center' justify='flex-end'>
          <Circle align='center' justify='center' className='mb-4'>
            <P2 className='bold' color='third'>স্টেপ</P2>
            <P2 className='bold' color='third'>০২</P2>
          </Circle>
          <VBox style={{ width: '80%' }} className='mb-1'>
            <P3 className='bold' color='third'>লগ ইন করুন</P3>
            <P3 className='bold'>
              ফোন নম্বর/ইমেল ঠিকানা এবং পাসওয়ার্ড দিয়ে
              পেশেন্ট পোর্টালে লগ ইন করুন। আপনি যদি নতুন
              হন তাহলে আপনার নাম, ফোন নম্বর/ইমেল ঠিকানা
              এবং পাসওয়ার্ড ব্যবহার করে একটি খুব সহজ
              প্রক্রিয়ায় নিজেকে নিবন্ধন করুন।</P3>
          </VBox>
        </RightStepBox>
      </HBox>

      <HBox>
        <LeftStepBox align='center' justify='flex-end'>
          <Circle align='center' justify='center' className='mb-4'>
            <P2 className='bold' color='third'>স্টেপ</P2>
            <P2 className='bold' color='third'>০৩</P2>
          </Circle>
          <VBox style={{ width: '80%' }} className='mb-1'>
            <P3 className='bold' color='third' align='left'>অ্যাপয়েন্টমেন্ট নির্বাচন করুন</P3>
            <P3 className='bold' align='left'>
              বুক অ্যাপয়েন্টমেন্ট বাটনে ক্লিক করুন এবং
              আপনার সুবিধাজনক সময় অনুযায়ী ডাক্তারের
              ডাক্তারের অ্যাপয়েন্টমেন্ট বুক করুন।</P3>
          </VBox>
        </LeftStepBox>
      </HBox>

      <HBox justify='flex-end'>
        <RightStepBox align='center' justify='flex-end'>
          <Circle align='center' justify='center' className='mb-4'>
            <P2 className='bold' color='third'>স্টেপ</P2>
            <P2 className='bold' color='third'>০৪</P2>
          </Circle>
          <VBox style={{ width: '80%' }} className='mb-1'>
            <P3 className='bold' color='third'>অ্যাপয়েন্টমেন্ট বুক করুন</P3>
            <P3 className='bold'>
              অনলাইন পেমেন্টের মাধ্যমে আপনার
              অ্যাপয়েন্টমেন্ট নিশ্চিত করুন।</P3>
          </VBox>
        </RightStepBox>
      </HBox>
    </Container>
  );
}

export default BookingSteps;