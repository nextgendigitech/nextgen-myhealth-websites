import styled from "styled-components";

import colors from "../../../config/colors";
import { VBox, HBox } from "../../../components/Containers";
import { H2, P1, P2 } from "../../../components/Typography";
import { aboutusData } from "../../../data";

const Container = styled(VBox)`
    padding-left: 8%;
    padding-right: 8%;
    width: 100%;
`

const CardContainer = styled(HBox)`
    box-sizing: border-box;
    width: 50%;
    height: auto;
    background: linear-gradient(135deg, rgba(3, 94, 46, 0.37) 5.21%, rgba(3, 94, 46, 0.16) 17.81%, rgba(3, 94, 46, 0.08) 85.65%, rgba(3, 94, 46, 0.28) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
`

const VerticalBorder = styled.div`
    height: 110px;
    width: 8px;
    background: linear-gradient(
        180deg,
        ${colors.darkGreen} 40%,
        ${colors.veryLightGreen}
    );
`

const VideoContainer = styled.iframe`
    position: relative;
    height: auto;
    left: 32px;
    top: 32px;
    border: 5px solid ${colors.lightBlack};
    border-radius: 15px;
`

const WhoWeAre = ({ isMobile }) => {
    return (
        <Container style={{ marginTop: isMobile ? '60px' : '100px' }}>
            <HBox align="center" className="mb-4" >
                <VerticalBorder/>
                <VBox className="ml-2" style={{ width: "150px" }}>
                    <H2 color="third" className="bold">{aboutusData.WhoWeAre.head1['bang']}</H2>
                </VBox>
            </HBox>
            <P1 style={{ width: "100%" }}>{aboutusData.WhoWeAre.para1['bang']}</P1>
            <HBox justify="center" style={{ marginTop: isMobile ? '60px' : '100px' }}>
                <VideoContainer
                    style={{ width: isMobile ? "80%" : "40%", marginRight: isMobile ? "23%" : "" }}
                    src="https://www.youtube.com/embed/NdZ9vPHAy7w" 
                    title="Virtual Care Platform - NextGen MyHealth VCP" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen 
                />
                <CardContainer className={isMobile ? "p-3" : "py-6 pr-7 pl-7"} style={{ width: isMobile ? "100%" : "50%" }}>
                    <P2>{aboutusData.WhoWeAre.para1['bang']}</P2>
                </CardContainer>
            </HBox>
        </Container>
    );
}

export default WhoWeAre;