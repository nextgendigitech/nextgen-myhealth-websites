import styled from "styled-components";
import colors from "../../../config/colors";
import aboutus_banner from "../../../assets/images/aboutus_banner.png"
import youtube_logo from "../../../assets/images/youtube_logo.png";

import { HBox, VBox } from "../../../components/Containers";
import { H2, H3, P1, P2, P3, P4 } from "../../../components/Typography";


const Container = styled(HBox)`
    margin-right: 120px;
    margin-left: 120px;
    flex-wrap: nowrap;
`

const BannerImage = styled.img`
    height: auto;
    width: 100%;
`

const VerticalBorder = styled.div`
    height: 110px;
    width: 0.85%;
    background: linear-gradient(
    180deg,
    ${colors.darkGreen} 40%,
    ${colors.veryLightGreen}
    );
`

const Banner = () => {
    return (
        <>
            <BannerImage src={aboutus_banner} />
            <Container className="mt-8">
                <VerticalBorder/>
                <VBox className="ml-2">
                    <H2 color="third" className="bold">আমাদের</H2>
                    <H2 color="third" className="bold">পরিচিতি</H2>
                </VBox>
            </Container>
            <Container className="mt-8">
                <P1>নেক্সটজেন ডিজিটেক লিমিটেড একটি বেসরকারি গবেষণা-ভিত্তিক কোম্পানি যা ডাক্তার, চিকিৎসা বিশেষজ্ঞ, 
                    গবেষক এবং আইটি বিশেষজ্ঞদের একটি দল নিয়ে গঠিত | নেক্সটজেন ডিজিটেক, রোগী এবং ডাক্তার উভয়ের 
                    উন্নয়নের জন্য প্রতিনিয়ত আপসহীনভাবে কাজ করে যাচ্ছে | নেক্সটজেন মাইহেলথ ভিসিপি নেক্সটজেন ডিজিটেক
                    লিমিটেড বাংলাদেশের একটি স্বাস্থ্য পণ্য | এটির উদ্ভাবনী ভার্চুয়াল স্বাস্থ্যসেবা প্ল্যাটফর্ম বাংলাদেশের জনগণের 
                    স্বাস্থ্যসেবা বিষয়ক ভোগান্তি কমাতে বদ্ধপরিকর |</P1>
            </Container>
        </>
    );
}

export default Banner;