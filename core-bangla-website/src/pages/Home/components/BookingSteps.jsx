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

const bookingSteps = ({ isMobile, language }) => {
    return (
        <VBox style={{ marginTop: isMobile ? '60px' : '100px', marginBottom: isMobile ? '-350px' : '0px' }}>
            <VBox align='center' className='mb-4'>
                <P1 className='bold' color='third'>{homeData.bookingSteps.head1[language]}</P1>
                <P1 className='bold'>{homeData.bookingSteps.head2[language]}</P1>
            </VBox>

            <HBox>
                <LeftStepBox align='center' justify='flex-end'>
                    <Circle align='center' justify='center' className='mb-4'>
                        <H2 className='bold' color='third'>{homeData.bookingSteps.num1[language]}</H2>
                    </Circle>
                    <VBox style={{ width: '80%' }} className='mb-1'>
                        <P3 className='bold' color='third' align='left'>{homeData.bookingSteps.parahead1[language]}</P3>
                        <P3 align='left'>{homeData.bookingSteps.para1[language]}</P3>
                    </VBox>
                </LeftStepBox>
            </HBox>

            <HBox justify='flex-end' style={{position: 'relative', top: isMobile ? '-150px' : '-75px'}}>
                <RightStepBox align='center' justify='flex-end'>
                    <Circle align='center' justify='center' className='mb-4'>
                        <H2 className='bold' color='third'>{homeData.bookingSteps.num2[language]}</H2>
                    </Circle>
                    <VBox style={{ width: '80%' }} className='mb-1'>
                        <P3 className='bold' color='third'>{homeData.bookingSteps.parahead2[language]}</P3>
                        <P3>{homeData.bookingSteps.para2[language]}</P3>
                    </VBox>
                </RightStepBox>
            </HBox>

            <HBox style={{position: 'relative', top: isMobile ? '-200px' : '-150px'}}>
                <LeftStepBox align='center' justify='flex-end'>
                    <Circle align='center' justify='center' className='mb-4'>
                        <H2 className='bold' color='third'>{homeData.bookingSteps.num3[language]}</H2>
                    </Circle>
                    <VBox style={{ width: '80%' }} className='mb-1'>
                        <P3 className='bold' color='third' align='left'>{homeData.bookingSteps.parahead3[language]}</P3>
                        <P3 align='left'>{homeData.bookingSteps.para3[language]}</P3>
                    </VBox>
                </LeftStepBox>
            </HBox>

            <HBox justify='flex-end' style={{position: 'relative', top: isMobile ? '-360px' : '-240px'}}>
                <RightStepBox align='center' justify='flex-end'>
                    <Circle align='center' justify='center' className='mb-4'>
                        <H2 className='bold' color='third'>{homeData.bookingSteps.num4[language]}</H2>
                    </Circle>
                    <VBox style={{ width: '80%' }} className='mb-1'>
                        <P3 className='bold' color='third'>{homeData.bookingSteps.parahead4[language]}</P3>
                        <P3>{homeData.bookingSteps.para4[language]}</P3>
                    </VBox>
                </RightStepBox>
            </HBox>
        </VBox>
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(bookingSteps);