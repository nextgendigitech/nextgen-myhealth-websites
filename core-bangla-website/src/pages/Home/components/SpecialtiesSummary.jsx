import styled from "styled-components";
import colors from "../../../config/colors";

import internal_medicine from "../../../assets/images/internal_medicine.png";
import cardiology from "../../../assets/images/cardiology.png";
import respiratory_medicine from "../../../assets/images/respiratory_medicine.png";
import neurology from "../../../assets/images/neurology.png";
import specialties_banner from "../../../assets/images/specialties_banner.png";
import right_arrow from "../../../assets/images/right_arrow.png";


import { Button } from '../../../components/Buttons';
import { HBox, VBox } from "../../../components/Containers";
import { P2, P3 } from "../../../components/Typography";

const Container = styled(HBox)`
    margin-top: 120px;
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
    width: 220px;
    height:90px;
    border:6px solid ${colors.darkGreen};
    border-radius: 0px 30px 0px 30px;
`

const SButton = styled(Button)`
   height: 50px;
   width: 220px;
   border-radius: 30px;
   font-size: 16px;
`

const RoundButton = styled(Button)`
    width: 40px;
    height: 56px;
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
    width: 80%;
    height: 80px;
    background: ${colors.veryLightBlue};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 20px;
`

const Icon = styled.img`
    height: 30px;
    width: 30px;
    /* object-fit: cover; */
`

const BannerImage = styled.img`
    height: auto;
    width: 25%;
`

const SpecialtiesCard = ({ icon, name, className }) => {
    return (
        <CardContainer className={className} align='center'>
            <HBox style={{ width: '56px' }}>
                <Icon src={icon} className="ml-2"/>
            </HBox>
            <HBox justify='center' align='center' style={{ width: 'calc(100% - 56px)' }}>
                <P2 className="bold mx-4">{name}</P2>
            </HBox>
        </CardContainer>
    );
}

const SpecialtiesSummary = () => {
    return (
        <Container justify='space-around'>
            <HBox justify='space-around' align='center'>
                <VBox className="" align='center' style={{ width: '25%' }}>
                    <TitleCard className="pt-1 mb-3" align='center'>
                        <P3>আমাদের কাছে যে সকল</P3>
                        <P2 color='third'>বিশেষজ্ঞ চিকিৎসক</P2>
                        <P3>আছেন</P3>
                    </TitleCard>
                    <SButton className='mb-5' color='third' elevated>সব বিশেষজ্ঞ ডাক্তার দেখুন</SButton> 
                </VBox> 
                <VBox align='center' className="" style={{ width: '25%' }}>
                    <SpecialtiesCard className="my-3" icon={internal_medicine} name="ইন্টারনাল মেডিসিন"/>
                    <SpecialtiesCard className="" icon={cardiology} name="হৃদরোগ"/>
                    <SpecialtiesCard className="my-3" icon={respiratory_medicine} name="ফুসফুস"/>
                    <SpecialtiesCard className="" icon={neurology} name="স্নায়ুরোগ"/>
                    <RoundButton className='my-3' elevated>
                        <Icon src={right_arrow} alt="Button Image" />
                    </RoundButton>
                </VBox>
                <BannerImage className='mt-3 mr-8' src={specialties_banner} />
            </HBox>
        </Container>
    );
}

export default SpecialtiesSummary;