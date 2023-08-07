import styled from 'styled-components';

import { HBox, VBox } from '../../../components/Containers';
import { P1, P2, P3 } from '../../../components/Typography';
import colors from '../../../config/colors';

const Container = styled(VBox)`
  position: relative;
  margin-top: 120px;
  padding-left: 120px;
  padding-right: 120px;
`

const Text1 = styled(VBox)`
  width: 40vw;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: 8%;
  border-right: 4px solid ${colors.darkGreen};
  border-bottom: 4px solid ${colors.darkGreen};
`

const CircleContainer1 = styled(HBox)`
  width: 40vw;
  padding-left: 15%;
  padding-top: 8%;
`

const Circle1 = styled(VBox)`
  height: 8vw;
  width: 8vw;
  border: 3px solid ${colors.darkGreen};
  border-radius: 50%;
`

const Text2 = styled(VBox)`
  width: 40vw;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 8%;
  border-bottom: 4px solid ${colors.darkGreen};
`

const CircleContainer2 = styled(HBox)`
  width: 40vw;
  border-right: 4px solid ${colors.darkGreen};
  padding-left: 25%;
  padding-top: 8%;
`

const Circle2 = styled(VBox)`
  height: 8vw;
  width: 8vw;
  border: 3px solid ${colors.darkGreen};
  border-radius: 50%;
`

const StepCounter1 = styled(VBox)`
  position: absolute;
  background-color: ${colors.white};
  width: fit-content;
  align-items: center;
  top: 19%;
  left: 47.5%;
`

const StepCounter2 = styled(VBox)`
  position: absolute;
  background-color: ${colors.white};
  width: fit-content;
  align-items: center;
  top: 35%;
  left: 47.5%;
`

const StepCounter3 = styled(VBox)`
  position: absolute;
  background-color: ${colors.white};
  width: fit-content;
  align-items: center;
  top: 58%;
  left: 47.5%;
`

const StepCounter4 = styled(VBox)`
  position: absolute;
  background-color: ${colors.white};
  width: fit-content;
  align-items: center;
  top: 78%;
  left: 47.5%;
`

const BookingSteps = () => {
  return (
    <Container>
      <VBox align='center'>
        <P1 className='bold' color='third'>ঘণ্টার পর ঘণ্টা লাইনে দাঁড়িয়ে থাকার দিন শেষ!</P1>
        <P1 className='bold'>পরামর্শ নিন কিছু সহজ পদক্ষেপেই।</P1>
      </VBox>
      
      <StepCounter1>
        <P2 className='bold' color='third'>স্টেপ</P2>
        <P2 className='bold' color='third'>০১</P2>
      </StepCounter1>

      <StepCounter2>
        <P2 className='bold' color='third'>স্টেপ</P2>
        <P2 className='bold' color='third'>০২</P2>
      </StepCounter2>

      <StepCounter3>
        <P2 className='bold' color='third'>স্টেপ</P2>
        <P2 className='bold' color='third'>০৩</P2>
      </StepCounter3>

      <StepCounter4>
        <P2 className='bold' color='third'>স্টেপ</P2>
        <P2 className='bold' color='third'>০৪</P2>
      </StepCounter4>

      <HBox>
        <Text1>
          <VBox style={{ width: '80%' }}>
            <P3 className='bold' color='third' style={{ textAlign: 'right' }}>ডাক্তার অনুসন্ধান করুন</P3>
            <P3 className='bold' style={{ textAlign: 'right' }}>স্পেশালাইজেশন, প্রোফাইল, এবং অভিজ্ঞতা দ্বারা
              বা আপনার প্রয়োজন এবং উপসর্গ অনুসারে
              একজন ডাক্তার খুঁজুন |</P3>
          </VBox>
        </Text1>
        
        <CircleContainer1>
          <Circle1></Circle1>
        </CircleContainer1>
      </HBox>

      <HBox>
        <CircleContainer2>
          <Circle2></Circle2>
        </CircleContainer2>

        <Text2>
          <VBox style={{ width: '80%' }}>
            <P3 className='bold' color='third'>লগ ইন করুন</P3>
            <P3 className='bold'>ফোন নম্বর/ইমেল ঠিকানা এবং পাসওয়ার্ড দিয়ে
              পেশেন্ট পোর্টালে লগ ইন করুন। আপনি যদি নতুন
              হন তাহলে আপনার নাম, ফোন নম্বর/ইমেল ঠিকানা
              এবং পাসওয়ার্ড ব্যবহার করে একটি খুব সহজ
              প্রক্রিয়ায় নিজেকে নিবন্ধন করুন।|</P3>
          </VBox>
        </Text2>
      </HBox>

      <HBox>
        <Text1 style={{ paddingTop: 60, marginTop: 0 }}>
          <VBox style={{ width: '80%' }}>
            <P3 className='bold' color='third' style={{ textAlign: 'right' }}>অ্যাপয়েন্টমেন্ট নির্বাচন করুন</P3>
            <P3 className='bold' style={{ textAlign: 'right' }}>বুক অ্যাপয়েন্টমেন্ট বাটনে ক্লিক করুন এবং
              আপনার সুবিধাজনক সময় অনুযায়ী ডাক্তারের
              ডাক্তারের অ্যাপয়েন্টমেন্ট বুক করুন।|</P3>
          </VBox>
        </Text1>
        
        <CircleContainer1>
          <Circle1></Circle1>
        </CircleContainer1>
      </HBox>

      <HBox>
        <CircleContainer2>
          <Circle2></Circle2>
        </CircleContainer2>

        <Text2>
          <VBox style={{ width: '80%' }}>
            <P3 className='bold' color='third'>অ্যাপয়েন্টমেন্ট বুক করুন</P3>
            <P3 className='bold'>অনলাইন পেমেন্টের মাধ্যমে আপনার
              অ্যাপয়েন্টমেন্ট নিশ্চিত করুন।|</P3>
          </VBox>
        </Text2>
      </HBox>

      <HBox>
        <Text1 style={{ marginTop: 0, borderBottomColor: colors.transparent }}></Text1>
        <CircleContainer1></CircleContainer1>
      </HBox>
    </Container>
  );
}

export default BookingSteps;