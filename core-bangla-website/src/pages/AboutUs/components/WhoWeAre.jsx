import styled from "styled-components";
import colors from "../../../config/colors";
import youtube_logo from "../../../assets/images/youtube_logo.png";

import { VBox } from "../../../components/Containers";
import { H3, P2 } from "../../../components/Typography";

const Container = styled(VBox)`
    margin-top: 120px;
    padding-left: 120px;
    padding-right: 120px;
`

const CardContainer = styled.div`
    box-sizing: border-box;
    width: 600px;
    height: auto;
    background: linear-gradient(135deg, rgba(3, 94, 46, 0.37) 5.21%, rgba(3, 94, 46, 0.16) 17.81%, rgba(3, 94, 46, 0.08) 85.65%, rgba(3, 94, 46, 0.28) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin: 50px 40px 40px 35%;
    padding: 45px 45px 45px 75px;
`

const ImageBox = styled.div`
    position: absolute;
    height: 40%;
    width: 30%;
    display: flex; 
    align-items: center;
    justify-content: center;
    border: solid 5px black;
    border-radius: 15px;
    background-color: ${colors.white};
    left: 180px;
    top: 1440px;
`

const Image = styled.img`
    height: 45%;
    width: auto;
`

const WhoWeAre = () => {
    return (
        <Container align="center">
            <H3 color="third" className="bold">আমাদের পরিচিতি</H3>
            <CardContainer>
                <P2>নেক্সটজেন ডিজিটেক লিমিটেড একটি বেসরকারি গবেষণা-ভিত্তিক কোম্পানি যা ডাক্তার, চিকিৎসা 
                    বিশেষজ্ঞ, গবেষক এবং আইটি বিশেষজ্ঞদের একটি দল নিয়ে গঠিত | নেক্সটজেন ডিজিটেক, রোগী এবং 
                    ডাক্তার উভয়ের উন্নয়নের জন্য প্রতিনিয়ত আপসহীনভাবে কাজ করে যাচ্ছে | নেক্সটজেন মাইহেলথ 
                    ভিসিপি নেক্সটজেন ডিজিটেক লিমিটেড বাংলাদেশের একটি স্বাস্থ্য পণ্য | এটির উদ্ভাবনী ভার্চুয়াল 
                    স্বাস্থ্যসেবা প্ল্যাটফর্ম বাংলাদেশের জনগণের স্বাস্থ্যসেবা বিষয়ক ভোগান্তি কমাতে বদ্ধপরিকর |</P2>
            </CardContainer>
            <ImageBox>
                <Image src={youtube_logo} />
            </ImageBox>
        </Container>
    );
}

export default WhoWeAre;