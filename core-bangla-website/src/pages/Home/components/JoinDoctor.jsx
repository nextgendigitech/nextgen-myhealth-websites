import styled from "styled-components";

import joindoctorbanner from "../../../assets/images/join_doctor_banner.png";
import colors from "../../../config/colors";
import { HBox, VBox } from "../../../components/Containers";
import { H5, P3 } from "../../../components/Typography";
import { homeData } from '../../../data';

const Container = styled(HBox)`
    width: 100%;
`

const TopBorder = styled.div`
    height: 8px;
    width: 100%;
    background: linear-gradient(
        90deg,
        ${colors.darkGreen},
        ${colors.veryLightGreen}
    );
`

const BottomBorder = styled.div`
    height: 8px;
    width: 100%;
    background: linear-gradient(
        90deg,
        ${colors.veryLightGreen},
        ${colors.darkGreen}
    );
`

const Image = styled.img`
    height: auto;
`

const JoinDoctor = ({ isMobile }) => {
    return (
        <Container justify="center" style={{marginTop: isMobile ? '60px' : '100px'}}>
            <TopBorder />
            <VBox justify="center" align="center" style={{ width: "50%" }}>
                <H5>{homeData.JoinDoctor.head1['bang']}</H5>
                <H5>{homeData.JoinDoctor.head2['bang']}</H5>
                <P3 className="bold">
                    {homeData.JoinDoctor.para1['bang']}
                    <a className="mx-0_5" href="https://docs.google.com/forms/d/e/1FAIpQLSe2oTRWq02VzSy7S5HyZLXbUtGdY1uwZrnmZjM5bEXNPWZMZA/viewform?pli=1" target="_blank">
                        {homeData.JoinDoctor.para2['bang']}
                    </a>
                    {homeData.JoinDoctor.para3['bang']}
                </P3>
            </VBox>
            <Image src={joindoctorbanner} style={{ width: isMobile ? "35%" : "25%" }}/>
            <BottomBorder />
        </Container>
    );
}

export default JoinDoctor;
