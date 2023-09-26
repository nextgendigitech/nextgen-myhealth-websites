import styled from "styled-components";

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
    width: 30%;
    border-radius: 50%;
    box-shadow: 0px 3px 5px ${colors.shadow};
`

const ReviewCard = ({ image, name, review, isMobile }) => {
    return (
        <CardContainer className="p-3 my-2" justify="flex-start" align="center" style={{ width: isMobile ? "100%" : "25%" }}>
            <Image className="mb-2" src={image} />
            <P2 className="bold mb-2">{name}</P2>
            <P4>{review}</P4>
        </CardContainer>
    );
}

const CustomerReview = ({ isMobile }) => {
    return (
        <VBox style={{ width: "100%", marginTop: isMobile ? '60px' : '-140px' }}>
            <H3 align="center" className="bold">{homeData.CustomerReview.head1['bang']}</H3>
            <Container style={{ padding: isMobile ? "30px" : "50px" }} justify="space-around" align="center">
                <ReviewCard
                    isMobile={isMobile}
                    image={boy_avatar}
                    name={homeData.CustomerReview.name1['bang']}
                    review={homeData.CustomerReview.para1['bang']}
                />
                <ReviewCard
                    isMobile={isMobile}
                    image={boy_avatar}
                    name={homeData.CustomerReview.name2['bang']}
                    review={homeData.CustomerReview.para2['bang']}
                />
                <ReviewCard
                    isMobile={isMobile}
                    image={girl_avatar}
                    name={homeData.CustomerReview.name3['bang']}
                    review={homeData.CustomerReview.para3['bang']}
                />
            </Container>
        </VBox>
    );
};

export default CustomerReview;
