import { useState, useEffect } from 'react';
import { HiOutlinePhone } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { HBox, VBox } from '../components/Containers';
import { P2, P3, P4 } from '../components/Typography';
import logo from '../assets/images/Website-Logo.png'
import colors from '../config/colors';
import responsive from '../config/responsive';
import DoctorSearchDlg from './DoctorSearchDlg';
import { footerData, Links } from '../data';


const FooterContainer1 = styled(VBox)`
    background-color: ${colors.mercury};
    border-radius: 30px 30px 0px 0px;
`

const FooterContainer2 = styled(HBox)`
    padding-left: 8%;
    padding-right: 8%;
    background-color: ${colors.lightBlack};
    justify-content: center;
`

const PhoneIcon = styled(HiOutlinePhone)`
    @media only screen and (max-width: ${responsive.xs-1}px) { // xs
        width: 15px;
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {  // sm
        width: 15px;
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {  // md
        width: 15px;
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg-1}px) {  // lg
        width: 20px;
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        width: 25px;
    }
`

const EmailIcon = styled(AiOutlineMail)`
    @media only screen and (max-width: ${responsive.xs-1}px) { // xs
        width: 15px;
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {  // sm
        width: 15px;
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {  // md
        width: 15px;
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg-1}px) {  // lg
        width: 20px;
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        width: 25px;
    }
`

const LogoImage = styled.img`
    @media only screen and (max-width: ${responsive.xs-1}px) { // xs
        width: 120px;
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {  // sm
        width: 120px;
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {  // md
        width: 120px;
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg-1}px) {  // lg
        width: 180px;
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        width: 200px;
    }
`

const SNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${colors.darkGrey};

    &.active {
        font-weight: bold;
    }
`

const Footer = ({ language }) => {
    const [openDoctorSearchDlg, setOpenDoctorSearchDlg] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        const setResponsiveness = () => {
            let orientation = !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape';
    
            if (orientation === 'portrait' || window.innerWidth < responsive.mobileThresh) {
                setIsMobile(true);
            }
            else {
                setIsMobile(false);
            }
        }
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness());

        return () => window.removeEventListener('resize', () => setResponsiveness());
    }, []);

    const ContactHtml = () => (
        <VBox
            align={isMobile ? 'flex-start' : 'center'}
            className={isMobile ? 'mb-4' : ''}
            style={{ width: isMobile ? '100%' : '25%' }}
        >
            <VBox>
                <P2 className='bold'>{footerData.head1[language]}</P2>
                <P3>{footerData.para11[language]}</P3>
                <Link to={Links.footer.link1} style={{ textDecoration: 'none' }} target='_blank'>
                    <P3 color='first'>{footerData.para21[language]}</P3>
                </Link>
                <P3>{footerData.para31[language]}</P3>
                <HBox align='center' className='mt-2'>
                    <PhoneIcon />
                    <P3 className='ml-1'>{Links.phoneandemail.phone[language]}</P3>
                </HBox>
                <HBox align='center' className='mt-1'>
                    <EmailIcon />
                    <P3 className='ml-1'>{Links.phoneandemail.email[language]}</P3>
                </HBox>
            </VBox>
         </VBox>
    )

    const CompanyHtml = () => (
        <VBox align={isMobile ? 'flex-start' : 'center'} style={{ width: isMobile ? '25%' : '25%' }}>
            <VBox>
                <P2 className='bold'>{footerData.head2[language]}</P2>
                <SNavLink to='/contact-us'>
                    <P3 className='mt-2'>{footerData.para12[language]}</P3>
                </SNavLink>
                <SNavLink to='/about-us'>
                    <P3 className='mt-2'>{footerData.para22[language]}</P3>
                </SNavLink>
                <SNavLink to='/specialties'>
                    <P3 className='mt-2'>{footerData.para32[language]}</P3>
                </SNavLink>
                {/* <SNavLink to='/blog'>
                    <P3 className={margin2}>{footerData.para42[language]}</P3>
                </SNavLink> */}
            </VBox>
        </VBox>
    )

    const ServiceHtml = () => (
        <VBox align={isMobile ? 'flex-start' : 'center'} style={{ width: isMobile ? '25%' : '25%' }}>
            <VBox>
                <P2 className='bold'>{footerData.head3[language]}</P2>
                <P3 className='mt-2 clickable' onClick={() => setOpenDoctorSearchDlg(true)}>{footerData.para13[language]}</P3>
                {/* <P4 className='mt-2'>প্রতিনিয়ত জিজ্ঞাসিত প্রশ্ন</P4> */}
            </VBox>
        </VBox>
    )

    const PaymentHtml = () => (
        <VBox align={isMobile ? 'flex-start' : 'center'} style={{ width: isMobile ? '25%' : '25%' }}>
            <VBox>
                <P2 className='bold'>{footerData.head4[language]}</P2>
                <SNavLink to='/payment'>
                    <P3 className='mt-2'>{footerData.para14[language]}</P3>
                </SNavLink>
            </VBox>
        </VBox>
    )

    return (
        <VBox style={{ backgroundColor: colors.lightGrey }}>
            <FooterContainer1
                justify='space-between' 
                className={isMobile ? 'pb-4' : 'pb-7'} 
                style={{ paddingLeft: isMobile ? "40px" : "100px", paddingRight: isMobile ? "40px" : "100px" }}>
                <LogoImage className='mt-4' src={logo} />
                <HBox justify='space-between'>
                    {ContactHtml()}
                    {CompanyHtml()}
                    {ServiceHtml()}
                    {PaymentHtml()}
                </HBox>
            </FooterContainer1>

            <FooterContainer2>
                <VBox align='center'>
                    <HBox className='mt-2 mb-1'>
                        <SNavLink to='/terms-conditions'>
                            <P3 style={{ color: colors.grey }}>{footerData.footer1[language]}</P3>
                        </SNavLink>
                        <P3 className='mx-0_5' style={{ color: colors.grey }}>|</P3>
                        <SNavLink to='/privacy-policy'>
                            <P3 style={{ color: colors.grey }}>{footerData.footer2[language]}</P3>
                        </SNavLink>
                        <P3 className='mx-0_5' style={{ color: colors.grey }}>|</P3>
                        <SNavLink to='/refund-policy'>
                            <P3 style={{ color: colors.grey }}>{footerData.footer3[language]}</P3>
                        </SNavLink>
                    </HBox>
                    <Link className='mb-2' to={Links.footer.link1} style={{ textDecoration: 'none' }} target='_blank'>
                        <P3 style={{ color: colors.grey }}>
                            {footerData.footer4[language]}{new Date().getFullYear()}&nbsp;{footerData.para21[language]}
                        </P3>
                    </Link>
                </VBox>

            </FooterContainer2>

            <DoctorSearchDlg
                open={openDoctorSearchDlg}
                setOpen={setOpenDoctorSearchDlg}
                isMobile={isMobile}
            />
        </VBox>
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(Footer);