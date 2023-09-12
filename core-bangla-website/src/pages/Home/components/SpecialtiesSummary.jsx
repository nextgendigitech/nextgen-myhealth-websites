import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../../../config/colors";
import internal_medicine from "../../../assets/images/specialties/internal_medicine.png";
import cardiology from "../../../assets/images/specialties/cardiology.png";
import respiratory_medicine from "../../../assets/images/specialties/respiratory_medicine.png";
import neurology from "../../../assets/images/specialties/neurology.png";
import specialties_banner from "../../../assets/images/specialties_banner.png";
import right_arrow from "../../../assets/images/right_arrow.png";
import { Button } from '../../../components/Buttons';
import { HBox, VBox } from "../../../components/Containers";
import { P2, P3 } from "../../../components/Typography";

const Container = styled(HBox)`
    margin-top: 8%;
    display: inline-block; 
    width: 100%;
    border: dashed 7px white;
    border-radius: 35px;
    border-image-slice: 8;
    background-image: linear-gradient(white, white), linear-gradient(20deg, ${colors.darkGreen}, ${colors.veryLightGreen}, 
        ${colors.darkGreen}, ${colors.veryLightGreen}, ${colors.darkGreen});
    background-origin: border-box;
    background-clip: content-box, border-box;
`;

const TitleCard = styled(VBox)`
    width: 70%;
    border:6px solid ${colors.darkGreen};
    border-radius: 0px 30px 0px 30px;
`

const SButton = styled(Button)`
   width: 100%;
   border-radius: 30px;
`

const RoundButton = styled(Button)`
    width: 50px;
    background: ${colors.veryLightBlue};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 80px;
    cursor: pointer;

    &:hover {
        background-color: ${colors.lightBlue};
        color: ${colors.white};
        box-shadow: 0px 0px 10px rgba(243, 239, 239, 0.05);
    }
`

const CardContainer = styled(HBox)`
    width: 280px;
    padding: 6%;
    background: ${colors.veryLightBlue};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 20px;
`

const Icon = styled.img`
    width: 30px;
`

const BannerImage = styled.img`
    height: auto;
    width: 25%;
`

const SLink = styled(Link)`
    text-decoration: none;
`

const SpecialtiesCard = ({ icon, name, className, mobileview }) => {
    const mobile = mobileview;
    return (
        <CardContainer className={className} align='center' style={{ width: mobile ? '180px' : '280px' }}>
            <HBox style={{ width: '15%' }}>
                <Icon style={{ width: mobile ? '22px' : '30px' }} src={icon} className="ml-2"/>
            </HBox>
            <HBox justify='center' align='center' style={{ width: 'clac(100% - 15%)'}}>
                <P2 className="bold" style={{ marginLeft: mobile ? '20px' : '30px' }}>{name}</P2>
            </HBox>
        </CardContainer>
    );
}

const SpecialtiesSummary = ({ isMobile }) => {
    return (
        <Container justify='space-around'>
            <HBox justify='space-around' align='center'>
                <VBox className="" align='center' style={{ width: isMobile ? '35%' : '25%' }}>
                    <TitleCard className="py-1 mb-3" justify="center" align='center'>
                        <P3>আমাদের কাছে যে সকল</P3>
                        <P2 color='third'>বিশেষজ্ঞ চিকিৎসক</P2>
                        <P3>আছেন</P3>
                    </TitleCard>
                    <SLink to='/specialties'>
                        <SButton className='mb-5' color='third' style={{ fontSize: isMobile ? "12px" : "16px" }} elevated>সব বিশেষজ্ঞ ডাক্তার দেখুন</SButton> 
                    </SLink>
                </VBox> 
                <VBox align='center' className="" style={{ width: isMobile ? '60%' : '25%' }}>
                    <SLink to='/specialty-doctors/Internal Medicine'>
                        <SpecialtiesCard mobileview={isMobile} className="my-3" icon={internal_medicine} name="ইন্টারনাল মেডিসিন"/>
                    </SLink>
                    <SLink to='/specialty-doctors/Cardiology'>
                        <SpecialtiesCard mobileview={isMobile} className="" icon={cardiology} name="হৃদরোগ"/>
                    </SLink>
                    <SLink to='/specialty-doctors/Respiratory Medicine'>
                        <SpecialtiesCard mobileview={isMobile} className="my-3" icon={respiratory_medicine} name="ফুসফুস"/>
                    </SLink>
                    <SLink to='/specialty-doctors/Neurology'>
                        <SpecialtiesCard mobileview={isMobile} className="" icon={neurology} name="স্নায়ুরোগ"/>
                    </SLink>
                    <SLink to='/specialties'>
                        <RoundButton className='my-3' style={{ height: isMobile ? '40px' : '50px' }} elevated>
                            <Icon src={right_arrow} alt="Button Image" style={{ width: isMobile ? "15px" : "20px" }}/>
                        </RoundButton>
                    </SLink>
                </VBox>
                {!isMobile && (
                    <BannerImage className='mt-3 mr-8' src={specialties_banner} />
                )}
                
            </HBox>
        </Container>
    );
}

export default SpecialtiesSummary;