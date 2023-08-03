import styled from "styled-components";
import colors from "../../../config/colors";
import dummyimage from "../../../assets/images/dummy_image.jpg";

import { HBox, VBox } from "../../../components/Containers";
import { H3, P2, P4 } from "../../../components/Typography";

const Container = styled(VBox)`
    margin-top: 35px;
`;

const SContainer = styled(HBox)`
    width: 100%;
    background: linear-gradient(
        276.53deg,
        ${colors.lightBlue} 0.51%,
        ${colors.veryLightBlue} 50.78%,
        ${colors.lightBlue} 100%
    );
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0% 4%;
`;

const CardContainer = styled(VBox)`
    width: 25%;
    height: 320px;
    background: ${colors.white};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 0px 30px;
`;

const Image = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 40px;
    box-shadow: 0px 3px 5px ${colors.shadow};
`;

const ReviewCard = ({ image, name, review, className }) => {
    return (
        <CardContainer className={className} justify="center" align="center">
        <Image className="mb-2" src={image} />
        <P2 className="bold mb-2">{name}</P2>
        <P4>{review}</P4>
        </CardContainer>
    );
};

const CustomerReview = () => {
    return (
        <>
            <Container>
                <H3 align="center" className="bold pb-3">
                    আমাদের ক্লায়েন্টরা কি বলেন
                </H3>
                <SContainer className="p-8" justify="center" align="center">
                    <ReviewCard
                    className="p-3 mx-4"
                    image={dummyimage}
                    name="রামিসা ফারিহা জয়ী"
                    review="খুব ভালো প্লাটফর্ম| 
                            আমার হাতে কম সময় থাকার জন্য ডাক্তার এর কাছে যেতে পারিনি| এই প্লাটফর্ম আমাকে ভার্চুয়ালি ডাক্তার 
                            দেখানোর সুযোগ করে দেয়ায় আমি খুব কৃতজ্ঞ|"
                    />
                    <ReviewCard
                    className="p-3 mx-4"
                    image={null}
                    name="ইমাম হাশেম"
                    review="আমি সত্যিই খুশি যে ডাক্তাররা আমাকে 
                            আমার অবস্থা এবং থেরাপি সম্পর্কে আরও জানার সুযোগ দিয়েছেন যা আমাকে চিকিত্সা করতে সাহায্য করেছিল। 
                            পিঠের ব্যথা ছাড়াই আমি আমার নিয়মিত জীবনে ফিরে এসেছি। আমি অবশেষে শান্তিতে আছি।"
                    />
                    <ReviewCard
                    className="p-3 mx-4"
                    image={null}
                    name="জয়ী"
                    review="মোটামুটি ভালো|"
                    />
                </SContainer>
            </Container>
        </>
    );
};

export default CustomerReview;
