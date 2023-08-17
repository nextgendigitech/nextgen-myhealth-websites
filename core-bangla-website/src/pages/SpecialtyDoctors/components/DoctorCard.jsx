import colors from "../../../config/colors";
import styled from "styled-components";

import { Button } from '../../../components/Buttons';
import { HBox, VBox } from "../../../components/Containers";
import { P2, P4 } from "../../../components/Typography";
import { TbCurrencyTaka } from 'react-icons/tb';

const CardContainer = styled(HBox)`
    width: calc(50% - 32px);
    height: auto;
    background: ${colors.veryLightBlue};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 30px;
`

const Image = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 40px;
    box-shadow: 0px 3px 5px ${colors.shadow};
`

const SButton = styled(Button)`
   height: 40px;
   border-radius: 30px;
`

const DoctorCard = ({ name, bmdc, qualification, specialty,
                      experience, affiliation, image, fee }) => {
    return (
        <CardContainer className="m-2 p-3">
                <VBox align='center' style={{ width: "22%" }}>
                    <Image className="mb-3" src={image} />
                    <P4 className="bold">বি.এম.ডি.সি</P4>
                    <P4 className="bold">{bmdc}</P4>
                    <P2 className="bold mt-2" color="first"><TbCurrencyTaka/>{fee}</P2>
                </VBox>
                <VBox className='pl-5' style={{ width: "78%" }}>
                    <P2 className="bold mb-1">{name}</P2>
                    <P4 className="bold mb-1">{affiliation}</P4>
                    <P4 className="bold mb-1">{specialty}</P4>
                    <P4 className="bold mb-1">{qualification}</P4>
                    <P4 className="bold mb-4">অভিজ্ঞতা: {experience}</P4>
                    <SButton style={{ fontSize: "16px", width: "180px" }} color='third' elevated>অ্যাপয়েন্টমেন্ট নিন</SButton> 
                </VBox>
        </CardContainer>
    );
}

export default DoctorCard;