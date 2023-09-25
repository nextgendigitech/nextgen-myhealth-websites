import styled from "styled-components";

import colors from "../../../config/colors";
import { HBox, VBox } from "../../../components/Containers";
import { H3, P2, P4 } from "../../../components/Typography";

const Container = styled(VBox)`
    width: 100%;
`

const VContainer = styled(VBox)`
    align-items: center;
    flex-wrap: nowrap;
`

const UpperHalfCircleCard = styled.div`
    width: 230px;
    height: 200px;
    background-color: ${colors.green};
    border-top-left-radius: 110px;
    border-top-right-radius: 105px;
`

const LowerHalfCircleCard = styled.div`
    width: 230px;
    height: 200px;
    background-color: ${colors.green};
    border-bottom-left-radius: 110px;
    border-bottom-right-radius: 105px;
`

const TopContentCard = ({ title, detail, isMobile }) => {
    return (
        <UpperHalfCircleCard className={isMobile ? "mb-2" : "mb-6 mx-4"}>
            <VBox className='pt-6 px-2'>
                <P2 className="bold" color="white" align="center">{title}</P2>
                <P4 color="white" className="mt-2" align="center">{detail}</P4>
            </VBox>
        </UpperHalfCircleCard>

    );
}

const BottomContentCard = ({ title, detail, isMobile }) => {
    return (
        <LowerHalfCircleCard className={isMobile ? "mb-2" : "mx-4"}>
            <VBox className='pt-2 px-2'>
                <P2 className="bold mb-2" color="white" align="center">{title}</P2>
                <P4 color="white" align="center">{detail}</P4>
            </VBox>
        </LowerHalfCircleCard>

    );
}

const OurAdvantages = ({ isMobile }) => {
  return (
    <Container className={isMobile ? "pt-4" : "pt-8 mt-5"}>
        <H3 align="center" className={isMobile ? "bold mb-2" : "bold mb-4"}>আমাদের প্ল্যাটফর্ম ব্যবহার করার সুবিধা</H3>
        <HBox justify="center" align="center"> 
            <VContainer>
                <TopContentCard
                    isMobile={isMobile}
                    title="ব্যবহারকারী বান্ধব পোর্টাল"
                    detail="রোগী এবং ডাক্তার পক্ষের সকল বয়সের ব্যবহারকারীদের জন্য ব্যবহার করা সহজ।"
                />
                <BottomContentCard 
                    isMobile={isMobile}
                    title="অ্যাপয়েন্টমেন্ট নোটিফিকেশন"
                    detail="অনলাইন পরামর্শের জন্য রোগী এবং ডাক্তার উভয়কে এসএমএস এবং ই-মেইলের মাধ্যমে প্রাথমিকভাবে জানানো হবে।"
                />
            </VContainer>
            <VContainer>
                <TopContentCard 
                    isMobile={isMobile}
                    title="স্বনামধন্য বিশেষজ্ঞ ডাক্তার"
                    detail="নেক্সটজেন মাইহেলথ ভিসিপি-তে আছেন দেশ - বিদেশের সকল বিখ্যাত বিশেষজ্ঞ ডাক্তারণ।"
                />
                <BottomContentCard 
                    isMobile={isMobile}
                    title="ডায়াগনস্টিক রিপোর্ট আপলোড"
                    detail="রোগী পোর্টালে তার ডায়াগনস্টিক রিপোর্ট আপলোড করতে স্মার্টফোন ক্যামেরা এবং উল্লেখিত ছবি আপলোড উভয় বিকল্পই ব্যবহার করতে পারেন।"
                />
            </VContainer>
            <VContainer>
                <TopContentCard 
                    isMobile={isMobile}
                    title="ই-প্রেসক্রিপশন সেবা"
                    detail="ভিডিও সেশনের সমাপ্তির পর ডাক্তার ই-প্রেসক্রিপশন আপলোড করবেন। ই-প্রেসক্রিপশনটি তখনই বা পরে ডাউনলোড এবং ব্যবহার করা যাবে।"
                />
                <BottomContentCard 
                    isMobile={isMobile}
                    title="সপ্তাহব্যাপী সেবা"
                    detail="নেক্সটজেন মাইহেলথ ভিসিপি সপ্তাহে সাত দিনই সেবা প্রদানের জন্য নিবেদিত।"
                />
            </VContainer>
        </HBox>
    </Container>
  );
}

export default OurAdvantages;