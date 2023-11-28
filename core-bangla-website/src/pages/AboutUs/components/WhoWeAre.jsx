import styled from "styled-components";
import { connect } from 'react-redux';

import colors from "../../../config/colors";
import { VBox, HBox } from "../../../components/Containers";
import { H2, P1, P2 } from "../../../components/Typography";
import { Links, aboutusData } from "../../../data";

const Container = styled(VBox)`
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

const WhoWeAre = ({ isMobile, language }) => {
    return (
        <Container style={{ marginTop: isMobile ? '30px' : '100px', 
                            paddingLeft: isMobile ? "40px" : "100px", 
                            paddingRight: isMobile ? "40px" : "100px" }}>
            <HBox align="center" className={isMobile ? "mb-3" : "mb-4"} >
                <VerticalBorder/>
                <VBox className="ml-2" style={{ width: "150px" }}>
                    <H2 color="third" className="bold">{aboutusData.WhoWeAre.head1[language]}</H2>
                </VBox>
            </HBox>
            <P2 style={{ width: "100%" }}>{aboutusData.WhoWeAre.para1[language]}</P2>
            <HBox justify="center" style={{ marginTop: isMobile ? '60px' : '100px' }}>
                <VideoContainer
                    style={{ width: isMobile ? "80%" : "40%", marginRight: isMobile ? "23%" : "" }}
                    src={Links.aboutus.link1}
                    title={aboutusData.WhoWeAre.title1[language]}
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen 
                />
                <CardContainer className={isMobile ? "mt-2 p-3" : "py-6 pr-7 pl-7"} style={{ width: isMobile ? "100%" : "50%" }}>
                    <P2>{aboutusData.WhoWeAre.para1[language]}</P2>
                </CardContainer>
            </HBox>
        </Container>
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(WhoWeAre);