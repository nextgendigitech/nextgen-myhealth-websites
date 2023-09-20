import styled from 'styled-components';

import { VBox, HBox } from '../../../components/Containers';
import { H3 } from '../../../components/Typography';
import banner_image from '../../../assets/images/payment_banner_image.png';
import colors from '../../../config/colors';

const Container = styled(HBox)`
    padding-left: 8%;
    padding-right: 8%;
`

const Banner = ({ isMobile }) => {
    const BannerImage = (height, width) => (
        <img src={banner_image} style={{height: height, width: width}}/>
    )

    const BannerHtml = (height, width) => (
        <H3 className={isMobile ? 'bold mt-8' : 'bold'} align='center' style={{height: height, width: width}}>সহজ এবং সুরক্ষিত মাধ্যমে পেমেন্ট করুন  
        <span style={{color: `${colors.darkGreen}`}}> নেক্সটজেন</span> 
        <span style={{color: `${colors.red}`}}> মাই</span>
        <span style={{color: `${colors.blue}`}}>হেলথ</span>
        <span style={{color: `${colors.darkGreen}`}}> ভিসিপি</span> তে</H3>
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

export default Banner;