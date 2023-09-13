import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bannerimage from '../../../assets/images/banner_image.png';
import { Button } from '../../../components/Buttons';
import { HBox, VBox } from '../../../components/Containers';
import { H1, H2, H3, H4, H5, H6, P1, P2, P3, P4 } from '../../../components/Typography';


const Container = styled(HBox)`
    padding-left: 8%;
    padding-right: 8%;
    width: 100%;
	flex-wrap: nowrap;
`

const BannerImage = styled.img`
    height: 90%;
    width: auto;
`

const Banner = ({ isMobile }) => {
	return (
		<Container justify='space-between' align='center'>
			<VBox style={{ width: isMobile ? '65%' : '60%' }}>
				<H3 className='bold mb-2' style={{ lineHeight: isMobile ? 1 : 1.2, paddingTop: isMobile ? '8%' : '1%' }}>স্বাগতম আপনাকে</H3>
				<H3 className='bold' color='third'>নেক্সটজেন</H3>
				<VBox className='bold mb-4'> 
					<HBox>
						<H1 color='second' className='bold' style={{ lineHeight: isMobile ? 1 : 1.2 }}>মাই</H1>
						<H1 color='first' className='bold' style={{ lineHeight: isMobile ? 1 : 1.2 }}>হেলথ</H1>
					</HBox>
					<H4 color='third' style={{ lineHeight: isMobile ? 1 : 0.5 }}>ভার্চুয়াল কেয়ার প্লাটফর্মে</H4>
				</VBox>
				<P2>
					জরুরী সমস্যায় আক্রান্ত রোগীদের জন্য আমরা সর্বদা প্রস্তুত।
					আপনি যেকোন সময় আমাদের সাথে সহজেই যোগাযোগ করতে পারেন।
					আমরা সর্বোচ্চ মানের সেবা দেওয়ার চেষ্টা করি।
				</P2>
				<HBox className='bold px-0 mt-4'>
					<Link style={{textDecoration: 'none'}} to='/specialties'>
						<Button
							color='third'
							size={isMobile ? 'xs' : 'lg'}
							style={{ borderRadius: 25, height: isMobile ? 30 : 50 }}
							elevated
						>
							অ্যাপয়েন্টমেন্ট নিন
						</Button>
					</Link> 
				</HBox>
			</VBox>
			<BannerImage src={bannerimage} style={{ width: isMobile ? '35%' : 'auto' }}/>
		</Container>
	);
}

export default Banner;