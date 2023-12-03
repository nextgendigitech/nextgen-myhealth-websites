import styled from "styled-components";
import { connect } from 'react-redux';

import joinDoctorbanner from "../../../assets/images/join_doctor_banner.png";
import colors from "../../../config/colors";
import { HBox, VBox } from "../../../components/Containers";
import { H5, P3 } from "../../../components/Typography";
import { homeData, links } from '../../../data';

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
                <H5>{homeData.joinDoctor.head1[language]}</H5>
                <H5>{homeData.joinDoctor.head2[language]}</H5>
                <P3>
                    {homeData.joinDoctor.para1[language]}
                    <a className="mx-0_5" href={links.joindoctor.link1} target="_blank">
                        {homeData.joinDoctor.para2[language]}
                    </a>
                    {homeData.joinDoctor.para3[language]}
                </P3>
            </VBox>
            <Image src={joinDoctorbanner} style={{ width: isMobile ? "35%" : "25%" }}/>
            <BottomBorder />
        </Container>
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(JoinDoctor);
