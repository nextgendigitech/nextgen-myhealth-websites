import React from 'react'
import Policy from '../components/Policy'
import { CenterPanel, HeaderContainer } from '../layouts/Container'

const PrivacyPolicy = () => {
    const sectionHeader = ['Privacy Policy', 'Information Collects About You', 'Communications', 'Log Data', 'Your Contact Information', 'Cookies', 'Security',
        'Changes To This Privacy Policy'
    ]
    const sectionParaphrase = 
        {
            'Privacy Policy': [
                'This privacy policy describes how NextGen MyHealth VCP website and related application (the “Site”, “we” or “us”) collects, uses, and disclose the personal information that we receive from users of the Site.',
                'NextGen MyHealth VCP has established this Site to link up users with the service providing persons or team. This policy also applies to any mobile applications that we develop for use with our services and Team specific pages on the Site, and references to this “Site”, “we” or “us” is intended to also include these mobile applications.',
                'If you do not agree to the terms of this Privacy Policy, please do not use NextGen MyHealth VCP.'
            ],
            'Information Collects About You': [
                'While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information").'
            ],
            'Communications': [
                'We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information.'
            ],
            'Log Data': [
                'Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").',
                'This Log Data may include information such as your computers Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.',
                'In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this.'
            ],
            'Your Contact Information': [
                'When you provide us with your contact information, we will use that information to communicate with you about your use of our service. For example, when you have entered into a confirmed transaction with us, we will use your contact information to notify you of the transaction. We will also share your contact information with the consultant. If you agree, we may also use your e-mail address to send you a newsletter or other information about our services or about other products or services in which you may be interested. You may change your preferences at any time, though you will not be able to opt out of messages relating to your use of our service.'
            ],
            'Cookies': [
                'Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computers hard drive.',
                'Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.'
            ],
            'Security': [
                'The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.'
            ],
            'Changes To This Privacy Policy': [
                'We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.',
                'If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.'
            ],
        }
    
  return (
    <CenterPanel>
        <HeaderContainer>
            <h1>Privacy Policy</h1>
        </HeaderContainer>
        <Policy sectionHeader={sectionHeader} sectionParaphrase={sectionParaphrase} />
    </CenterPanel>
  )
}

export default PrivacyPolicy