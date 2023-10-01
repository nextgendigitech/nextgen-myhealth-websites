import { useState, useEffect } from 'react';
import { HiOutlinePhone } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { HBox, VBox } from '../components/Containers';
import { P2, P3, P4 } from '../components/Typography';
import logo from '../assets/images/Website-Logo.png'
import colors from '../config/colors';
import responsive from '../config/responsive';
import DoctorSearchDlg from './DoctorSearchDlg';
import { footerData } from '../data';


const FooterContainer1 = styled(VBox)`
    padding-left: 8%;
    padding-right: 8%;
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

const Footer = () => {
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
        <VBox>    
            <P2 className='bold'>{footerData.head1['bang']}</P2>
            <P3>{footerData.para11['bang']}</P3>
            <Link to={"https://nextgendgtech.com/"} style={{ textDecoration: 'none' }} target='_blank'>
                <P3 color='first'>{footerData.para21['bang']}</P3>
            </Link>
            <P3>{footerData.para31['bang']}</P3>
            <P3>{footerData.para41['bang']}</P3>
            <P3>{footerData.para51['bang']}</P3>
            <HBox align='center'><PhoneIcon className='mt-2' /><P3 className='ml-1 mt-2'>{footerData.para61['bang']}</P3></HBox>
            <HBox align='center'><EmailIcon className='mt-2' /><P3 className='ml-1 mt-2'>{footerData.para71['bang']}</P3></HBox>
         </VBox>
    )

    const CompanyHtml = (margin1, margin2) => (
        <VBox>    
            <P2 className={margin1}>{footerData.head2['bang']}</P2>
            <SNavLink to='/contact-us'>
                <P3 className={margin2}>{footerData.para12['bang']}</P3>
            </SNavLink>
            <SNavLink to='/about-us'>
                <P3 className={margin2}>{footerData.para22['bang']}</P3>
            </SNavLink>
            <SNavLink to='/specialties'>
                <P3 className={margin2}>{footerData.para32['bang']}</P3>
            </SNavLink>
            {/* <SNavLink to='/blog'>
                <P3 className={margin2}>{footerData.para42['bang']}</P3>
            </SNavLink> */}
        </VBox>
    )

    const ServiceHtml = (margin1, margin2) => (
        <VBox>    
            <P2 className={margin1}>{footerData.head3['bang']}</P2>
            <P3 className={margin2} onClick={() => setOpenDoctorSearchDlg(true)}>{footerData.para13['bang']}</P3>
            {/* <P4 className='mt-2'>প্রতিনিয়ত জিজ্ঞাসিত প্রশ্ন</P4> */}
        </VBox>
    )

    const PaymentHtml = (margin1, margin2) => (
        <VBox>    
            <P2 className={margin1}>{footerData.head4['bang']}</P2>
            <SNavLink to='/payment'>
                <P3 className={margin2}>{footerData.para14['bang']}</P3>
            </SNavLink>
        </VBox>
    )

    return (
        <>
            <FooterContainer1 className='pb-7' style={{ marginTop: isMobile ? '60px' : '100px' }}>
                {isMobile ?
                    <VBox align='center'>
                        <VBox>
                            <LogoImage className='mt-4' src={logo} />
                            {ContactHtml()}
                            {CompanyHtml('bold mt-2', 'mt-1')}
                            {ServiceHtml('bold mt-2', 'mt-1 clickable')}
                            {PaymentHtml('bold mt-2', 'mt-1')}
                        </VBox>
                    </VBox>
                    :
                    <>
                        <LogoImage className='mt-4' src={logo} />
                        <HBox justify='space-between'>
                            {ContactHtml()}
                            {CompanyHtml('bold', 'mt-2')}
                            {ServiceHtml('bold', 'mt-2 clickable')}
                            {PaymentHtml('bold', 'mt-2')}
                        </HBox>
                    </>
                }
            </FooterContainer1>

            <FooterContainer2>
                <VBox align='center'>
                    <HBox className='mt-4 mb-1'>
                        <SNavLink to='/terms-conditions'>
                            <P3 style={{ color: colors.grey }}>{footerData.footer1['bang']}</P3>
                        </SNavLink>
                        <P3 className='mx-0_5' style={{ color: colors.grey }}>|</P3>
                        <SNavLink to='/privacy-policy'>
                            <P3 style={{ color: colors.grey }}>{footerData.footer2['bang']}</P3>  
                        </SNavLink>
                        <P3 className='mx-0_5' style={{ color: colors.grey }}>|</P3>
                        <SNavLink to='/refund-policy'>
                            <P3 style={{ color: colors.grey }}>{footerData.footer3['bang']}</P3>
                        </SNavLink>
                    </HBox>
                    <P3 className='mb-4' style={{ color: colors.grey }}>{footerData.footer4['bang']}{new Date().getFullYear()}&nbsp;{footerData.para21['bang']}</P3>
                </VBox>
            </FooterContainer2>

            <DoctorSearchDlg
                open={openDoctorSearchDlg}
                setOpen={setOpenDoctorSearchDlg}
                isMobile={isMobile}
            />
        </>
    );
}

export default Footer;