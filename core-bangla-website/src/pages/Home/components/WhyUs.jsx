import styled from "styled-components";

import { VBox, HBox } from "../../../components/Containers";
import { H3 } from "../../../components/Typography";

const Container = styled(VBox)`
    margin-top: 120px;
    padding-left: 120px;
    padding-right: 120px;
`

const Underline = styled.div`
    width: 35%;
    border-bottom: 1px solid black;
    /* Write your CSS */
`

const WhyUs = () => {
    return (
        <Container align='center'>
            <H3 className="bold">কেন আমদের প্লাটফর্ম ব্যবহার করবেন?</H3>
            <Underline className="my-8" />
            <HBox justify='center'>
                <VBox>
                    {/* Left */}
                </VBox>
                <VBox >
                    {/* Center */}
                </VBox>
                <VBox>
                    {/* Right */}
                </VBox>
            </HBox>
        </Container>
    );
}

export default WhyUs;