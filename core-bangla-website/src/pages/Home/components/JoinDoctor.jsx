import styled from "styled-components";
import { connect } from 'react-redux';

import joindoctorbanner from "../../../assets/images/join_doctor_banner.png";
import colors from "../../../config/colors";
import { HBox, VBox } from "../../../components/Containers";
import { H5, P3 } from "../../../components/Typography";
import { homeData, Links } from '../../../data';

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

const JoinDoctor = ({ isMobile, language }) => {
    return (
        <Container justify="center" style={{marginTop: isMobile ? '60px' : '100px'}}>
            <TopBorder />
            <VBox justify="center" align="center" style={{ width: "50%" }}>
                <H5>{homeData.JoinDoctor.head1[language]}</H5>
                <H5>{homeData.JoinDoctor.head2[language]}</H5>
                <P3>
                    {homeData.JoinDoctor.para1[language]}
                    <a className="mx-0_5" href={Links.joindoctor.link1} target="_blank">
                        {homeData.JoinDoctor.para2[language]}
                    </a>
                    {homeData.JoinDoctor.para3[language]}
                </P3>
            </VBox>
            <Image src={joindoctorbanner} style={{ width: isMobile ? "35%" : "25%" }}/>
            <BottomBorder />
        </Container>
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(JoinDoctor);
