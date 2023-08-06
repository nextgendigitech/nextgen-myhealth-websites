import styled from 'styled-components';

import { HBox, VBox } from '../../../components/Containers';
import { P1, P3 } from '../../../components/Typography';
import colors from '../../../config/colors';

const Container = styled(VBox)`
  margin-top: 120px;
  padding-left: 120px;
  padding-right: 120px;
`

const Step1Text = styled(VBox)`
  width: 40vw;
  padding-right: 100px;
  margin-top: 80px;
  border-right: 4px solid ${colors.darkGreen};
  border-bottom: 4px solid ${colors.darkGreen};
`

const Step2Text = styled(VBox)`
  width: 40vw;
  padding-right: 100px;
  /* border-left: 4px solid ${colors.darkGreen}; */
  border-bottom: 4px solid ${colors.darkGreen};
`

const Step1Circle = styled(VBox)`
  height: 8vw;
  width: 8vw;
  border: 3px solid ${colors.darkGreen};
  border-radius: 50%;
`

const Step2Circle = styled(VBox)`
  height: 8vw;
  width: 8vw;
  border: 3px solid ${colors.darkGreen};
  border-radius: 50%;
`

const BookingSteps = () => {
  return (
    <Container>
      <VBox align='center'>
        <P1 className='bold' color='third'>ঘণ্টার পর ঘণ্টা লাইনে দাঁড়িয়ে থাকার দিন শেষ!</P1>
        <P1 className='bold'>পরামর্শ নিন কিছু সহজ পদক্ষেপেই।</P1>
      </VBox>

      <HBox>
        <Step1Text>
          <P3 className='bold' color='third' style={{ textAlign: 'right' }}>ডাক্তার অনুসন্ধান করুন</P3>
          <P3 className='bold' style={{ textAlign: 'right' }}>স্পেশালাইজেশন, প্রোফাইল, এবং অভিজ্ঞতা দ্বারা</P3>
          <P3 className='bold' style={{ textAlign: 'right' }}>বা আপনার প্রয়োজন এবং উপসর্গ অনুসারে</P3>
          <P3 className='bold' style={{ textAlign: 'right' }}>একজন ডাক্তার খুঁজুন |</P3>
        </Step1Text>
        <HBox style={{ paddingLeft: 130, paddingTop: 60 }}>
          <Step1Circle></Step1Circle>
        </HBox>
      </HBox>


      <HBox>
        <HBox style={{ width: '40vw', borderRight: `4px solid ${colors.darkGreen}` }}>
          <Step2Circle></Step2Circle>
        </HBox>

        <Step2Text style={{ paddingTop: 200 }}>
          <P3 className='bold' color='third' style={{ textAlign: 'left' }}>ডাক্তার অনুসন্ধান করুন</P3>
          <P3 className='bold' style={{ textAlign: 'left' }}>স্পেশালাইজেশন, প্রোফাইল, এবং অভিজ্ঞতা দ্বারা</P3>
          <P3 className='bold' style={{ textAlign: 'left' }}>বা আপনার প্রয়োজন এবং উপসর্গ অনুসারে</P3>
          <P3 className='bold' style={{ textAlign: 'left' }}>একজন ডাক্তার খুঁজুন |</P3>
        </Step2Text>

      </HBox>
    </Container>
  );
}

export default BookingSteps;