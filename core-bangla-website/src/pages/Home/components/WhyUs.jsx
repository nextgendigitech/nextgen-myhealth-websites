import styled from 'styled-components';
import { connect } from 'react-redux';

import { VBox, HBox } from '../../../components/Containers';
import { H2, H3, P2 } from '../../../components/Typography';
import colors from '../../../config/colors';
import { homeData } from '../../../data';

const Container = styled(VBox)`

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
    background-color: ${colors.lightGrey};
`

const CircleContainer = styled(HBox)`
    background-color: ${colors.white};
    position: absolute;
    width: 20%;
    top: ${props => props.top_position};
    left: ${props => props.left_position};
    z-index: 1;
    background-color: ${colors.lightGrey};
`

const Circle = styled(HBox)`
    border: 4px solid ${colors.darkGreen};
    height: 20px;
    width: 20px;
    border-radius: 50%;
`

const CenterCircleContainerOuter = styled(VBox)`
    height: ${props => props.height};
    width: ${props => props.width};
`

const CenterCircleContainerInner = styled(VBox)`
    height: ${props => props.height};
    width: ${props => props.width};
    max-height: 600px;
    max-width: 600px;
    min-height: 250px;
    min-width: 250px;
    margin-top: 5%;
    border-radius: 50%;
    background-image: linear-gradient(to top left, ${colors.grey}, ${colors.lightGrey});
    box-shadow: 0 0 30px 12px ${colors.grey};
`

const CenterCircle = styled(VBox)`
    height: ${props => props.height};
    width: ${props => props.width};
    max-height: 570px;
    max-width: 570px;
    min-height: 220px;
    min-width: 220px;
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


const WhyUs = ({ isMobile, language }) => {
    const CenterHtml = (height, width, justify, align, CenterCircleContainerInner_height, CenterCircleContainerInner_width,
                        CenterCircle_height, CenterCircle_width, padding) => (
        <CenterCircleContainerOuter className={padding} justify={justify} align={align} height={height} width={width}>
            <CenterCircleContainerInner align='center' justify='center' height={CenterCircleContainerInner_height} width={CenterCircleContainerInner_width}>
                <CenterCircle align='center' justify='center' height={CenterCircle_height} width={CenterCircle_width}>
                    <CircleTextContainerOuter align='center'>
                        <CircleTextContainerInner align='center'>
                            <CenterCircleText className='bold' align='center'>{homeData.whyUs.head2[language]}</CenterCircleText>
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
                    <P2 align='center'>{homeData.whyUs.point1[language]}</P2>
                </ItemTextContainer>
            </Item1>

            <CircleContainer justify='center' top_position={CircleContainer_top1} left_position='41%'>
                <Circle />
            </CircleContainer>
                
            <Item2 className='mb-2 ml-2 mr-2' height={Item_height} width={Item_width} top_position='-21px' justify='center' align='center'>
                <ItemTextContainer justify='center' align='center'>
                    <P2 align='center'>{homeData.whyUs.point2[language]}</P2>
                </ItemTextContainer>
            </Item2>

            <CircleContainer justify='center' top_position={CircleContainer_top2} left_position='41%'>
                <Circle />
            </CircleContainer>

            <Item3 className='ml-2 mr-2' height={Item_height} width={Item_width} top_position='-42px' justify='center' align='center'>    
                <ItemTextContainer justify='center' align='center'>
                    <P2 align='center'>{homeData.whyUs.point3[language]}</P2>
                </ItemTextContainer>
                     
            </Item3>
        </VBox>
    );

    const RightHtml = (width, justify, align, Item_height, Item_width, CircleContainer_top1, CircleContainer_top2) => (
        <VBox justify={justify} align={align} style={{position: 'relative', width: width}}>
            <Item1 className='m-2' height={Item_height} width={Item_width} top_position='0' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                <ItemTextContainer justify='center' align='center'>
                    <P2 align='center' style={{transform: 'ScaleX(-1)'}}>{homeData.whyUs.point4[language]}</P2>
                </ItemTextContainer>
            </Item1>

            <CircleContainer justify='center' top_position={CircleContainer_top1} left_position='41%'>
                <Circle />
            </CircleContainer>

            <Item2 className='mb-2 ml-2 mr-2' height={Item_height} width={Item_width} top_position='-21px' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                <ItemTextContainer justify='center' align='center'>
                    <P2 align='center' style={{transform: 'ScaleX(-1)'}}>{homeData.whyUs.point5[language]}</P2>
                </ItemTextContainer>
            </Item2>

            <CircleContainer justify='center' top_position={CircleContainer_top2} left_position='41%'>
                <Circle />
            </CircleContainer>

            <Item3 className='ml-2 mr-2' height={Item_height} width={Item_width} top_position='-42px' justify='center' align='center' style={{transform: 'ScaleX(-1)'}}>
                <ItemTextContainer justify='center' align='center'>
                    <P2 className='p-3' align='center' style={{transform: 'ScaleX(-1)'}}>{homeData.whyUs.point6[language]}</P2>
                </ItemTextContainer>
            </Item3>
        </VBox>
    );

    return (
        <Container align='center' style={{marginTop: isMobile ? '60px' : '0px', paddingLeft: isMobile ? "40px" : "100px", paddingRight: isMobile ? "40px" : "100px"}}>
            <H3 className="bold">{homeData.whyUs.head1[language]}</H3>
            <Underline className="my-2" />

            {isMobile ?
                <VBox align='center' style={{height: 'fit-content', width: '100%'}}>
                    {CenterHtml('100%', 'initial', 'center', 'center', '36vw', '36vw', '32.7vw', '32.7vw', '')}
                    {LeftHtml('initial', 'center', 'center', '150px', '300px', '30.4%', '59.8%')}
                    {RightHtml('initial', 'center', 'center', '150px', '300px', '30.4%', '59.8%')}
                </VBox> 
                :
                <HBox justify='center' style={{height: '700px', width: '100%'}}>
                    {LeftHtml('25%', 'center', 'initial', '25%', 'auto', '34.4%', '58.8%')}
                    {CenterHtml('initial', '50%', 'center', 'center', '36vw', '36vw', '32.7vw', '32.7vw', 'pb-6')}
                    {RightHtml('25%', 'center', 'initial', '25%', 'auto', '34.4%', '58.8%')}
                </HBox>
            }
        </Container>
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(WhyUs);