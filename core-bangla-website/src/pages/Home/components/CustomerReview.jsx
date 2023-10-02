import styled from "styled-components";
import { connect } from 'react-redux';

import colors from "../../../config/colors";
import boy_avatar from "../../../assets/images/boy_avatar.png";
import girl_avatar from "../../../assets/images/girl_avatar.jpg";
import { HBox, VBox } from "../../../components/Containers";
import { H3, P2, P4 } from "../../../components/Typography";
import { homeData } from '../../../data';

const Container = styled(HBox)`
    margin-top: 30px;
    width: 100%;
    background: linear-gradient(
        276.53deg,
        ${colors.lightBlue} 0.51%,
        ${colors.veryLightBlue} 50.78%,
        ${colors.lightBlue} 100%
    );
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0% 4%;
`

const CardContainer = styled(VBox)`
    width: 25%;
    background: ${colors.white};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 0px 30px;
`

const Image = styled.img`
    border-radius: 50%;
    box-shadow: 0px 3px 5px ${colors.shadow};
`

const ReviewCard = ({ image, name, review, isMobile }) => {
    return (
        <CardContainer className={isMobile ? "p-2 my-1" : "p-3 my-2"} justify="flex-start" align="center" style={{ width: isMobile ? "100%" : "25%" }}>
            <Image className={isMobile ? "mb-1" : "mb-2"} src={image} style={{ width: isMobile ? "20%" : "30%" }}/>
            <P2 className={isMobile ? "bold mb-1" : "bold mb-2"}>{name}</P2>
            <P4>{review}</P4>
        </CardContainer>
    );
}

const CustomerReview = ({ isMobile, language }) => {
    return (
        <VBox style={{ width: "100%", marginTop: isMobile ? '60px' : '-140px' }}>
            <H3 align="center" className="bold">{homeData.CustomerReview.head1[language]}</H3>
            <Container style={{ padding: isMobile ? "20px" : "40px" }} justify="space-around" align="center">
                <ReviewCard
                    isMobile={isMobile}
                    image={boy_avatar}
                    name={homeData.CustomerReview.name1[language]}
                    review={homeData.CustomerReview.para1[language]}
                />
                <ReviewCard
                    isMobile={isMobile}
                    image={boy_avatar}
                    name={homeData.CustomerReview.name2[language]}
                    review={homeData.CustomerReview.para2[language]}
                />
                <ReviewCard
                    isMobile={isMobile}
                    image={girl_avatar}
                    name={homeData.CustomerReview.name3[language]}
                    review={homeData.CustomerReview.para3[language]}
                />
            </Container>
        </VBox>
    );
};

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(CustomerReview);
