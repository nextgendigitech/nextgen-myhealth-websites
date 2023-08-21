import styled from "styled-components";

import COLORS from "../utility/styles";

export const HBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: ${props => props.justify || "left"};
    align-items: ${props => props.align || "left"};
`

export const VBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: ${props => props.justify || "left"};
    align-items: ${props => props.align || "left"};
`

export const LeftPanel = styled.div`
    width: 20%;
    height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    border-right: 1px solid ${COLORS.grey};
`

export const CenterPanel = styled.div`
    width: 60%;
    height: calc(100vh - 150px);
`

export const RightPanel = styled.div`
    width: 20%;
    height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    border-left: 1px solid ${COLORS.grey};
`