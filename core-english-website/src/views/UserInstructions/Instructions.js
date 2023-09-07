import { Box } from '@mui/material';
import styled from 'styled-components';

import { H1, H2 } from '../../components/Typography';
import colors from '../../utility/styles';
import responsive from '../../utility/responsive';
import logo from '../../images/google-play-store-logo.svg';
import qr_code from '../../images/qr-code-download-app.png';

const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    background-color: ${colors.primaryLight};
    overflow: hidden;
`

const InstructionContainerOuter = styled(Box)`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`

const InstructionContainerInner = styled(Box)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    width: 500px;
    min-width: 250px;

    @media only screen and (max-width: ${responsive.mobileThresh}px) {
        width: 100%;
    }
`

const ManualContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 250px;
    width: 350px;
    background-color: ${colors.lightBlue};
`

const Circle = styled(Box)`
    position: absolute;
    top: ${props => props.top || '0'};
    left: ${props => props.left || '0'};
    height: ${props => props.height || '100px'};
    width: ${props => props.width || '100px'};
    border-radius: 50%;
    background-color: ${props => props.backgroundcolor || colors.lightBlue};
`

const Instruction = () => {
    return (
        <Container>
            <InstructionContainerOuter>
                <Circle top='-90%' left='-20%' height='700px' width='700px' />
                <Circle top='25%' left='-5%' height='150px' width='150px' backgroundColor={colors.whiteColor} style={{boxShadow: `5px 5px 30px 1px ${colors.greyColor}`}} />
                <Circle top='75%' left='-5%' height='250px' width='250px' backgroundColor={colors.whiteColor} style={{border: `30px solid ${colors.primaryDark}`}} />
                <Circle top='-10%' left='48%' backgroundColor={colors.primaryDark} style={{boxShadow: `5px 5px 30px 1px ${colors.greyColor}`}} />
                <Circle top='-10%' left='90%' height='600px' width='600px'/>
                <Circle top='-5%' left='90%' height='100px' width='100px' backgroundColor={colors.whiteColor} style={{boxShadow: `5px 5px 30px 1px ${colors.greyColor}`}} />
                <Circle top='88%' left='95%' backgroundColor={colors.primaryDark} />

                <InstructionContainerInner className='pt-5 pl-5 pr-5'>
                    <H2 className='bold' align='center' color='black'>
                        DOWNLOAD PATIENT APP
                    </H2>
                    <img className='mt-5' src={logo}/>
                    <img className='mt-5' src={qr_code} style={{height: '150px', width: '150px'}} />
                </InstructionContainerInner>
                <InstructionContainerInner className='pt-5 pl-5 pr-5'>
                    <H2 className='bold' align='center' color='black'>
                        ARE YOU A DOCTOR?
                    </H2>

                    <ManualContainer className='mt-8'>
                        <H1 className='bold' color='black'>
                            MANUAL
                        </H1>
                    </ManualContainer>
                </InstructionContainerInner>
            </InstructionContainerOuter>
        </Container>
    );
}

export default Instruction;