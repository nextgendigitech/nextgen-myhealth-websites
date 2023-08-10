import styled from "styled-components";

import { VBox, HBox } from "../../../components/Containers";
import { H3, P3 } from "../../../components/Typography";

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

const LeftShape = styled(VBox)`
    height: 150px;
    width: 300px;
    border: 4px solid black;
    border-radius: 25% 25% 25% 25% / 50% 50% 50% 50%;
    background-color: white;
    clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 50% 100%, 0 100%);
`

const WhyUs = () => {
    return (
        <Container align='center'>
            <H3 className="bold">কেন আমদের প্লাটফর্ম ব্যবহার করবেন?</H3>
            <Underline className="my-8" />
            <HBox justify='center'>
                <VBox>
                    {/* Left */}
                    <LeftShape align='center' justify='center'>
                        <P3>নিবন্ধিত বিশেষজ্ঞ চিকিৎসক</P3>
                    </LeftShape>
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