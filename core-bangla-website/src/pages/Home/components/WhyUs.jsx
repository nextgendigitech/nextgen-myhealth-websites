import styled from "styled-components";

import { VBox, HBox } from "../../../components/Containers";
import { H2, H3, P1, P2 } from "../../../components/Typography";
import colors from '../../../config/colors';

const Container = styled(VBox)`
    margin-top: 120px;
    padding-left: 120px;
    padding-right: 120px;
`

const Underline = styled.div`
    width: 35%;
    border-bottom: 5px solid ${colors.darkGreen};
    border-image: linear-gradient(to top left, ${colors.lightGreen}, ${colors.darkGreen});
    border-image-slice: 1;
`

const Item = styled(VBox)`
    position: relative;
    height: 25%;
    border-radius: 25% 25% 25% 25% / 50% 50% 50% 50%;
`

const Item1 = styled(Item)`
    clip-path: polygon(0 0, 100% 0, 100% 50%, 90% 50%, 90% 70%, 80% 70%, 80% 90%, 70% 90%, 50% 90%, 50% 100%, 0 100%);
    top: ${props => props.top_position};
    padding: 4px;
    background-image: linear-gradient(to top, ${colors.lightGreen}, ${colors.darkGreen});
`

const Item2 = styled(Item)`
    clip-path: polygon(50% 0, 50% 15%, 10% 15%, 10% 85%, 50% 85%, 50% 100%, 100% 100%, 100% 0);
    top: ${props => props.top_position};
    padding: 4px;
    background-image: linear-gradient(to left, ${colors.lightGreen}, ${colors.darkGreen});
`

const Item3 = styled(Item)`
    clip-path: polygon(0 0, 50% 0, 50% 15%, 80% 15%, 80% 30%, 95% 30%, 95% 50%, 100% 50%, 100% 100%, 0 100%);
    top: ${props => props.top_position};
    padding: 4px;
    background-image: linear-gradient(to top, ${colors.lightGreen}, ${colors.darkGreen});
`

const ItemTextContainer = styled(VBox)`
    /* clip-path: polygon(0 0, 100% 0, 100% 50%, 90% 50%, 90% 70%, 80% 70%, 80% 90%, 70% 90%, 50% 90%, 50% 100%, 0 100%); */
    height: 100%;
    width: 100%;
    border-radius: 25% 25% 25% 25% / 50% 50% 50% 50%;
    background-color: ${colors.white};
`

const CircleContainer = styled(HBox)`
    background-color: ${colors.white};
    position: absolute;
    width: 20%;
    top: ${props => props.top_position};
    left: ${props => props.left_position};
    z-index: 1;
`

const Circle = styled(HBox)`
    border: 4px solid ${colors.darkGreen};
    height: 20px;
    width: 20px;
    border-radius: 50%;
`

const CenterCircleContainer = styled(VBox)`
    height: 90%;
    margin-top: 5%;
    border-radius: 50%;
    background-image: linear-gradient(to top left, ${colors.grey}, ${colors.lightGrey});
    padding: 20px;
    box-shadow: 0 0 30px 12px ${colors.grey};
`

const CenterCircle = styled(VBox)`
    height: 100%;
    width: auto;
    border-radius: 50%;
    background-image: linear-gradient(to bottom left, ${colors.grey}, ${colors.lightGrey}); 
`

const CircleTextContainerOuter = styled(VBox)`
    width: 80%;
    border-bottom: 6px solid ${colors.darkGreen};
    padding: 10px;
    margin-bottom: 10%;
    box-shadow: 0 10px 5px -5px ${colors.lessDarkGrey};
`

const CircleTextContainerInner = styled(VBox)`
    width: 90%;
    border-bottom: 6px solid ${colors.darkGreen};
    box-shadow: 0 10px 5px -5px ${colors.lessDarkGrey};
`

const CenterCircleText = styled(H2)`
    position: relative;
    color: ${colors.darkGreen};
    text-shadow: 4px 4px 5px ${colors.lessDarkGrey};
`

const WhyUs = () => {
    return (
        <Container align='center'>
            <H3 className="bold">কেন আমদের প্লাটফর্ম ব্যবহার করবেন?</H3>
            <Underline className="my-2" />
            <HBox justify='center' style={{height: '40rem', width: '100%'}}>
                <VBox justify='center' style={{width: '25%', position: 'relative'}}>
                    {/* Left */}
                    
                    <Item1 className='m-2' top_position='0' justify='center' align='center'>
                        <ItemTextContainer justify='center' align='center'>
                            <P2 align='center'>নিবন্ধিত বিশেষজ্ঞ চিকিৎসক</P2>
                        </ItemTextContainer>
                    </Item1>
    
                    <CircleContainer justify='center' top_position='34.4%' left_position='41%'>
                        <Circle></Circle>
                    </CircleContainer>
                    
                    <Item2 className='mb-2 ml-2 mr-2' top_position='-20px' justify='center' align='center'>
                        <ItemTextContainer>
                        <ItemTextContainer justify='center' align='center'>
                            <P2 align='center'>ই-প্রেসক্রিপশন সেবা</P2>
                        </ItemTextContainer>
                        </ItemTextContainer>
                    </Item2>

                    <CircleContainer justify='center' top_position='58.8%' left_position='41%'>
                        <Circle></Circle>
                    </CircleContainer>

                    <Item3 className='ml-2 mr-2' top_position='-40px' justify='center' align='center'>    
                        <ItemTextContainer justify='center' align='center'>
                            <P2 align='center'>ডায়গনিস্টিক রিপোর্ট আপলোড</P2>
                        </ItemTextContainer>
                        
                    </Item3>
                </VBox>

                <VBox style={{width: '50%'}}>
                    {/* Center */}

                    <VBox className='p-5' style={{height: '100%'}}>
                        <CenterCircleContainer>
                            <CenterCircle align='center' justify='center'>
                                <CircleTextContainerOuter align='center'>
                                    <CircleTextContainerInner align='center'>
                                        <CenterCircleText className='bold' align='center'>কারণ আমাদের</CenterCircleText>
                                        <CenterCircleText className='bold' align='center'>আছে</CenterCircleText>
                                    </CircleTextContainerInner>
                                </CircleTextContainerOuter>
                            </CenterCircle>
                        </CenterCircleContainer>
                    </VBox>
                </VBox>

                <VBox justify='center' style={{width: '25%', position: 'relative'}}>
                    {/* Right */}

                    <Item1 className='m-2' top_position='0' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                        <ItemTextContainer justify='center' align='center'>
                            <P2 align='center' style={{transform: 'ScaleX(-1)'}}>ভিডিও এবং অডিও পরামর্শ</P2>
                        </ItemTextContainer>
                    </Item1>

                    <CircleContainer justify='center' top_position='34.4%' left_position='41%'>
                        <Circle></Circle>
                    </CircleContainer>

                    <Item2 className='mb-2 ml-2 mr-2' top_position='-20px' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                        <ItemTextContainer justify='center' align='center'>
                            <P2 align='center' style={{transform: 'ScaleX(-1)'}}>অনলাইন এবং অফলাইন</P2>
                            <P2 align='center' style={{transform: 'ScaleX(-1)'}}>পরামর্শ</P2>
                        </ItemTextContainer>
                    </Item2>

                    <CircleContainer justify='center' top_position='58.8%' left_position='41%'>
                        <Circle></Circle>
                    </CircleContainer>

                    <Item3 className='ml-2 mr-2' top_position='-40px' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                        <ItemTextContainer justify='center' align='center'>
                            <P2 className='p-3' align='center' style={{transform: 'ScaleX(-1)'}}>ক্লাউড-ভিত্তিক ডেটা এবং গোপনীয়তার নিরাপত্তা</P2>
                        </ItemTextContainer>
                    </Item3>
                </VBox>
            </HBox>
        </Container>
    );
}

export default WhyUs;