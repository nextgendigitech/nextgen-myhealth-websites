import { Box } from '@mui/material';
import styled from 'styled-components';

import { H2 } from '../../components/Typography';
import colors from '../../utility/styles';
import responsive from '../../utility/responsive';
import logo from '../../images/google_play_store_logo.svg';

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
    height: 500px;
    width: 500px;
    min-width: 250px;
    border: 3px solid black;

    @media only screen and (max-width: ${responsive.mobileThresh}px) {
        width: 100%;
    }
`

// const PatientInstructionTitle = styled(P3)`
//     font-size: 50px;
//     color: ${colors.whiteColor};
//     text-align: center;
// `

const Circle = styled(Box)`
    /* height: ${props => props.height || 'auto'}; */
    /* width: ${props => props.width || '50px'}; */
    position: absolute;
    top: ${props => props.top || '0'};
    left: ${props => props.left || '0'};
    height: ${props => props.height || '50vw'};
    width: ${props => props.width || '50vw'};
    border-radius: 50%;
    background-color: ${props => props.backgroundcolor || colors.lightBlue};
`

const Instruction = () => {
    return (
        <Container>
            {/* <Circle top='-30vw' left='-10vw'/> */}
            
            <InstructionContainerOuter>
                <Circle top='-30vw' left='-10vw'/>
                <InstructionContainerInner className='pt-5 pl-5 pr-5'>
                    <Box style={{backgroundColor: `${colors.primaryColor}`}}>
                        <H2 align='center' color='white'>
                            DOWNLOAD PATIENT APP
                        </H2>
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