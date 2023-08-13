import styled from "styled-components";

import { VBox, HBox } from "../../../components/Containers";
import { H3, P3 } from "../../../components/Typography";
import colors from '../../../config/colors';

const Container = styled(VBox)`
    margin-top: 120px;
    padding-left: 120px;
    padding-right: 120px;
`

const Underline = styled.div`
    width: 35%;
    border-bottom: 1px solid black;
    /* Write your CSS */
`

const Item = styled(VBox)`
    border: 4px solid ${colors.darkGreen};
    position: relative;
    /* background-color: blue; */
    height: 25%;
    border-radius: 25% 25% 25% 25% / 50% 50% 50% 50%;
`

const Item1 = styled(Item)`
    clip-path: polygon(0 0, 100% 0, 100% 50%, 90% 50%, 90% 70%, 80% 70%, 80% 90%, 70% 90%, 50% 90%, 50% 100%, 0 100%);
    top: ${props => props.topPosition};
    /* background-color: white;
    height: 100%; */
`

const Item2 = styled(Item)`
    clip-path: polygon(50% 0, 50% 15%, 10% 15%, 10% 85%, 50% 85%, 50% 100%, 100% 100%, 100% 0);
    top: ${props => props.topPosition};
`

const Item3 = styled(Item)`
    clip-path: polygon(0 0, 50% 0, 50% 15%, 80% 15%, 80% 30%, 95% 30%, 95% 50%, 100% 50%, 100% 100%, 0 100%);
    top: ${props => props.topPosition};
`


const CircleContainer = styled(HBox)`
    /* border: 3px solid black; */
    background-color: ${colors.white};
    position: absolute;
    width: 20%;
    top: ${props => props.topPosition};
    left: ${props => props.leftPosition};
    z-index: 1;
`

const Circle = styled(HBox)`
    border: 4px solid ${colors.darkGreen};
    height: 20px;
    width: 20px;
    border-radius: 50%;
`

const CenterCircleContainer = styled(VBox)`
    border: 3px solid blue;
    height: 80%;
    margin-top: 10%;
    border-radius: 50%;
    background-image: linear-gradient(to top right, ${colors.veryLightGrey}, #EEEEEE);
    padding: 20px;
`

const CenterCircle = styled(VBox)`
    border: 3px solid green;
    height: 100%;
    /* margin-top: 10%; */
    border-radius: 50%;
    background-image: linear-gradient(to top right, ${colors.veryLightGrey}, ${colors.grey}); 
`

const WhyUs = () => {
    return (
        <Container align='center'>
            <H3 className="bold">কেন আমদের প্লাটফর্ম ব্যবহার করবেন?</H3>
            <Underline className="my-8" />
            <HBox justify='center' style={{height: '40rem', width: '100%', border: '3px solid black'}}>
                <VBox justify='center' style={{width: '25%', position: 'relative'}}>
                    {/* Left */}
                    <Item1 className='m-2' topPosition='0' justify='center' align='center'>
                        <P3 align='center'>নিবন্ধিত বিশেষজ্ঞ চিকিৎসক</P3>
                    </Item1>
                    
                    <CircleContainer justify='center' topPosition='33.8%' leftPosition='41%'>
                        <Circle></Circle>
                    </CircleContainer>
                    
                    <Item2 className='mb-2 ml-2 mr-2' topPosition='-20px' justify='center' align='center'>
                        <P3 align='center'>ই-প্রেসক্রিপশন সেবা</P3>
                    </Item2>

                    <CircleContainer justify='center' topPosition='58%' leftPosition='41%'>
                        <Circle></Circle>
                    </CircleContainer>

                    <Item3 className='ml-2 mr-2' topPosition='-40px' justify='center' align='center'>
                        <P3 align='center'>ডায়গনিস্টিক রিপোর্ট আপলোড</P3>
                    </Item3>
                </VBox>


                <VBox style={{width: '50%'}}>
                    {/* Center */}
                    <VBox style={{border: '3px solid red', height: '100%', padding: '40px'}}>
                        <CenterCircleContainer>
                            <CenterCircle>

                            </CenterCircle>
                        </CenterCircleContainer>
                    </VBox>
                </VBox>


                <VBox justify='center' style={{width: '25%', position: 'relative'}}>
                    {/* Right */}

                    <Item1 className='m-2' topPosition='0' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                        <P3 align='center' style={{transform: 'ScaleX(-1)'}}>ভিডিও এবং অডিও পরামর্শ</P3>
                    </Item1>

                    <CircleContainer justify='center' topPosition='33.8%' leftPosition='41%'>
                        <Circle></Circle>
                    </CircleContainer>

                    <Item2 className='mb-2 ml-2 mr-2' topPosition='-20px' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                        <P3 align='center' style={{transform: 'ScaleX(-1)'}}>অনলাইন এবং অফলাইন</P3>
                        <P3 align='center' style={{transform: 'ScaleX(-1)'}}>পরামর্শ</P3>
                    </Item2>

                    <CircleContainer justify='center' topPosition='58%' leftPosition='41%'>
                        <Circle></Circle>
                    </CircleContainer>

                    <Item3 className='ml-2 mr-2' topPosition='-40px' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                        <P3 align='center' style={{transform: 'ScaleX(-1)'}}>ক্লাউড-ভিত্তিক ডেটা এবং গোপনীয়তার নিরাপত্তা</P3>
                    </Item3>
                </VBox>
            </HBox>
        </Container>
    );
}

export default WhyUs;