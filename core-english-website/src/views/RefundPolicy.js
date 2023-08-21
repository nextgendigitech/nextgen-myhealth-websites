import React from 'react'
import Policy from '../components/Policy'
import { CenterPanel, HeaderContainer } from '../layouts/Container'

const RefundPolicy = () => {
    const sectionHeader = [
        'PAYMENTS',
        'REFUND AND CANCELLATION'
    ]

    const sectionParaphrase = {
        'PAYMENTS': [
            '1. Doctor’s consultation fee should be paid only through NextGen MyHealth VCP approved payment gateway or bank account. NextGen MyHealth VCP will not be responsible for using any another payment gateway.',
            '2. Patients must pay the consultation fee and VAT before joining the doctor for consultation.',
            '3. If there is no consultation fee, the Patients will not be required to make any payment and they will be directly transferred to the doctor consultation.',
            '4. Any kind of unethical transaction through NextGen MyHealth VCP will not be accepted and NextGen MyHealth VCP will never be responsible for it.'
        ],
        'REFUND AND CANCELLATION': [
            '1. If the doctor is not available for the consultation or the waiting time is more than 60 minutes then customers can cancel the consultation and a refund will be made.',
            '2. Consultation fees will not be refunded in any way after consulting a doctor.',
            '3. If a Patient cancels a consultation prior to the video call of the Doctor after acceptance by the Doctor of the Patient’s request before the expiry of 60 minutes from the Initiation Request, a 5% fee will be deducted and the remaining fee will be refunded to the Patient. There may be additional charges to make the refund. For example, if the user wants the money to be refunded to bKash, Nagad etc.The transaction fee will be deducted.',
            '4. For any cancellation and refund please email to: info@nextgenmyhealth.com',
            '5. Refund process may take up to 10 working days.'
        ]
    }
  return (
    <CenterPanel>
        <HeaderContainer>
            <h1>Refund Policy</h1>
        </HeaderContainer>
        <Policy sectionHeader={sectionHeader} sectionParaphrase={sectionParaphrase} />
    </CenterPanel>
  )
}

export default RefundPolicy