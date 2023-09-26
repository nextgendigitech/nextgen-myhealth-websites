import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import moment from 'moment';

import { HBox, VBox } from "../../../components/Containers";
import { H1, H2, H3, H4, H5, H6, P1, P2, P3, P4 } from "../../../components/Typography";
import COLORS from "../../../utility/styles";
import { getDate } from "../../../utility/utils";

const Container = styled.div`
    background-color: ${COLORS.primaryLight};
    display: flex;
    flex-direction: column;
    border: 1px solid ${COLORS.greyColor};
    /* border-radius: 10px; */
    justify-content: space-between;
`

const Chamber = ({ isMobile, address }) => {
    return (
        <Container className={isMobile ? "p-2 mb-2" : "p-3 mb-2"} style={{ width: isMobile ? '100%' : 'calc(50% - 8px)' }}>
            <H5 className="">{address}</H5>
        </Container>
    )
}

export default Chamber;