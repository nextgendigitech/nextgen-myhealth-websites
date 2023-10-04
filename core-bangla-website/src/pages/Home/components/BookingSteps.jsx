import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { HBox, VBox } from '../../../components/Containers';
import { H2, P1, P3 } from '../../../components/Typography';
import colors from '../../../config/colors';
import responsive from '../../../config/responsive';
import { homeData } from '../../../data';

const Container = styled(VBox)`
    padding-left: 8%;
    padding-right: 8%;
`

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

const BookingSteps = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const setResponsiveness = () => {
            let orientation = !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape';
        
            if (orientation === 'portrait' || window.innerWidth < responsive.mobileThresh) {
                setIsMobile(true);
            }
            else {
                setIsMobile(false);
            }
        }
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness());

        return () => window.removeEventListener('resize', () => setResponsiveness());
    }, []);

    return (
        <Container style={{ marginTop: isMobile ? '60px' : '100px', marginBottom: isMobile ? '-350px' : '0px' }}>
            <VBox align='center' className='mb-4'>
                <P1 className='bold' color='third'>{homeData.bookingsteps.head1['bang']}</P1>
                <P1 className='bold'>{homeData.bookingsteps.head2['bang']}</P1>
            </VBox>

            <HBox>
                <LeftStepBox align='center' justify='flex-end'>
                    <Circle align='center' justify='center' className='mb-4'>
                        <H2 className='bold' color='third'>{homeData.bookingsteps.num1['bang']}</H2>
                    </Circle>
                    <VBox style={{ width: '80%' }} className='mb-1'>
                        <P3 className='bold' color='third' align='left'>{homeData.bookingsteps.parahead1['bang']}</P3>
                        <P3 align='left'>{homeData.bookingsteps.para1['bang']}</P3>
                    </VBox>
                </LeftStepBox>
            </HBox>

            <HBox justify='flex-end' style={{position: 'relative', top: isMobile ? '-150px' : '-75px'}}>
                <RightStepBox align='center' justify='flex-end'>
                    <Circle align='center' justify='center' className='mb-4'>
                        <H2 className='bold' color='third'>{homeData.bookingsteps.num2['bang']}</H2>
                    </Circle>
                    <VBox style={{ width: '80%' }} className='mb-1'>
                        <P3 className='bold' color='third'>{homeData.bookingsteps.parahead2['bang']}</P3>
                        <P3>{homeData.bookingsteps.para2['bang']}</P3>
                    </VBox>
                </RightStepBox>
            </HBox>

            <HBox style={{position: 'relative', top: isMobile ? '-200px' : '-150px'}}>
                <LeftStepBox align='center' justify='flex-end'>
                    <Circle align='center' justify='center' className='mb-4'>
                        <H2 className='bold' color='third'>{homeData.bookingsteps.num3['bang']}</H2>
                    </Circle>
                    <VBox style={{ width: '80%' }} className='mb-1'>
                        <P3 className='bold' color='third' align='left'>{homeData.bookingsteps.parahead3['bang']}</P3>
                        <P3 align='left'>{homeData.bookingsteps.para3['bang']}</P3>
                    </VBox>
                </LeftStepBox>
            </HBox>

            <HBox justify='flex-end' style={{position: 'relative', top: isMobile ? '-360px' : '-240px'}}>
                <RightStepBox align='center' justify='flex-end'>
                    <Circle align='center' justify='center' className='mb-4'>
                        <H2 className='bold' color='third'>{homeData.bookingsteps.num4['bang']}</H2>
                    </Circle>
                    <VBox style={{ width: '80%' }} className='mb-1'>
                        <P3 className='bold' color='third'>{homeData.bookingsteps.parahead4['bang']}</P3>
                        <P3>{homeData.bookingsteps.para4['bang']}</P3>
                    </VBox>
                </RightStepBox>
            </HBox>
        </Container>
    );
}

export default BookingSteps;