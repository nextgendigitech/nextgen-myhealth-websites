import styled from "styled-components";
import colors from "../../../config/colors";

import { Button } from '../../../components/Buttons';
import { HBox, VBox } from "../../../components/Containers";
import { H3, P1, P2, P3, P4 } from "../../../components/Typography";
import { TbCurrencyTaka } from 'react-icons/tb';


const TitleCard = styled(VBox)`
    width: 100%;
    height: 70px;
    background: ${colors.veryLightGreen};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 30px;
`

const BannerCard = styled(HBox)`
    width: 80%;
    height: auto;
    margin-left: 120px;
    background: linear-gradient(
        0deg,
        ${colors.lightBlue} 0.51%,
        ${colors.veryLightBlue} 50.78%,
        ${colors.lightBlue} 100%
    );
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 30px;
`

const Image = styled.img`
    height: 190px;
    width: 180px;
    border-radius: 20px;
    box-shadow: 0px 3px 5px ${colors.shadow};
`

const VerticalLine = styled.div`
    border-left: 1px solid green;
    /* border-bottom: 1px solid green; */
    height: auto;
    margin-left: 8px;
`

const SButton = styled(Button)`
   height: 40px;
   border-radius: 30px;
`

const Banner = ({ name, bmdc, qualification, specialty,
    experience, affiliation, image, fee }) => {
    return (
        <VBox>
            <TitleCard className="mt-4" justify="center" align="center">
                <H3>ডাক্তার বর্ণনা</H3>
            </TitleCard>
            <BannerCard className="m-6 p-4">
                <VBox align='center' style={{ width: "22%" }}>
                    <Image className="mb-3" alt="image"/>
                    <P3 className="bold">বি.এম.ডি.সি&nbsp;</P3>
                    {/* <P4 className="bold">{qualification.includes("MBBS") ? "এ-" : ""}{bmdc}</P4> */}
                    {/* <P2 className="bold mt-2" color="first"><TbCurrencyTaka/>{fee}</P2> */}
                </VBox>
                <VerticalLine />
                <VBox className="pl-3" style={{ width: "68%" }}>
                    <P1 className="bold mb-1" color="third">Dr. Joyee{name}</P1>
                    <P4 className="bold mb-1">MBBS(CMH), MCPS(Thailand), FCPS(UK) {qualification}</P4>
                    <P4 className="bold mb-1">Vice Principal, Dept. of Neuro Surgery, DMCH{affiliation}</P4>
                    <P4 className="bold mb-1">Dermatology{specialty}</P4>
                    <P4 className="bold mb-1">Consultation fee: <P3><TbCurrencyTaka/> 900</P3></P4>
                    <P4 className="bold mb-4">Experience: 14+ years {experience}</P4>
                    <SButton style={{ float: 'right', fontSize: "16px", width: "190px" }} color='third' elevated>অ্যাপয়েন্টমেন্ট নিন</SButton>
                </VBox>
            </BannerCard>
        </VBox>
    );
}

export default Banner;