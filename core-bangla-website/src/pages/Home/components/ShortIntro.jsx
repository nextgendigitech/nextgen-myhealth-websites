import styled from 'styled-components';
import { FaArrowRightLong } from 'react-icons/fa6';
import { connect } from 'react-redux';

import { P1, P2, P3, P4, H1, H2, H3, H4, H6 } from '../../../components/Typography'
import { HBox, VBox } from '../../../components/Containers';
import image from '../../../assets/images/short_intro_image.png';
import colors from '../../../config/colors';
import responsive from '../../../config/responsive';
import { homeData } from '../../../data';

const Container = styled(HBox)`
    width: 100%;
`

const GreenBox = styled.div`
    background-color: ${colors.darkGreen};
    border-radius: 0px 10px 0px 10px;
    position: relative;

    @media only screen and (max-width: ${responsive.xs-1}px) { // xs
        height: 60px;
        width: 60px;
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {  // sm
        height: 70px;
        width: 70px;
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {  // md
        height: 80px;
        width: 80px;
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg-1}px) {  // lg
        height: 100px;
        width: 100px;
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        height: 100px;
        width: 100px;
    }
`

const Image = styled.img`
    width: 80%;
    height: auto;
    position: relative;
    left: 8px;

    @media only screen and (max-width: ${responsive.xs-1}px) { // xs
        top: calc(-60px + 8px);
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm-1}px) {  // sm
        top: calc(-70px + 8px);
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md-1}px) {  // md
        top: calc(-80px + 8px);
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg-1}px) {  // lg
        top: calc(-100px + 8px);
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        top: calc(-100px + 8px);
    }
`

// const RightArrowIcon = styled(FaArrowRightLong)`
//     font-size: 24px;
//     color: ${colors.darkGreen};
// `

const ShortIntro = ({ isMobile, language }) => {
    return (
        <Container align='space-around' style={{ paddingLeft: isMobile ? "40px" : "100px", paddingRight: isMobile ? "40px" : "100px", marginTop: isMobile ? '60px' : '100px' }} >
            <VBox style={{ width: '30%' }}>
                <GreenBox />
                <Image className='' src={image}/>
            </VBox>
            <VBox style={{ width: '70%' }}>
                <H3 className='bold' color='third'>{homeData.shortIntro.head1[language]}</H3>
                <H3 className='bold'>{homeData.shortIntro.head2[language]}</H3>
                <P2 className='mt-2'>{homeData.shortIntro.para1[language]}</P2>
            </VBox>
        </Container>
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(ShortIntro);