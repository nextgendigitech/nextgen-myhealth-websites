import styled from "styled-components";

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
        <UpperHalfCircleCard className={isMobile ? "mb-2" : "mb-6 mx-4"}>
            <VBox className='pt-6 px-3'>
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

const OurAdvantages = ({ isMobile }) => {
  return (
    <Container style={{paddingTop: isMobile ? '60px' : '100px'}}>
        <H3 align="center" className={isMobile ? "bold mb-2" : "bold mb-4"}>{aboutusData.OurAdvantages.head1['bang']}</H3>
        <HBox justify="center" align="center"> 
            <VContainer>
                <TopContentCard
                    isMobile={isMobile}
                    title={aboutusData.OurAdvantages.pointhead1['bang']}
                    detail={aboutusData.OurAdvantages.pointpera1['bang']}
                />
                <BottomContentCard 
                    isMobile={isMobile}
                    title={aboutusData.OurAdvantages.pointhead4['bang']}
                    detail={aboutusData.OurAdvantages.pointpera4['bang']}
                />
            </VContainer>
            <VContainer>
                <TopContentCard 
                    isMobile={isMobile}
                    title={aboutusData.OurAdvantages.pointhead2['bang']}
                    detail={aboutusData.OurAdvantages.pointpera2['bang']}
                />
                <BottomContentCard 
                    isMobile={isMobile}
                    title={aboutusData.OurAdvantages.pointhead5['bang']}
                    detail={aboutusData.OurAdvantages.pointpera5['bang']}
                />
            </VContainer>
            <VContainer>
                <TopContentCard 
                    isMobile={isMobile}
                    title={aboutusData.OurAdvantages.pointhead3['bang']}
                    detail={aboutusData.OurAdvantages.pointpera3['bang']}
                />
                <BottomContentCard 
                    isMobile={isMobile}
                    title={aboutusData.OurAdvantages.pointhead6['bang']}
                    detail={aboutusData.OurAdvantages.pointpera6['bang']}
                />
            </VContainer>
        </HBox>
    </Container>
  );
}

export default OurAdvantages;