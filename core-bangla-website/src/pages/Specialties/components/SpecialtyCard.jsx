import styled from "styled-components";
import { Link } from "react-router-dom";

import { HBox } from "../../../components/Containers";
import { P2 } from "../../../components/Typography";
import colors from "../../../config/colors";

const Container = styled(HBox)`
    width: 280px;
    height: 80px;
    background: ${colors.veryLightBlue};
    box-shadow: 4px 4px 4px 0px ${colors.grey};
    border-radius: 0px 20px;
    
    &:hover {
        box-shadow: 4px 4px 15px 2px ${colors.grey};
    }
`

const Image = styled.img`
    height: 50px;
`

const SpecialtyCard = ({isMobile, image, specialtyBang, specialtyEng}) => {
    return (
        <Link
            className={`${isMobile ? 'm-0_5 clickable' : 'm-2 clickable'}`}
            to={`/specialty-doctors/${specialtyEng}`}
            style={{ textDecoration: 'none' }}
        >
            <Container align='center'>
                <Image className='ml-1' src={image} />
                <P2 className='ml-2' align='center'>{specialtyBang}</P2>
            </Container>
        </Link>
    );
}

export default SpecialtyCard;