import styled from "styled-components";
import { Link } from "react-router-dom";

import patient_mobile_app from "../../../assets/images/patient_mobile_app.jpg";
import google_play_store from "../../../assets/images/google_play_store.png";
import qrcode_download_app from "../../../assets/images/qrcode_download_app.png";
import colors from "../../../config/colors";
import { HBox, VBox } from "../../../components/Containers";
import { H4, H5, P3 } from "../../../components/Typography";
import { homeData } from '../../../data';

const Container = styled(VBox)`
    width: 100%;
    background: linear-gradient(
        276.53deg,
        ${colors.lightBlue} 0.51%,
        ${colors.veryLightBlue} 50.78%,
        ${colors.lightBlue} 100%
    );
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0% 4%;
`

const Image = styled.img`
    /* height: 430px; */
    border: solid 3px ${colors.darkGrey};
    box-shadow: 0px 3px 5px ${colors.shadow};
`

const QRcode = ({ isMobile }) => {
    return (
        <Container className={isMobile ? "p-2" : "p-5"} justify="center" style={{marginTop: isMobile ? '60px' : '100px'}}>
            <H4 className="bold pb-2" align="center">{homeData.qrcode.head1['bang']}</H4>
            <HBox justify="center"> 
                <VBox style={{width: "40%"}} justify="center">  
                    <Link to={"https://play.google.com/store/apps/details?id=com.nextgen_digitech.myhealth_patients&pcampaignid=web_share"} 
                        style={{ textDecoration: 'none', marginLeft: isMobile ? "-8px" : "-4px" }} target='_blank'
                    >
                        <img src={google_play_store} style={{ width: "50%" }}/>
                    </Link>
                    <img src={qrcode_download_app} style={{ width: "40%" }} className={isMobile ? "" : "ml-3"} />   
                </VBox>
                <Image src={patient_mobile_app} justify="center" align="center" style={{ width: "13%", borderRadius: "10px" }}/> 
            </HBox>      
        </Container>
    );
}

export default QRcode;
