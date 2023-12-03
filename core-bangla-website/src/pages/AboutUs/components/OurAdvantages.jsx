import styled from "styled-components";
import { connect } from 'react-redux';


import colors from "../../../config/colors";
import { HBox, VBox } from "../../../components/Containers";
import { H3, P2, P4 } from "../../../components/Typography";
import { aboutusData } from "../../../data";

const Container = styled(VBox)`
    width: 100%;
`

const VContainer = styled(VBox)`
    align-items: center;
    flex-wrap: nowrap;
`

const UpperHalfCircleCard = styled.div`
    width: 230px;
    height: 200px;
    background-color: ${colors.green};
    border-top-left-radius: 110px;
    border-top-right-radius: 105px;
`

const LowerHalfCircleCard = styled.div`
    width: 230px;
    height: 200px;
    background-color: ${colors.green};
    border-bottom-left-radius: 110px;
    border-bottom-right-radius: 105px;
`

const TopContentCard = ({ title, detail, isMobile }) => {
    return (
        <UpperHalfCircleCard className={isMobile ? "mb-2 mx-1" : "mb-6 mx-4"}>
            <VBox className='pt-5 px-3'>
                <P2 className="bold" color="white" align="center">{title}</P2>
                <P4 color="white" className="mt-2" align="center">{detail}</P4>
            </VBox>
        </UpperHalfCircleCard>

    );
}

const BottomContentCard = ({ title, detail, isMobile }) => {
    return (
        <LowerHalfCircleCard className={isMobile ? "mb-2" : "mx-4"}>
            <VBox className='pt-2 px-3'>
                <P2 className="bold mb-2" color="white" align="center">{title}</P2>
                <P4 color="white" align="center">{detail}</P4>
            </VBox>
        </LowerHalfCircleCard>

    );
}

const OurAdvantages = ({ isMobile, language }) => {
  return (
    <Container style={{paddingTop: isMobile ? '60px' : '100px',  marginBottom: isMobile ? '60px' : '100px',}}>
        <H3 align="center" className={isMobile ? "bold mb-2" : "bold mb-4"}>{aboutusData.ourAdvantages.head1[language]}</H3>
        <HBox justify="center" align="center"> 
            <VContainer>
                <TopContentCard
                    isMobile={isMobile}
                    title={aboutusData.ourAdvantages.pointhead1[language]}
                    detail={aboutusData.ourAdvantages.pointpera1[language]}
                />
                <BottomContentCard 
                    isMobile={isMobile}
                    title={aboutusData.ourAdvantages.pointhead4[language]}
                    detail={aboutusData.ourAdvantages.pointpera4[language]}
                />
            </VContainer>
            <VContainer>
                <TopContentCard 
                    isMobile={isMobile}
                    title={aboutusData.ourAdvantages.pointhead2[language]}
                    detail={aboutusData.ourAdvantages.pointpera2[language]}
                />
                <BottomContentCard 
                    isMobile={isMobile}
                    title={aboutusData.ourAdvantages.pointhead5[language]}
                    detail={aboutusData.ourAdvantages.pointpera5[language]}
                />
            </VContainer>
            <VContainer>
                <TopContentCard 
                    isMobile={isMobile}
                    title={aboutusData.ourAdvantages.pointhead3[language]}
                    detail={aboutusData.ourAdvantages.pointpera3[language]}
                />
                <BottomContentCard 
                    isMobile={isMobile}
                    title={aboutusData.ourAdvantages.pointhead6[language]}
                    detail={aboutusData.ourAdvantages.pointpera6[language]}
                />
            </VContainer>
        </HBox>
    </Container>
  );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(OurAdvantages);