import { Box } from '@mui/material';
import styled from 'styled-components';

import { H2 } from '../../components/Typography';
import colors from '../../utility/styles';
import responsive from '../../utility/responsive';
import logo from '../../images/google-play-store-logo.svg';
import qr_code from '../../images/qr-code-download-app.png';

const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    background-color: ${colors.primaryLight};
    overflow: hidden;
    border: 3px solid orange;
`

const InstructionContainerOuter = styled(Box)`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    border: 3px solid red;
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
    border: 3px solid black;

    @media only screen and (max-width: ${responsive.mobileThresh}px) {
        width: 100%;
    }
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
                <Circle top='-30vw' left='-10vw' height='700px' width='700px' />
                <Circle top='100px' left='-70px' height='150px' width='150px' backgroundColor={colors.whiteColor} style={{boxShadow: `20px 20px 120px 1px ${colors.greyColor}`}} />
                <Circle top='350px' left='-100px' height='250px' width='250px' backgroundColor={colors.whiteColor} style={{border: `30px solid ${colors.primaryDark}`}} />
                <Circle top='-50px' left='700px' backgroundColor={colors.primaryDark} style={{boxShadow: `20px 20px 120px 1px ${colors.greyColor}`}} />
                <Circle top='-100px' left='1300px' height='600px' width='600px'/>
                <Circle top='-50px' left='1300px' height='100px' width='100px' backgroundColor={colors.whiteColor} style={{boxShadow: `20px 20px 120px 1px ${colors.greyColor}`}} />
                <Circle top='440px' left='1400px' backgroundColor={colors.primaryDark} />

                <InstructionContainerInner className='pt-5 pl-5 pr-5'>
                    <Box style={{backgroundColor: `${colors.primaryColor}`, width: '90%'}}>
                        <H2 align='center' color='white'>
                            DOWNLOAD PATIENT APP
                        </H2>
                    </Box>
                    <img className='mt-5' src={logo}/>
                    <img className='mt-5' src={qr_code} style={{height: '150px', width: '150px'}} />
                </InstructionContainerInner>
                <InstructionContainerInner className='pt-5 pl-5 pr-5'>
                    <Box style={{backgroundColor: `${colors.primaryColor}`, width: '90%'}}>
                        <H2 align='center' color='white'>
                            ARE YOU A DOCTOR?
                        </H2>
                    </Box>
                </InstructionContainerInner>
            </InstructionContainerOuter>
        </Container>
    );
}

export default Instruction;