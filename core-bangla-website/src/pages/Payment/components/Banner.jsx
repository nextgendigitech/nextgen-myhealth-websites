import styled from 'styled-components';
import { connect } from 'react-redux';

import { VBox, HBox } from '../../../components/Containers';
import { H3 } from '../../../components/Typography';
import banner_image from '../../../assets/images/payment_banner_image.png';
import colors from '../../../config/colors';
import { payment } from '../../../data';

const Container = styled(HBox)`
    padding-left: 8%;
    padding-right: 8%;
`

const Banner = ({ isMobile, language }) => {
    const BannerImage = (height, width) => (
        <img src={banner_image} style={{height: height, width: width}}/>
    )

    const BannerHtml = (height, width) => (
        <H3 className={isMobile ? 'bold mt-8' : 'bold'} align='center' style={{height: height, width: width}}>
            {payment.banner.head1[language]}
            <span style={{color: `${colors.darkGreen}`}}> {payment.banner.para11[language]}</span> 
            <span style={{color: `${colors.red}`}}> {payment.banner.para12[language]}</span>
            <span style={{color: `${colors.blue}`}}>{payment.banner.para13[language]}</span>
            <span style={{color: `${colors.darkGreen}`}}> {payment.banner.para14[language]}</span> 
            {payment.banner.para15[language]}
        </H3>
    )

    return (
        <Container>
            {isMobile ?
                <VBox align='center' style={{height: '50vh', width: '100%'}}>
                    {BannerImage('30%', '90%')}
                    {BannerHtml('30%', '100%')}
                </VBox>
                :
                <HBox justify='center' align='center' style={{height: '50vh', width: '90%'}}>
                    {BannerImage('50%', '30%')}
                    {BannerHtml('fit-content', '50%')}
                </HBox>
            }
        </Container>
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(Banner);