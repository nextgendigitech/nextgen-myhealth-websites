import styled from 'styled-components';
import { connect } from 'react-redux';

import { HBox, VBox } from '../../../components/Containers';
import { H2, P1, P3, P2 } from '../../../components/Typography';
import colors from '../../../config/colors';
import { homeData } from '../../../data';


const LeftStepBox = styled(VBox)`
    position: relative;
    width: 50%;
    border-right: 4px solid ${colors.darkGreen};
    border-bottom: 4px solid ${colors.darkGreen};
`

const RightStepBox = styled(VBox)`
    width: 50%;
    position: relative;
    left: -4px;
    border-left: 4px solid ${colors.darkGreen};
    border-bottom: 4px solid ${colors.darkGreen};
`

const Circle = styled(VBox)`
    height: 50px;
    width: 50px;
    border: 3px solid ${colors.darkGreen};
    border-radius: 50%;
`

const BookingSteps = ({ isMobile, language }) => {
    return (
        <VBox style={{ marginTop: isMobile ? '60px' : '100px', paddingLeft: isMobile ? "40px" : "100px", paddingRight: isMobile ? "40px" : "100px" }}>
            <VBox align='center' className='mb-4'>
                <P1 className='bold' color='third'>{homeData.bookingsteps.head1[language]}</P1>
                <P1 className='bold'>{homeData.bookingsteps.head2[language]}</P1>
            </VBox>

            <HBox>
                <LeftStepBox align='center' justify='flex-end'>
                    <Circle align='center' justify='center' className='mb-4'>
                        <H2 className='bold' color='third'>{homeData.bookingsteps.num1[language]}</H2>
                    </Circle>
                    <VBox style={{ width: '80%' }} className='mb-1'>
                        <P3 className='bold' color='third' align='left'>{homeData.bookingsteps.parahead1[language]}</P3>
                        <P3 align='left'>{homeData.bookingsteps.para1[language]}</P3>
                    </VBox>
                </LeftStepBox>
            </HBox>

            <HBox justify='flex-end' style={{position: 'relative', top: `${isMobile ? '0px' : '-75px'}`}}>
                <RightStepBox align='center' justify='flex-end'>
                    <Circle align='center' justify='center' className='mb-4'>
                        <H2 className='bold' color='third'>{homeData.bookingsteps.num2[language]}</H2>
                    </Circle>
                    <VBox style={{ width: '80%' }} className='mb-1'>
                        <P3 className='bold' color='third'>{homeData.bookingsteps.parahead2[language]}</P3>
                        <P3>{homeData.bookingsteps.para2[language]}</P3>
                    </VBox>
                </RightStepBox>
            </HBox>

            <HBox style={{position: 'relative', top: `${isMobile ? '0' : '-150px'}`}}>
                <LeftStepBox align='center' justify='flex-end'>
                    <Circle align='center' justify='center' className='mb-4'>
                        <H2 className='bold' color='third'>{homeData.bookingsteps.num3[language]}</H2>
                    </Circle>
                    <VBox style={{ width: '80%' }} className='mb-1'>
                        <P3 className='bold' color='third' align='left'>{homeData.bookingsteps.parahead3[language]}</P3>
                        <P3 align='left'>{homeData.bookingsteps.para3[language]}</P3>
                    </VBox>
                </LeftStepBox>
            </HBox>

            <HBox justify='flex-end' style={{position: 'relative', top: `${isMobile ? '0' : '-240px'}`}}>
                <RightStepBox align='center' justify='flex-end'>
                    <Circle align='center' justify='center' className='mb-4'>
                        <H2 className='bold' color='third'>{homeData.bookingsteps.num4[language]}</H2>
                    </Circle>
                    <VBox style={{ width: '80%' }} className='mb-1'>
                        <P3 className='bold' color='third'>{homeData.bookingsteps.parahead4[language]}</P3>
                        <P3>{homeData.bookingsteps.para4[language]}</P3>
                    </VBox>
                </RightStepBox>
            </HBox>
        </VBox>
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(BookingSteps);