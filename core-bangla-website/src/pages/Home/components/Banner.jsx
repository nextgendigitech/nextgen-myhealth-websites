import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import bannerimage from '../../../assets/images/banner_image.png';
import { Button } from '../../../components/Buttons';
import { HBox, VBox } from '../../../components/Containers';
import { H1, H2, H3, H4, H5, H6, P1, P2, P3, P4 } from '../../../components/Typography';
import { homeData } from '../../../data';

const Container = styled(HBox)`
    width: 100%;
	flex-wrap: nowrap;
`

const BannerImage = styled.img`
    height: 90%;
    width: auto;
`

const Banner = ({ isMobile, language }) => {
	return (
		<Container justify='space-between' align='center' style={{ paddingLeft: isMobile ? "40px" : "100px", paddingRight: isMobile ? "40px" : "100px" }}>
			<VBox style={{ width: isMobile ? '65%' : '60%' }}>
				<H3 className='bold mb-2' style={{ lineHeight: isMobile ? 1 : 1.2, paddingTop: isMobile ? '8%' : '1%' }}>{homeData.banner.head1[language]}</H3>
				<H3 className='bold' color='third'>{homeData.banner.head2[language]}</H3>
				<VBox className='bold mb-4'> 
					<HBox>
						<H1 color='second' className='bold' style={{ lineHeight: isMobile ? 1 : 1.2 }}>{homeData.banner.head31[language]}</H1>
						<H1 color='first' className='bold' style={{ lineHeight: isMobile ? 1 : 1.2 }}>{homeData.banner.head32[language]}</H1>
					</HBox>
					<H4 color='third' style={{ lineHeight: isMobile ? 1 : 0.5 }}>{homeData.banner.head4[language]}</H4>
				</VBox>
				<P2>{homeData.banner.para1[language]}</P2>
				<HBox className='bold px-0 mt-4'>
					<Link style={{textDecoration: 'none'}} to='/specialties'>
						<Button
							color='third'
							size={isMobile ? 'xs' : 'lg'}
							style={{ borderRadius: 25, height: isMobile ? 30 : 50 }}
							elevated
						>
							{homeData.banner.btn1[language]}
						</Button>
					</Link> 
				</HBox>
			</VBox>
			<BannerImage src={bannerimage} style={{ width: isMobile ? '35%' : 'auto' }}/>
		</Container>
	);
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(Banner);