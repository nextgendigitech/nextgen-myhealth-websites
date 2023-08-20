import styled from 'styled-components';

import { VBox, HBox } from '../../../components/Containers';
import { H3 } from '../../../components/Typography';
import banner_image from '../../../assets/images/payment_banner_image.png';
import colors from '../../../config/colors';

const Container = styled(HBox)`
    margin-left: 120px;
    margin-right: 120px;
`

const Banner = () => {
    return (
        <Container>
            <HBox align='center' style={{width: '100%', height: '220px'}}>
                <img src={banner_image} style={{width: '30%', height: '100%'}}/>
                <H3 className='bold' align='center' style={{width: '50%', height: 'fit-content'}}>সহজ এবং সুরক্ষিত মাধ্যমে পেমেন্ট করুন  
                <span style={{color: `${colors.darkGreen}`}}> নেক্সটজেন</span> 
                <span style={{color: `${colors.red}`}}> মাই</span>
                <span style={{color: `${colors.blue}`}}>হেলথ</span>
                <span style={{color: `${colors.darkGreen}`}}> ভিসিপি</span> তে</H3>
            </HBox>
        </Container>
    );
}

export default Banner;