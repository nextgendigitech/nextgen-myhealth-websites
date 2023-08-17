import colors from "../../../config/colors";
import styled from "styled-components";

import { Button } from '../../../components/Buttons';
import { HBox, VBox } from "../../../components/Containers";
import { P2, P4 } from "../../../components/Typography";

const HContainer = styled(HBox)`
    
`

const VContainer = styled(VBox)`
    text-overflow: clip;
    word-wrap: break-word;
    flex-wrap: wrap;
`

const CardContainer = styled(VBox)`
    width: 35%;
    height: auto;
    background: ${colors.veryLightBlue};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 30px;
    flex-wrap: nowrap;
    justify-content: space-between;
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

const DoctorCard = ({ id, name, bmdc, qualification, specialty,
                      experience, affiliation, image }) => {
    return (
        <CardContainer className="mt-8 p-3">
            <P2 className="bold mb-3">ডাঃ সাইখ ফেরদৌস: {name}</P2>
            <HContainer>
                <VBox style={{ width: "20%" }}>
                    <Image className="mb-3" src={image} />
                    <P4 className="bold">বি এম ডি সি</P4>
                    <P4 className="bold">এ-৬৮৩৩৮: {bmdc}</P4>
                </VBox>
                <VBox className='pl-3' style={{ width: "80%" }}>
                    <P4 className="bold mb-3">এম বি বি এস, এম আর সিপি (যুক্তরাজ্য), সিসিডি-বারডেম: {affiliation}</P4>
                    <P4 className="bold mb-3">ইন্টারনাল মেডিসিন: {specialty}</P4>
                    <P4 className="bold mb-3">বি আর বি হাসপাতাল লিমিটেড: {qualification}</P4>
                    <P4 className="bold mb-3">অভিজ্ঞতা: ৮+ বছর: {experience}</P4>
                    <SButton style={{ fontSize: "16px", width: "180px" }} color='third' elevated>অ্যাপয়েন্টমেন্ট নিন</SButton> 
                </VBox>
            </HContainer>
        </CardContainer>
    );
}

export default DoctorCard;