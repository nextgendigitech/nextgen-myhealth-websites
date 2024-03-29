import styled from 'styled-components';
import { connect } from 'react-redux';

import { VBox, HBox } from '../../../components/Containers';
import { H1, P2 } from '../../../components/Typography';
import bkash_image from '../../../assets/images/bkash_image.png';
import colors from '../../../config/colors';
import responsive from '../../../config/responsive';
import { payment, links } from '../../../data';

const Container = styled(VBox)`
`

const BankPayment = styled(VBox)`
    height: 80vh;
    background-color: ${colors.lightBlue};
    border-radius: 0 15px 0 15px;
    min-height: 500px;
`

const Circle = styled(VBox)`
    height: 25%;
    width: 27%;
    border-radius: 50%;
    background-color: white;

    @media only screen and (max-width: ${responsive.xs-1}px) {
        height: 20%;
        width: 40%;
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {
        height: 20%;
        width: 25%;
    }
`

const BkashPayment = styled(VBox)`
    height: 80vh;
    background-color: ${colors.lightBlue};
    border-radius: 0 15px 0 15px;
    min-height: 500px;
`

const PaymentHelp = styled(HBox)`
    padding: 15px;
    border-radius: 0 10px 0 10px;
    background-color: ${colors.lightBlue};
`

const PaymentMethods = ({ isMobile, language }) => {
    const Bank = () => (
        <BankPayment align='center' style={{ width: isMobile ? '100%' : '50%', marginTop: isMobile ? '0px' : '30px' }}>
            <Circle className='mt-8' justify='center' align='center'><H1 className='bold'>B</H1></Circle>
            <P2 className='mt-5 bold'>{payment.method.para11[language]}</P2>
            <P2 className='mt-3 bold'>{payment.method.para20[language]}</P2>
            <P2 className='mt-3 bold'>{payment.method.para12[language]}</P2>
            <P2 className='mt-3 bold'>{payment.method.para13[language]}</P2>
            <P2 className='mt-3 bold'>{payment.method.para14[language]}</P2>
            <P2 className='bold'>{payment.method.para15[language]}</P2>
            <P2 className='bold'>{payment.method.para16[language]}</P2>
        </BankPayment>
    )

    const Bkash = () => (
        <BkashPayment style={{ width: isMobile ? '100%' : '45%', marginTop: isMobile ? '30px' : '30px' }} align='center'>
            <img className='mt-8' src={bkash_image} style={{width: '55%'}} />
            <P2 className='mt-3 bold'>{payment.method.para17[language]}</P2>
            <P2 className='mt-3 bold'>{links.phoneandemail.phone[language]}</P2>
            <P2 className='mt-3 bold'>{payment.method.para18[language]}</P2>
        </BkashPayment>
    )

    return (
        <>
        <Container style={{ paddingLeft: isMobile ? "40px" : "100px", paddingRight: isMobile ? "40px" : "100px" }}>
            <VBox className='py-3 px-3' align='center' style={{border: `5px solid ${colors.darkGreen}`, borderRadius: '0 15px 0 15px'}}>
                <P2 
                    className='bold' 
                    align='center' 
                    style={{ paddingLeft: isMobile ? "" : "140px", paddingRight: isMobile ? "" : "140px" }}>
                    {payment.method.head1[language]} 
                </P2>
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

        <PaymentHelp justify='center' style={{ marginTop: isMobile ? '60px' : '100px', marginBottom: isMobile ? '60px' : '100px' }}>
            <P2 className='bold' color='second'>{payment.method.para19[language]}</P2>
        </PaymentHelp>
        </>
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(PaymentMethods);