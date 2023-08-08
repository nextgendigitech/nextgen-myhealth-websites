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
`;

const BoxContainer = styled(HBox)`
    display: inline-block; 
    width: 100%;
    height: 420px;
    border: dashed 7px white;
    border-radius: 35px;
    border-image-slice: 8;
    background-image: linear-gradient(white, white), linear-gradient(20deg, ${colors.darkGreen}, ${colors.veryLightGreen}, 
        ${colors.darkGreen}, ${colors.veryLightGreen}, ${colors.darkGreen});
    background-origin: border-box;
    background-clip: content-box, border-box;
`;

const Border = styled.div`
    width: 220px;
    height:90px;
    border:6px solid ${colors.darkGreen};
    border-radius: 0px 30px 0px 30px;
`;

const SButton = styled(Button)`
   height: 50px;
   width: 220px;
   border-radius: 30px;
   font-size: 16px;
`;

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
`;

const CardContainer = styled(VBox)`
    width: 140%;
    height: 50px;
    background: ${colors.veryLightBlue};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 20px;
`;

const Image = styled.img`
    height: 20px;
    width: 20px;
    object-fit: cover;
`;

const BannerImage = styled.img`
    height: 440px;
    width: auto;
`;

const SpecialtiesCard = ({ icon, name, className }) => {
    return (
        <CardContainer className={className} justify="flex-start" >
            <Image src={icon} />
            <P3 className="bold">{name}</P3>
        </CardContainer>
    );
}

const SpecialtiesSummary = () => {
    return (
        <Container justify='space-around'>
            <BoxContainer justify='space-around'>
                <HBox justify='space-around' align='center'>
                    <VBox className="ml-8" align='center'>
                        <Border className="pt-1 mb-3">
                            <P3 style = {{ textAlign: 'center' }}>আমাদের কাছে যে সকল</P3>
                            <P2 style = {{ textAlign: 'center' }} color='third'>বিশেষজ্ঞ চিকিৎসক</P2>
                            <P3 style = {{ textAlign: 'center' }}>আছেন</P3>
                        </Border>
                        <SButton className='mb-5' color='third' elevated>সব বিশেষজ্ঞ ডাক্তার দেখুন</SButton> 
                    </VBox> 
                    <VBox className="mb-3">
                        <SpecialtiesCard className="mb-3 pt-2 pl-2" icon={internal_medicine} name="ইন্টারনাল মেডিসিন"/>
                        <SpecialtiesCard className="mb-3 pt-2 pl-2" icon={cardiology} name="হৃদরোগ"/>
                        <SpecialtiesCard className="mb-3 pt-2 pl-2" icon={respiratory_medicine} name="ফুসফুস"/>
                        <SpecialtiesCard className="mb-3 pt-2 pl-2" icon={neurology} name="স্নায়ুরোগ"/>
                        <RoundButton className='' style={{ marginLeft: 80 }} elevated>
                            <Image src={right_arrow} alt="Button Image" />
                        </RoundButton>
                    </VBox>
                    <BannerImage className='mt-1 mr-8' src={specialties_banner} />
                </HBox>
            </BoxContainer>
        </Container>
    );
}

export default SpecialtiesSummary;