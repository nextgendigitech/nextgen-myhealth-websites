import { useState, useEffect } from 'react';
import { HiOutlinePhone } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { HBox, VBox } from '../components/Containers';
import { P2, P3, P4 } from '../components/Typography';
import logo from '../assets/images/Website-Logo.png'
import colors from '../config/colors';
import responsive from '../config/responsive';
import DoctorSearchDlg from './DoctorSearchDlg';

const FooterContainer1 = styled(VBox)`
    padding-left: 8%;
    padding-right: 8%;
    margin-top: 80px;
    background-color: ${colors.mercury};
    border-radius: 30px 30px 0px 0px;
`

const FooterContainer2 = styled(HBox)`
    padding-left: 120px;
    padding-right: 120px;
    background-color: ${colors.lightBlack};
    justify-content: center;
`

const PhoneIcon = styled(HiOutlinePhone)`
    font-size: 25px;

    @media only screen and (max-width: ${responsive.mobileThresh-1}px) {
        font-size: 15px;
    }
`

const EmailIcon = styled(AiOutlineMail)`
    font-size: 25px;

    @media only screen and (max-width: ${responsive.mobileThresh-1}px) {
        font-size: 15px;
    }
`

const LogoImage = styled.img`
    width: 200px;
    
    @media only screen and (max-width: ${responsive.mobileThresh-1}px) {
        width: 120px;
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
    const ContactHtml = () => (
        <VBox>    
            <P2 className='bold'>নেক্সটজেন মাইহেলথ ভিসিপি</P2>
            <P3>স্বাস্থ্য বিভাগ</P3>
            <P3 color='first'>নেক্সটজেন ডিজিটেক লিমিটেড</P3>
            <P3>টুল অ্যান্ড টেকনোলজি ইনস্টিটিউট, বিট্যাক শিল্প</P3>
            <P3>মন্ত্রণালয় ১১৬ (খ), তেজগাঁও শিল্প এলাকা,</P3>
            <P3>ঢাকা-১২০৮, বাংলাদেশ</P3>
            <HBox align='center'><PhoneIcon className='mt-2' /><P3 className='ml-1 mt-2'> +৮৮০ ১৩২১১১৯৩৯১</P3></HBox>
            <HBox align='center'><EmailIcon className='mt-2' /><P3 className='ml-1 mt-2'>info@nextgenmyhealth.com</P3></HBox>
         </VBox>
    )

    const CompanyHtml = (margin1, margin2) => (
        <VBox>    
            <P2 className={margin1}>কোম্পানী</P2>
            <SNavLink to='/contact-us'>
                <P3 className={margin2}>যোগাযোগ করুন</P3>
            </SNavLink>
            <SNavLink to='/about-us'>
                <P3 className={margin2}>পরিচিতি</P3>
            </SNavLink>
            <SNavLink to='/specialties'>
                <P3 className={margin2}>বিশেষজ্ঞ ডাক্তার</P3>
            </SNavLink>
            <SNavLink to='/blog'>
                <P4 className={margin2}>ব্লগ</P4>
            </SNavLink>
        </VBox>
    )

    const ServiceHtml = (margin1, margin2) => (
        <VBox>    
            <P2 className={margin1}>সেবাসমূহ</P2>
            <P3 className={margin2} onClick={() => setOpenDoctorSearchDlg(true)}>ডাক্তার অনুসন্ধান করুন</P3>
            {/* <P4 className='mt-2'>প্রতিনিয়ত জিজ্ঞাসিত প্রশ্ন</P4> */}
        </VBox>
    )

    const PaymentHtml = (margin1, margin2) => (
        <VBox>    
            <P2 className={margin1}>অর্থ প্রদান</P2>
            <SNavLink to='/payment'>
                <P3 className={margin2}>পেমেন্ট</P3>
            </SNavLink>
        </VBox>
    )


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

    return (
        <>
            <FooterContainer1 className='pb-7'>
                
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
                            <P3 style={{ color: colors.grey }}>নিয়ম ও শর্তাবলী&nbsp;</P3>
                        </SNavLink>
                        <P3 className='mx-0_5' style={{ color: colors.grey }}>|</P3>
                        <SNavLink to='/privacy-policy'>
                            <P3 style={{ color: colors.grey }}>গোপনীয়তা নীতিমালা&nbsp;</P3>  
                        </SNavLink>
                        <P3 className='mx-0_5' style={{ color: colors.grey }}>|</P3>
                        <SNavLink to='/refund-policy'>
                            <P3 style={{ color: colors.grey }}>ফেরত নীতিমালা&nbsp;</P3>
                        </SNavLink>
                    </HBox>
                    <P3 className='mb-4' style={{ color: colors.grey }}>কপিরাইট © {new Date().getFullYear()} নেক্সটজেন ডিজিটেক লিমিটেড.</P3>
                </VBox>
            </FooterContainer2>

            <DoctorSearchDlg
                open={openDoctorSearchDlg}
                setOpen={setOpenDoctorSearchDlg}
            />
        </>
    );
}

export default Footer;