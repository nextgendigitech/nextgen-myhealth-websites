import styled from "styled-components";

import { Button } from '../../../components/Buttons';
import colors from "../../../config/colors";
import { HBox, VBox } from "../../../components/Containers";
import { H5, P2, P4 } from "../../../components/Typography";


const VContainer = styled(VBox)`

`
const Card = styled.div`
    width: 800px;
    border: 1px solid ${colors.white};
    padding: 25px;
    border-radius: 8px;
    box-shadow: 5px 4px 5px ${colors.grey};
`;

const FillupForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin-bottom: 20px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;

    width: 360px;
    height: 40px;
    padding: 8px;
`;

const UnderlinedText = styled.span`
  border-bottom: 2px solid ${colors.darkGreen}; 
  position: relative;
  left: 295px;
  top: 17px;
  width: 20%;
  margin-bottom: 40px;
`;

const SButton = styled(Button)`
   height: 40px;
   border-radius: 8px;
   font-weight: bold;
   background-color: ${colors.darkGreen};
   color: ${colors. white};
`;

const Form = () => {
    return (
        <VContainer>
            <Card>
                <VBox>
                    <H5 align='center' color="third">যোগাযোগ করুন</H5>
                    <UnderlinedText/>
                </VBox>
                <HBox justify='space-between' align='center'>
                    <VBox>
                        <FillupForm>
                            <P2 className='mb-2' color="third">বার্তা লিখুন</P2>
                            <Input type="text" placeholder="নাম" required/>
                            <Input type="email" placeholder="ই-মেইল" />
                            <Input type="text" placeholder="বার্তা (প্রশ্নের বিবরণ)" required/>
                            <SButton type="submit">বার্তা পাঠান</SButton>
                        </FillupForm>
                    </VBox>
                    <VBox>
                    নেক্সটজেন মাইহেলথ ভিসিপি
                    স্বাস্থ্য বিভাগ
                    নেক্সটজেন ডিজিটেক লিমিটেড
                    টুল অ্যান্ড টেকনোলজি ইনস্টিটিউট, বিট্যাক শিল্প মন্ত্রণালয় ১১৬ (খ), তেজগাঁও শিল্প এলাকা, ঢাকা-১২০৮, বাংলাদেশ

                    +৮৮০ ১৩২১১১৯৩৯১

                    info@nextgenmyhealth.com
                    </VBox>
                </HBox>
            </Card>
        </VContainer>        
    );
}

export default Form;