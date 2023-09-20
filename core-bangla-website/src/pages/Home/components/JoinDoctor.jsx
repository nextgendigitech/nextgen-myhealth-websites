import styled from "styled-components";

import joindoctorbanner from "../../../assets/images/join_doctor_banner.png";
import colors from "../../../config/colors";
import { HBox, VBox } from "../../../components/Containers";
import { H5, P3 } from "../../../components/Typography";

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
        <Container justify="center" style={{marginTop: isMobile ? '60px' : '120px'}}>
            <TopBorder />
            <VBox justify="center" align="center" style={{ width: "50%" }}>
                <H5>আপনি কি একজন ডাক্তার এবং </H5>
                <H5>আমাদের সাথে যোগ দিতে চান?</H5>
                <P3 className="bold">
                    এই
                    <a className="mx-0_5" href="https://docs.google.com/forms/d/e/1FAIpQLSe2oTRWq02VzSy7S5HyZLXbUtGdY1uwZrnmZjM5bEXNPWZMZA/viewform?pli=1" target="_blank">
                        Google Form
                    </a>
                    পূরণ করুন
                </P3>
            </VBox>
            <Image src={joindoctorbanner} style={{ width: isMobile ? "35%" : "25%" }}/>
            <BottomBorder />
        </Container>
    );
}

export default JoinDoctor;
