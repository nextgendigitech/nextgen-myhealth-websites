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

const Affiliation = ({ isMobile, institution, designation, department }) => {
    return (
        <Container className={isMobile ? "p-2 mb-2" : "p-3 mb-2"} style={{ width: isMobile ? '100%' : 'calc(50% - 8px)' }}>
            <H5 className="">{institution}</H5>
            <HBox justify='space-between'>
                <VBox className="m-1" style={{ width: isMobile ? 'calc(50% - 16px)' : 'calc(50% - 16px)' }}>
                    <P3 className='bold' color='second'>Designation</P3>
                    <P1>{designation}</P1>
                </VBox>
                <VBox className="m-1" style={{ width: isMobile ? 'calc(50% - 16px)' : 'calc(50% - 16px)' }}>
                    <P3 className='bold' color='second'>Department</P3>
                    <P1>{department ? department : "-"}</P1>
                </VBox>
            </HBox>
        </Container>
    )
}

export default Affiliation;