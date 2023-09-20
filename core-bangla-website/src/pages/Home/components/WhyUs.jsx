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
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {
        justify-content: center;
        align-items: center;
    }
`

const CenterCircleContainerInner = styled(VBox)`
    height: ${props => props.height};
    width: ${props => props.width};
    margin-top: 5%;
    border-radius: 50%;
    background-image: linear-gradient(to top left, ${colors.grey}, ${colors.lightGrey});
    box-shadow: 0 0 30px 12px ${colors.grey};

    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {
        height: 350px;
        width: 350px;
    }
    @media only screen and (max-width: ${responsive.xs-1}px) {
        height: 250px;
        width: 250px;
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
    @media only screen and (max-width: ${responsive.xs-1}px) {
        height: 200px;
        width: 200px;
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
    const CenterHtml = (height, width, justify, align, CenterCircleContainerInner_height, CenterCircleContainerInner_width) => (
        <CenterCircleContainerOuter className={isMobile ? '':'p-5'} justify={justify} align={align} style={{height: height, width: width}}>
            <CenterCircleContainerInner className='p-3' height={CenterCircleContainerInner_height} width={CenterCircleContainerInner_width}>
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
    );
    
    const LeftHtml = (width, justify, align, Item_height, Item_width, CircleContainer_top1, CircleContainer_top2) => (
        <VBox justify={justify} align={align} style={{position: 'relative', width: width}}>
            <Item1 className='m-2' height={Item_height} width={Item_width} top_position='0' justify='center' align='center'>
                <ItemTextContainer justify='center' align='center'>
                    <P2 align='center'>নিবন্ধিত বিশেষজ্ঞ চিকিৎসক</P2>
                </ItemTextContainer>
            </Item1>

            <CircleContainer justify='center' top_position={CircleContainer_top1} left_position='41%'>
                <Circle />
            </CircleContainer>
                
            <Item2 className='mb-2 ml-2 mr-2' height={Item_height} width={Item_width} top_position='-21px' justify='center' align='center'>
                <ItemTextContainer justify='center' align='center'>
                    <P2 align='center'>ই-প্রেসক্রিপশন সেবা</P2>
                </ItemTextContainer>
            </Item2>

            <CircleContainer justify='center' top_position={CircleContainer_top2} left_position='41%'>
                <Circle />
            </CircleContainer>

            <Item3 className='ml-2 mr-2' height={Item_height} width={Item_width} top_position='-42px' justify='center' align='center'>    
                <ItemTextContainer justify='center' align='center'>
                    <P2 align='center'>ডায়গনিস্টিক রিপোর্ট আপলোড</P2>
                </ItemTextContainer>
                     
            </Item3>
        </VBox>
    );

    const RightHtml = (width, justify, align, Item_height, Item_width, CircleContainer_top1, CircleContainer_top2) => (
        <VBox justify={justify} align={align} style={{position: 'relative', width: width}}>
            <Item1 className='m-2' height={Item_height} width={Item_width} top_position='0' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                <ItemTextContainer justify='center' align='center'>
                    <P2 align='center' style={{transform: 'ScaleX(-1)'}}>ভিডিও এবং অডিও পরামর্শ</P2>
                </ItemTextContainer>
            </Item1>

            <CircleContainer justify='center' top_position={CircleContainer_top1} left_position='41%'>
                <Circle />
            </CircleContainer>

            <Item2 className='mb-2 ml-2 mr-2' height={Item_height} width={Item_width} top_position='-21px' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                <ItemTextContainer justify='center' align='center'>
                    <P2 align='center' style={{transform: 'ScaleX(-1)'}}>অনলাইন এবং অফলাইন</P2>
                    <P2 align='center' style={{transform: 'ScaleX(-1)'}}>পরামর্শ</P2>
                </ItemTextContainer>
            </Item2>

            <CircleContainer justify='center' top_position={CircleContainer_top2} left_position='41%'>
                <Circle />
            </CircleContainer>

            <Item3 className='ml-2 mr-2' height={Item_height} width={Item_width} top_position='-42px' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                <ItemTextContainer justify='center' align='center'>
                    <P2 className='p-3' align='center' style={{transform: 'ScaleX(-1)'}}>ক্লাউড-ভিত্তিক ডেটা এবং গোপনীয়তার নিরাপত্তা</P2>
                </ItemTextContainer>
            </Item3>
        </VBox>
    );

    return (
        <Container align='center'>
            <H3 className="bold">কেন আমাদের প্লাটফর্ম ব্যবহার করবেন?</H3>
            <Underline className="my-2" />

            {isMobile ?
            <VBox align='center' style={{height: 'fit-content', width: '100%'}}>
                {CenterHtml('100%', 'initial', 'initial', 'center', '350px', '350px')}
                {LeftHtml('initial', 'center', 'center', '150px', '300px', '30.4%', '59.8%')}
                {RightHtml('initial', 'center', 'center', '150px', '300px', '30.4%', '59.8%')}
            </VBox> 
            :
            <HBox justify='center' style={{height: '700px', width: '100%'}}>
                {LeftHtml('25%', 'center', 'initial', '25%', 'auto', '34.4%', '58.8%')}
                {CenterHtml('initial', '50%', 'initial', 'initial', '90%', 'auto')}
                {RightHtml('25%', 'center', 'initial', '25%', 'auto', '34.4%', '58.8%')}
            </HBox>}
        </Container>
    );
}

export default WhyUs;