import { Box, Typography } from '@mui/material';
// import { styled } from '@mui/system';
import styled from 'styled-components';
import colors from '../../utility/styles';
import responsive from '../../utility/responsive';
import logo from '../../images/google_play_store_logo.svg';

const Container = styled(Box)`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 80vh;
    background-color: ${colors.primaryLight};
    overflow: hidden;
`

const InstructionContainerOuter = styled(Box)`
    position: absolute;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    border: 3px solid red;
    flex-wrap: wrap;
    overflow-y: scroll;
`

const InstructionContainerInner = styled(Box)`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 500px;
    min-width: 250px;
    border: 3px solid black;
    flex-shrink: 0;
    /* padding-top: 5%;
    padding-left: 4%;
    padding-right: 4%; */

    @media only screen and (max-width: ${responsive.mobileThresh}px) {
        width: 100%;
    }
`

const PatientInstructionTitle = styled(Box)`
    padding-top: 5%;
    padding-left: 5%;
    font-size: 30px;
`

const Circle = styled(Box)`
    /* height: ${props => props.height || 'auto'}; */
    /* width: ${props => props.width || '50px'}; */
    position: relative;
    top: ${props => props.top || '0'};
    left: ${props => props.left || '0'};
    height: ${props => props.height || '50vw'};
    width: ${props => props.width || '50vw'};
    border-radius: 50%;
    background-color: ${props => props.backgroundcolor || colors.lightBlue};
    /* border: 3px solid black; */
`

const Instruction = () => {
    return (
        <Container>
            <Circle top='-30vw' left='-10vw'/>
            {/* <Typography style={{fontSize: '50px'}}>Hello</Typography> */}
            <InstructionContainerOuter>
                <InstructionContainerInner className='pt-5 pl-5 pr-5'>
                    <Box style={{backgroundColor: `${colors.primaryColor}`}}>
                        <Typography style={{fontSize: '30px', color: `${colors.whiteColor}`}}>
                            DOWNLOAD PATIENT APP
                        </Typography>
                    </Box>
                    <img className='mt-5' src={logo}/>
                </InstructionContainerInner>
                <InstructionContainerInner>
                    
                </InstructionContainerInner>
            </InstructionContainerOuter>
        </Container>
    );
}

export default Instruction;