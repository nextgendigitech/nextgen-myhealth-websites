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

const DashedBorder = styled.div`
    /* border: 2px dashed transparent;
    /* border-image: linear-gradient(45deg, ${colors.darkGreen}, ${colors.veryLightGreen}) 1;
    height: 9px;
    width: 100%;
    background: linear-gradient(
        276.53deg,
        ${colors.darkGreen} 90.81%,
        ${colors.veryLightGreen} 10.45%
    );
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25); */
    width:100%;
    height:420px;
    background-color: ${colors.white};
    border:6px solid;
    border-style: dashed;
    border-radius: 30px 30px 30px 30px;
`;

const Border = styled.div`
    width: 240px;
    height:100px;
    border:6px solid ${colors.darkGreen};
    border-radius: 0px 30px 0px 30px;
    justify-content: center;
    align-items: center;
`;

const SButton = styled(Button)`
   height: 50px;
   width: 240px;
   border-radius: 30px;
   font-size: 16px;
`;

const RoundButton = styled(Button)`
    width: 50px;
    height: 56px;
    background: ${colors.veryLightBlue};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 70px;
    cursor: pointer;

:hover {
    background-color: ${colors.lightBlue};
    color: white;
    box-shadow: 0px 0px 10px rgba(243, 239, 239, 0.05);
}
`;

const CardContainer = styled(VBox)`
    width: 230px;
    height: 50px;
    background: ${colors.veryLightBlue};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 0px 30px;
`;

const Image = styled.img`
    height: 28px;
    width: 28px;
`;

const BannerImage = styled.img`
    height: 450px;
    width: auto;
`;

const DoctorCard = ({ icon, name, className }) => {
    return (
        <CardContainer className={className}>
            <Image src={icon} />
            <P3 className="bold">{name}</P3>
        </CardContainer>
    );
}

const SpecialtiesSummary = () => {
    return (
        <Container justify='space-around'>
            <DashedBorder>
                <HBox justify='space-around' align='center'>
                    <VBox align='center'>
                        <Border>
                            <P3>আমাদের কাছে যে সকল</P3>
                            <P2>বিশেষজ্ঞ চিকিৎসক</P2>
                            <P3>আছেন</P3>
                        </Border>
                        <HBox className='mt-4'>
                            <SButton color='third' elevated>সব বিশেষজ্ঞ ডাক্তার দেখুন</SButton> 
                        </HBox>
                    </VBox> 
                    <VBox className="pt-2">
                        <DoctorCard className="mb-3 pt-2 pl-2" image={internal_medicine} name="ইন্টারনাল মেডিসিন"/>
                        <DoctorCard className="mb-3 pt-2 pl-2" image={cardiology} name="হৃদরোগ"/>
                        <DoctorCard className="mb-3 pt-2 pl-2" image={respiratory_medicine} name="ফুসফুস"/>
                        <DoctorCard className="mb-3 pt-2 pl-2" image={neurology} name="স্নায়ুরোগ"/>
                        <RoundButton className='' style={{ marginLeft: 80 }}>
                            <Image src={right_arrow} alt="Button Image" />
                        </RoundButton>
                    </VBox>
                    <BannerImage src={specialties_banner} />
                </HBox>
            </DashedBorder>
        </Container>
    );
}

export default SpecialtiesSummary;