import styled from "styled-components";

import { HBox } from "../../../components/Containers";
import { P2 } from "../../../components/Typography";
import colors from "../../../config/colors";


const Container = styled(HBox)`
    width: 280px;
    height: 80px;
    background: ${colors.veryLightBlue};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 20px;
`

const Image = styled.img`
    height: 50px;
`

const SpecialtyCard = ({image, text}) => {
    return (
        <Container className='m-2' align='center'>
            <Image className='ml-1' src={image} />
            <P2 className='ml-2' align='center'>{text}</P2>
        </Container>
    );
}

export default SpecialtyCard;