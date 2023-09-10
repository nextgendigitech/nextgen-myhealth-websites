import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import colors from '../../../config/colors';
import bannerimage from '../../../assets/images/banner_image.png';

import { Button } from '../../../components/Buttons';
import { HBox, VBox } from '../../../components/Containers';
import { H1, H2, H3, H4, P1, P2, P3 } from '../../../components/Typography';


const Container = styled(HBox)`
	margin-left: 120px;
	margin-right: 120px;
`

const BannerImage = styled.img`
    height: 100%;
    width: 60%;
    width: auto;
`

const SButton = styled(Button)`
   height: 60px;
   border-radius: 30px;
`

const Banner = ({ isMobile }) => {
	return (
		<>
			<Container justify='space-between' align='center'>
				<VBox className='' style={{ width: '60%' }}>
				<H3 className='bold mb-2'>স্বাগতম আপনাকে</H3>
				<H3 className='bold' color='third'>নেক্সটজেন</H3>
				<VBox className='bold mb-4'> 
					<HBox>
						<H1 color='second' className='bold' style={{ lineHeight: 1.2 }}>মাই</H1>
						<H1 color='first' className='bold' style={{ lineHeight: 1.2 }}>হেলথ</H1>
					</HBox>
					<H3 color='third' style={{ lineHeight: 0.5 }}>ভার্চুয়াল কেয়ার প্লাটফর্মে</H3>
				</VBox>
				<P2>
					জরুরী সমস্যায় আক্রান্ত রোগীদের জন্য আমরা সর্বদা প্রস্তুত।
					আপনি যেকোন সময় আমাদের সাথে সহজেই যোগাযোগ করতে পারেন।
					আমরা সর্বোচ্চ মানের সেবা দেওয়ার চেষ্টা করি।
				</P2>
				<HBox className='bold px-0 mt-4'>
					<Link style={{textDecoration: 'none'}} to='/specialties'>
					    <SButton color='third' elevated>অ্যাপয়েন্টমেন্ট নিন</SButton>
					</Link> 
				</HBox>
				</VBox>
				<BannerImage src={bannerimage} />
			</Container>
		</>
	);
}

export default Banner;