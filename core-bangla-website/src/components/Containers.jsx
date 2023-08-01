import styled from "styled-components";

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
