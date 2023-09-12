import styled from "styled-components";

import colors from "../../../config/colors";
import { VBox, HBox } from "../../../components/Containers";
import { H2, P1, P2 } from "../../../components/Typography";

const Container = styled(VBox)`
    margin-top: 8%;
    padding-left: 8%;
    padding-right: 8%;
    width: 100%;
`

const CardContainer = styled(HBox)`
    box-sizing: border-box;
    width: 50%;
    height: auto;
    background: linear-gradient(135deg, rgba(3, 94, 46, 0.37) 5.21%, rgba(3, 94, 46, 0.16) 17.81%, rgba(3, 94, 46, 0.08) 85.65%, rgba(3, 94, 46, 0.28) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 45px 45px 45px 75px;
`

const VerticalBorder = styled.div`
    height: 110px;
    width: 8px;
    background: linear-gradient(
        180deg,
        ${colors.darkGreen} 40%,
        ${colors.veryLightGreen}
    );
`

const VideoContainer = styled.iframe`
    position: relative;
    height: auto;
    left: 32px;
    top: 32px;
    border: 5px solid ${colors.lightBlack};
    border-radius: 15px;
`

const WhoWeAre = ({ isMobile }) => {
    return (
        <Container>
            <HBox align='center' className="mb-4">
                <VerticalBorder/>
                <VBox className="ml-2">
                    <H2 color="third" className="bold">আমাদের</H2>
                    <H2 color="third" className="bold">পরিচিতি</H2>
                </VBox>
            </HBox>
            <P1 style={{ width: "100%" }}>
                নেক্সটজেন ডিজিটেক লিমিটেড একটি বেসরকারি গবেষণা-ভিত্তিক কোম্পানি যা ডাক্তার, চিকিৎসা বিশেষজ্ঞ, 
                গবেষক এবং আইটি বিশেষজ্ঞদের একটি দল নিয়ে গঠিত। নেক্সটজেন ডিজিটেক, রোগী এবং ডাক্তার উভয়ের 
                উন্নয়নের জন্য প্রতিনিয়ত আপসহীনভাবে কাজ করে যাচ্ছে। নেক্সটজেন মাইহেলথ ভিসিপি নেক্সটজেন ডিজিটেক
                লিমিটেড বাংলাদেশের একটি স্বাস্থ্য পণ্য। এটির উদ্ভাবনী ভার্চুয়াল স্বাস্থ্যসেবা প্ল্যাটফর্ম বাংলাদেশের জনগণের 
                স্বাস্থ্যসেবা বিষয়ক ভোগান্তি কমাতে বদ্ধপরিকর।
            </P1>
            <HBox className="mt-8" justify='center'>
                <VideoContainer
                    style={{ width: isMobile ? '80%' : '40%', marginRight: isMobile ? '23%' : '' }}
                    src="https://www.youtube.com/embed/NdZ9vPHAy7w" 
                    title="Virtual Care Platform - NextGen MyHealth VCP" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen 
                />
                <CardContainer style={{ width: isMobile ? "100%" : "50%", padding: isMobile ? "15%" : "" }}>
                    <P2>
                        নেক্সটজেন ডিজিটেক লিমিটেড একটি বেসরকারি গবেষণা-ভিত্তিক কোম্পানি যা ডাক্তার, চিকিৎসা 
                        বিশেষজ্ঞ, গবেষক এবং আইটি বিশেষজ্ঞদের একটি দল নিয়ে গঠিত। নেক্সটজেন ডিজিটেক, রোগী এবং 
                        ডাক্তার উভয়ের উন্নয়নের জন্য প্রতিনিয়ত আপসহীনভাবে কাজ করে যাচ্ছে। নেক্সটজেন মাইহেলথ 
                        ভিসিপি নেক্সটজেন ডিজিটেক লিমিটেড বাংলাদেশের একটি স্বাস্থ্য পণ্য। এটির উদ্ভাবনী ভার্চুয়াল 
                        স্বাস্থ্যসেবা প্ল্যাটফর্ম বাংলাদেশের জনগণের স্বাস্থ্যসেবা বিষয়ক ভোগান্তি কমাতে বদ্ধপরিকর।
                    </P2>
                </CardContainer>
            </HBox>
        </Container>
    );
}

export default WhoWeAre;