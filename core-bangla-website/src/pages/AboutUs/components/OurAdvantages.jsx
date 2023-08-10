import styled from "styled-components";
import colors from "../../../config/colors";

import { HBox, VBox } from "../../../components/Containers";
import { H3, P2, P4 } from "../../../components/Typography";


const VContainer = styled(VBox)`
    margin-top: 120px;
    align-items: center;
    flex-wrap: nowrap;
`

const UpperHalfCircleCard = styled.div`
    width: 230px;
    height: 210px;
    background-color: ${colors.green};
    border-top-left-radius: 110px;
    border-top-right-radius: 105px;
    margin: 0px 35px 50px 35px;
`

const LowerHalfCircleCard = styled.div`
    width: 230px;
    height: 210px;
    background-color: ${colors.green};
    border-bottom-left-radius: 110px;
    border-bottom-right-radius: 105px;
    margin: 0px 35px 50px 35px;
  
`

const Content = styled.div`
    margin: 12px;
    padding: 20px;
    text-align: center;
`

const TopContentCard = ({ title, detail, className }) => {
    return (
        <UpperHalfCircleCard>
            <Content className={className}>
                <P2 className="bold" color="white" align="center">{title}</P2>
                <P4 color="white" className="mt-2" align="center">{detail}</P4>
            </Content>
        </UpperHalfCircleCard>

    );
}

const BottomContentCard = ({ title, detail, className }) => {
    return (
        <LowerHalfCircleCard>
            <Content className={className}>
                <P2 className="bold mb-2" color="white" align="center">{title}</P2>
                <P4 color="white" align="center">{detail}</P4>
            </Content>
        </LowerHalfCircleCard>

    );
}

const OurAdvantages = () => {
  return (
    <>
        <H3 className="bold" align="center" style={{ marginTop: '120px' }}>আমাদের প্ল্যাটফর্ম ব্যবহার করার সুবিধা</H3>
        <HBox justify="center" align="center"> 
            <VContainer>
                <TopContentCard 
                title="ব্যবহারকারী বান্ধব পোর্টাল"
                detail="রোগী এবং ডাক্তার পক্ষের সকল বয়সের ব্যবহারকারীদের জন্য ব্যবহার করা সহজ।"
                />
                <BottomContentCard 
                title="অ্যাপয়েন্টমেন্ট নোটিফিকেশন"
                detail="অনলাইন পরামর্শের জন্য রোগী এবং ডাক্তার উভয়কে এসএমএস এবং ই-মেইলের মাধ্যমে প্রাথমিকভাবে জানানো হবে।"
                />
            </VContainer>
            <VContainer>
                <TopContentCard 
                    title="স্বনামধন্য বিশেষজ্ঞ ডাক্তার"
                    detail="নেক্সটজেন মাইহেলথ ভিসিপি-তে আছেন দেশ - বিদেশের সকল বিখ্যাত বিশেষজ্ঞ ডাক্তারণ।"
                />
                <BottomContentCard 
                    title="ডায়াগনস্টিক রিপোর্ট আপলোড"
                    detail="রোগী পোর্টালে তার ডায়াগনস্টিক রিপোর্ট আপলোড করতে স্মার্টফোন ক্যামেরা এবং উল্লেখিত ছবি আপলোড উভয় বিকল্পই ব্যবহার করতে পারেন।"
                />
            </VContainer>
            <VContainer>
            <TopContentCard 
                title="ই-প্রেসক্রিপশন সেবা"
                detail="ভিডিও সেশনের সমাপ্তির পর ডাক্তার ই-প্রেসক্রিপশন আপলোড করবেন। ই-প্রেসক্রিপশনটি তখনই বা পরে ডাউনলোড এবং ব্যবহার করা যাবে।"
            />
            <BottomContentCard 
                title="সপ্তাহব্যাপী সেবা"
                detail="নেক্সটজেন মাইহেলথ ভিসিপি সপ্তাহে সাত দিনই সেবা প্রদানের জন্য নিবেদিত।"
            />
            </VContainer>
        </HBox>
    </>
  );
}

export default OurAdvantages