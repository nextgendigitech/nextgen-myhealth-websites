import styled from "styled-components";

import { HBox } from "../../../components/Containers";
import colors from "../../../config/colors";

const Container = styled(HBox)`
    width: 250px;
    height: 80px;
    background: ${colors.veryLightBlue};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 20px;
`

const SpecialtyCard = () => {
    return (
        <Container>

        </Container>
    );
}

export default SpecialtyCard;