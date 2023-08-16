import styled from "styled-components";
import colors from "../../../config/colors";

import { Button } from "../../../components/Buttons";
import { HBox, VBox } from "../../../components/Containers";
import { H5, P2, P3 } from "../../../components/Typography";
import { HiOutlinePhone } from "react-icons/hi"
import { AiOutlineMail } from "react-icons/ai"


const Card = styled(VBox)`
    width: 800px;
    border: 1px solid ${colors.white};
    border-radius: 8px;
    box-shadow: 2px 5px 10px 2px ${colors.grey};
`

const Input = styled.input`
    border: 1px solid ${colors.green};
    border-radius: 5px;
    width: 360px;
    height: 40px;
`

const Textarea = styled.textarea`
    border: 1px solid ${colors.green};
    border-radius: 5px;
    resize: none;
`

const Underline = styled.span`
    border-bottom: 2px solid ${colors.darkGreen}; 
    position: relative;
    left: 295px;
    top: 17px;
    width: 20%;
    margin-bottom: 50px;
`

const SButton = styled(Button)`
    height: 40px;
    border-radius: 5px;
    font-weight: bold;
`

const Form = () => {
    
    return (
        <Card className="p-4" style={{ alignSelf: 'center' }}>
            <H5 align="center" color="third">যোগাযোগ করুন</H5>
            <Underline/>
            <HBox justify="space-around" align="center">
                <VBox>
                    <P2 className="bold mb-2" color="third">বার্তা লিখুন</P2>
                    <Input className="p-1 mb-2" type="text" placeholder="নাম"/>
                    <Input className="p-1 mb-2" type="email" placeholder="ই-মেইল" />
                    <Textarea
                        placeholder="বার্তা (প্রশ্নের বিবরণ)" 
                        rows={8}
                        className="p-1"
                    />
                    <SButton type="submit" color="third" className="mt-5" elevated>বার্তা পাঠান</SButton>
                </VBox>
                <VBox>
                    <P2 className="bold">নেক্সটজেন মাইহেলথ ভিসিপি</P2>
                    <P3>স্বাস্থ্য বিভাগ</P3>
                    <P3 color="first">নেক্সটজেন ডিজিটেক লিমিটেড</P3>
                    <P3>টুল অ্যান্ড টেকনোলজি ইনস্টিটিউট, বিট্যাক শিল্প</P3>
                    <P3>মন্ত্রণালয় ১১৬ (খ), তেজগাঁও শিল্প এলাকা,</P3>
                    <P3>ঢাকা-১২০৮, বাংলাদেশ</P3>
                    <HBox className="mt-3">
                        <HiOutlinePhone/>
                        <P3>+৮৮০১৩২১১১৯৩৯১</P3>
                    </HBox>
                    <HBox className="mt-3 mb-6">
                        <AiOutlineMail/>
                        <P3>info@nextgenmyhealth.com</P3>
                    </HBox>
                </VBox>
            </HBox>
        </Card>      
    );
}

export default Form;