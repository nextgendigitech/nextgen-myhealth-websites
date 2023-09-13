import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { VBox, HBox } from '../../../components/Containers';
import { H2, H3, P2 } from '../../../components/Typography';
import colors from '../../../config/colors';
import responsive from '../../../config/responsive';

const Container = styled(VBox)`
    margin-top: 120px;
    padding-left: 8%;
    padding-right: 8%;
`

const Underline = styled.div`
    width: 35%;
    border-bottom: 5px solid ${colors.darkGreen};
    border-image: linear-gradient(to top left, ${colors.lightGreen}, ${colors.darkGreen});
    border-image-slice: 1;
`

const ItemContainerMobile = styled(VBox)`
    position: relative;
    height: 40%;
    width: 100%;
`

const Item = styled(VBox)`
    position: relative;
    height: ${props => props.height || '25%'};
    width: ${props => props.width || 'auto'};
    top: ${props => props.top_position};
    border-radius: 25% 25% 25% 25% / 50% 50% 50% 50%;
`

const Item1 = styled(Item)`
    &:before {
        content: '';
        height: 100%;
        width: 100%;
        border-radius: 25% 25% 25% 25% / 50% 50% 50% 50%;
        background-image: linear-gradient(to top, ${colors.lightGreen}, ${colors.darkGreen});
        clip-path: polygon(0 0, 100% 0, 100% 50%, 90% 50%, 90% 70%, 80% 70%, 80% 90%, 70% 90%, 50% 90%, 50% 100%, 0 100%);
        z-index: 0;
    }
`

const Item2 = styled(Item)`
    &:before {
        content: '';
        height: 100%;
        width: 100%;
        border-radius: 25% 25% 25% 25% / 50% 50% 50% 50%;
        background-image: linear-gradient(to left, ${colors.lightGreen}, ${colors.darkGreen});
        clip-path: polygon(50% 0, 50% 15%, 10% 15%, 10% 85%, 50% 85%, 50% 100%, 100% 100%, 100% 0);
        z-index: 0;
    }
`

const Item3 = styled(Item)`
    &:before {
        content: '';
        height: 100%;
        width: 100%;
        border-radius: 25% 25% 25% 25% / 50% 50% 50% 50%;
        background-image: linear-gradient(to top, ${colors.lightGreen}, ${colors.darkGreen});
        clip-path: polygon(0 0, 50% 0, 50% 15%, 80% 15%, 80% 30%, 95% 30%, 95% 50%, 100% 50%, 100% 100%, 0 100%);
        z-index: 0;
    }
`

const ItemTextContainer = styled(VBox)`
    position: absolute;
    height: 93%;
    width: 96%;
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

const CenterCircleContainerOuter = styled(VBox)`
    width: 50%;

    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {
        justify-content: center;
        align-items: center;
    }
`

const CenterCircleContainerInner = styled(VBox)`
    height: ${props => props.height || '90%'};
    width: ${props => props.width || 'auto'};
    margin-top: 5%;
    border-radius: 50%;
    background-image: linear-gradient(to top left, ${colors.grey}, ${colors.lightGrey});
    box-shadow: 0 0 30px 12px ${colors.grey};

    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {
        height: 350px;
        width: 350px;
    }
`

const CenterCircle = styled(VBox)`
    height: 100%;
    width: auto;
    border-radius: 50%;
    background-image: linear-gradient(to bottom left, ${colors.grey}, ${colors.lightGrey}); 

    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {
        height: 300px;
        width: 300px;
    }
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

const WhyUs = ({ isMobile }) => {
    const CenterHtml = () => (
        <VBox style={{width: '100%'}}>
            <VBox className='p-5' justify='center' align='center' style={{height: '100%'}}>
                <CenterCircleContainerInner className='p-3' height='300px' width='300px'>
                    <CenterCircle align='center' justify='center'>
                        <CircleTextContainerOuter align='center'>
                            <CircleTextContainerInner align='center'>
                                <CenterCircleText className='bold' align='center'>কারণ আমাদের</CenterCircleText>
                                <CenterCircleText className='bold' align='center'>আছে</CenterCircleText>
                            </CircleTextContainerInner>
                        </CircleTextContainerOuter>
                    </CenterCircle>
                </CenterCircleContainerInner>
            </VBox>
        </VBox>
    );

    return (
        <Container align='center'>
            <H3 className="bold">কেন আমাদের প্লাটফর্ম ব্যবহার করবেন?</H3>
            <Underline className="my-2" />

            {isMobile ?
            <VBox align='center' style={{height: 'fit-content', width: '100%'}}>
                {CenterHtml()}

                <ItemContainerMobile justify='center' align='center'>
                    {/* Middle */}
                
                    <Item1 className='m-2' height='150px' width='300px' top_position='0' justify='center' align='center'>
                        <ItemTextContainer justify='center' align='center'>
                            <P2 align='center'>নিবন্ধিত বিশেষজ্ঞ চিকিৎসক</P2>
                        </ItemTextContainer>
                    </Item1>

                    <CircleContainer justify='center' top_position='30.4%' left_position='41%'>
                        <Circle />
                    </CircleContainer>
                
                    <Item2 className='mb-2 ml-2 mr-2' height='150px' width='300px' top_position='-21px' justify='center' align='center'>
                        <ItemTextContainer justify='center' align='center'>
                            <P2 align='center'>ই-প্রেসক্রিপশন সেবা</P2>
                        </ItemTextContainer>
                    </Item2>

                    <CircleContainer justify='center' top_position='59.8%' left_position='41%'>
                        <Circle />
                    </CircleContainer>

                    <Item3 className='ml-2 mr-2' height='150px' width='300px' top_position='-42px' justify='center' align='center'>    
                        <ItemTextContainer justify='center' align='center'>
                            <P2 align='center'>ডায়গনিস্টিক রিপোর্ট আপলোড</P2>
                        </ItemTextContainer>
                     
                    </Item3>
                </ItemContainerMobile>

                <ItemContainerMobile justify='center' align='center'>
                    {/* Bottom */}

                    <Item1 className='m-2' height='150px' width='300px' top_position='0' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                        <ItemTextContainer justify='center' align='center'>
                            <P2 align='center' style={{transform: 'ScaleX(-1)'}}>ভিডিও এবং অডিও পরামর্শ</P2>
                        </ItemTextContainer>
                    </Item1>

                    <CircleContainer justify='center' top_position='30.4%' left_position='41%'>
                        <Circle />
                    </CircleContainer>

                    <Item2 className='mb-2 ml-2 mr-2' height='150px' width='300px' top_position='-21px' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                        <ItemTextContainer justify='center' align='center'>
                            <P2 align='center' style={{transform: 'ScaleX(-1)'}}>অনলাইন এবং অফলাইন</P2>
                            <P2 align='center' style={{transform: 'ScaleX(-1)'}}>পরামর্শ</P2>
                        </ItemTextContainer>
                    </Item2>

                    <CircleContainer justify='center' top_position='59.8%' left_position='41%'>
                        <Circle />
                    </CircleContainer>

                    <Item3 className='ml-2 mr-2' height='150px' width='300px' top_position='-42px' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                        <ItemTextContainer justify='center' align='center'>
                            <P2 className='p-3' align='center' style={{transform: 'ScaleX(-1)'}}>ক্লাউড-ভিত্তিক ডেটা এবং গোপনীয়তার নিরাপত্তা</P2>
                        </ItemTextContainer>
                    </Item3>
                </ItemContainerMobile>
            </VBox> 
            :
            <HBox justify='center' style={{height: '700px', width: '100%'}}>
                <VBox justify='center' style={{width: '25%', position: 'relative'}}>
                    {/* Left */}
                    
                    <Item1 className='m-2' top_position='0' justify='center' align='center'>
                        <ItemTextContainer justify='center' align='center'>
                            <P2 align='center'>নিবন্ধিত বিশেষজ্ঞ চিকিৎসক</P2>
                        </ItemTextContainer>
                    </Item1>
    
                    <CircleContainer justify='center' top_position='34.4%' left_position='41%'>
                        <Circle />
                    </CircleContainer>
                    
                    <Item2 className='mb-2 ml-2 mr-2' top_position='-21px' justify='center' align='center'>
                        <ItemTextContainer justify='center' align='center'>
                            <P2 align='center'>ই-প্রেসক্রিপশন সেবা</P2>
                        </ItemTextContainer>
                    </Item2>

                    <CircleContainer justify='center' top_position='58.8%' left_position='41%'>
                        <Circle />
                    </CircleContainer>

                    <Item3 className='ml-2 mr-2' top_position='-42px' justify='center' align='center'>    
                        <ItemTextContainer justify='center' align='center'>
                            <P2 align='center'>ডায়গনিস্টিক রিপোর্ট আপলোড</P2>
                        </ItemTextContainer>
                        
                    </Item3>
                </VBox>

                <CenterCircleContainerOuter className='p-5'>
                    {/* Center */}

                    <CenterCircleContainerInner className='p-3'>
                        <CenterCircle align='center' justify='center'>
                            <CircleTextContainerOuter align='center'>
                                <CircleTextContainerInner align='center'>
                                    <CenterCircleText className='bold' align='center'>কারণ আমাদের</CenterCircleText>
                                    <CenterCircleText className='bold' align='center'>আছে</CenterCircleText>
                                </CircleTextContainerInner>
                            </CircleTextContainerOuter>
                        </CenterCircle>
                    </CenterCircleContainerInner>
                </CenterCircleContainerOuter>

                <VBox justify='center' style={{width: '25%', position: 'relative'}}>
                    {/* Right */}

                    <Item1 className='m-2' top_position='0' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                        <ItemTextContainer justify='center' align='center'>
                            <P2 align='center' style={{transform: 'ScaleX(-1)'}}>ভিডিও এবং অডিও পরামর্শ</P2>
                        </ItemTextContainer>
                    </Item1>

                    <CircleContainer justify='center' top_position='34.4%' left_position='41%'>
                        <Circle />
                    </CircleContainer>

                    <Item2 className='mb-2 ml-2 mr-2' top_position='-21px' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                        <ItemTextContainer justify='center' align='center'>
                            <P2 align='center' style={{transform: 'ScaleX(-1)'}}>অনলাইন এবং অফলাইন</P2>
                            <P2 align='center' style={{transform: 'ScaleX(-1)'}}>পরামর্শ</P2>
                        </ItemTextContainer>
                    </Item2>

                    <CircleContainer justify='center' top_position='58.8%' left_position='41%'>
                        <Circle />
                    </CircleContainer>

                    <Item3 className='ml-2 mr-2' top_position='-42px' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                        <ItemTextContainer justify='center' align='center'>
                            <P2 className='p-3' align='center' style={{transform: 'ScaleX(-1)'}}>ক্লাউড-ভিত্তিক ডেটা এবং গোপনীয়তার নিরাপত্তা</P2>
                        </ItemTextContainer>
                    </Item3>
                </VBox>
            </HBox>}
        </Container>
    );
}

export default WhyUs;