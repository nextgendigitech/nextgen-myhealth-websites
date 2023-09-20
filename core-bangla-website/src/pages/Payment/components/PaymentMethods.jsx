import styled from 'styled-components';

import { VBox, HBox } from '../../../components/Containers';
import { H1, P2 } from '../../../components/Typography';
import bkash_image from '../../../assets/images/bkash_image.png';
import colors from '../../../config/colors';
import responsive from '../../../config/responsive';

const Container = styled(VBox)`
    margin-top: 120px;
    padding-left: 8%;
    padding-right: 8%;

    @media only screen and (max-width: ${responsive.mobileThresh-1}px) {
        margin-top: 20px;
    }
`

const BankPayment = styled(VBox)`
    height: 80vh;
    width: 50%;
    background-color: ${colors.lightBlue};
    border-radius: 0 15px 0 15px;
    min-height: 500px;

    @media only screen and (max-width: ${responsive.mobileThresh-1}px) {
        width: 100%;
    }
`

const Circle = styled(VBox)`
    height: 25%;
    width: 27%;
    border-radius: 50%;
    background-color: white;

    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {
        height: 20%;
        width: 25%;
    }

    @media only screen and (max-width: ${responsive.xs-1}px) {
        height: 20%;
        width: 40%;
    }
`

const BkashPayment = styled(VBox)`
    height: 80vh;
    width: 45%;
    background-color: ${colors.lightBlue};
    border-radius: 0 15px 0 15px;
    min-height: 500px;

    @media only screen and (max-width: ${responsive.mobileThresh-1}px) {
        width: 100%;
    }
`

const PaymentHelp = styled(HBox)`
    margin-top: 120px;
    padding: 15px;
    border-radius: 0 10px 0 10px;
    background-color: ${colors.lightBlue};
`

const PaymentMethods = ({ isMobile }) => {
    const Bank = () => (
        <BankPayment align='center'>
            <Circle className='mt-8' justify='center' align='center'><H1 className='bold'>B</H1></Circle>
            <P2 className='mt-5 bold'>নগদ/চেক/ব্যাঙ্ক আমানত</P2>
            <P2 className='mt-3 bold'>নেক্সটজেন ডিজিটেক লিমিটেড</P2>
            <P2 className='mt-3 bold'>অ্যাকাউন্ট নম্বর: 2104174034072</P2>
            <P2 className='mt-3 bold'>সুইফট কোড: PRBLBDDH001</P2>
            <P2 className='mt-3 bold'>প্রাইম ব্যাংক লিমিটেড</P2>
            <P2 className='bold'>আদমজী কোর্ট অ্যানেক্স বিল্ডিং ২, ১১৯-১২০</P2>
            <P2 className='bold'>মতিঝিল সি/এ, ঢাকা ১০০০, বাংলাদেশ</P2>
        </BankPayment>
    )

    const Bkash = () => (
        <BkashPayment className={isMobile ? 'mt-5' : ''} align='center'>
            <img className='mt-8' src={bkash_image} style={{width: '55%'}} />
            <P2 className='mt-3 bold'>বিকাশ নম্বর:</P2>
            <P2 className='mt-3 bold'>+৮৮০ ১৩২১১১৯৩৯১৮৩</P2>
            <P2 className='mt-3 bold'>প্রকার: মার্চেন্ট অ্যাকাউন্ট</P2>
        </BkashPayment>
    )

    return (
        <>
        <Container>
            <VBox className='py-3 px-3' align='center' style={{border: `5px solid ${colors.darkGreen}`, borderRadius: '0 15px 0 15px'}}>
                {isMobile ?
                <P2 className='bold' align='center'>
                    পেমেন্ট সম্পূর্ণ করতে আপনার পছন্দের নিম্নোক্ত যেকোনো পদ্ধতি অনুসরণ করুন | যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন |
                </P2>
                :
                <>
                    <P2 className='bold'>পেমেন্ট সম্পূর্ণ করতে আপনার পছন্দের নিম্নোক্ত যেকোনো পদ্ধতি অনুসরণ করুন |</P2>
                    <P2 className='bold'>যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন |</P2>
                </>
                }
            </VBox>
            
            {isMobile ?
            <VBox className='mt-8' align='center' style={{width: '100%'}}>
                {Bank()}
                {Bkash()}
            </VBox>
            :
            <HBox className='mt-8' justify='space-between' style={{width: '100%'}}>
                {Bank()}
                {Bkash()}
            </HBox>
            }
        </Container>

        <PaymentHelp justify='center'><P2 className='bold' color='second'>আপনি যদি পেমেন্ট সংক্রান্ত কোনো সমস্যার সম্মুখীন হন, তাহলে অনুগ্রহ করে +৮৮০ ১৩২১১১৯৩৯১ এ কল করুন</P2></PaymentHelp>
        </>
    );
}

export default PaymentMethods;