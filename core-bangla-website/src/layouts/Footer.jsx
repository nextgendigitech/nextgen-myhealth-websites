import { HiOutlinePhone } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
import styled from 'styled-components';

import { HBox, VBox } from '../components/Containers';
import { P3, P4 } from '../components/Typography';
import logo from '../assets/images/Website-Logo.png'
import colors from '../config/colors';

const FooterContainer1 = styled(VBox)`
    padding-left: 120px;
    padding-right: 120px;
    margin-top: 200px;
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
`

const EmailIcon = styled(AiOutlineMail)`
    font-size: 25px;
`

const LogoImage = styled.img`
    width: 13%;
`

const Footer = () => {
    return (
        <>
            <FooterContainer1 className='pb-7'>
                <LogoImage className='mt-4' src={logo} />
                <HBox justify='space-between'>
                    <VBox>    
                        <P3 className='bold'>নেক্সটজেন মাইহেলথ ভিসিপি</P3>
                        <P4>স্বাস্থ্য বিভাগ</P4>
                        <P4 color='first'>নেক্সটজেন ডিজিটেক লিমিটেড</P4>
                        <P4>টুল অ্যান্ড টেকনোলজি ইনস্টিটিউট, বিট্যাক শিল্প</P4>
                        <P4>মন্ত্রণালয় ১১৬ (খ), তেজগাঁও শিল্প এলাকা,</P4>
                        <P4>ঢাকা-১২০৮, বাংলাদেশ</P4>
                        <HBox align='center'><PhoneIcon className='mt-2' /><P4 className='ml-1 mt-2'> +৮৮০ ১৩২১১১৯৩৯১</P4></HBox>
                        <HBox align='center'><EmailIcon className='mt-2' /><P4 className='ml-1 mt-2'>info@nextgenmyhealth.com</P4></HBox>
                    </VBox>
                    <VBox>    
                        <P3 className='bold'>কোম্পানী</P3>
                        <P4 className='mt-2'>যোগাযোগ করুন</P4>
                        <P4 className='mt-2'>পরিচিতি</P4>
                        <P4 className='mt-2'>বিশেষত্ব</P4>
                        <P4 className='mt-2'>ব্লগ</P4>
                    </VBox>
                    <VBox>    
                        <P3 className='bold'>সেবাসমূহ</P3>
                        <P4 className='mt-2'>ডাক্তার অনুসন্ধান করুন</P4>
                        <P4 className='mt-2'>প্রতিনিয়ত জিজ্ঞাসিত প্রশ্ন</P4>
                    </VBox>
                    <VBox>    
                        <P3 className='bold'>অর্থ প্রদান</P3>
                        <P4 className='mt-2'>পেমেন্ট</P4>
                    </VBox>
                </HBox>
            </FooterContainer1>

            <FooterContainer2>
                <VBox align='center'>
                    <P4 className='mt-4' style={{ color: colors.grey }}>নিয়ম ও শর্তাবলী  |  গোপনীয়তা নীতিমালা  |  ফেরত নীতিমালা</P4>
                    <P4 className='mb-4' style={{ color: colors.grey }}>© নেক্সটজেন ডিজিটেক লিমিটেড.</P4>
                </VBox>
            </FooterContainer2>
        </>
    );
}

export default Footer;