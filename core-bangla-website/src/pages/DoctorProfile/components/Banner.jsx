import styled from "styled-components";
import { TbCurrencyTaka } from "react-icons/tb";

import { Button } from "../../../components/Buttons";
import { HBox, VBox } from "../../../components/Containers";
import { P1, P2, P3, P4 } from "../../../components/Typography";
import colors from "../../../config/colors";


const BannerCard = styled(VBox)`
    width: 100%;
    height: auto;
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
    border-radius: 100px;
    box-shadow: 0px 3px 5px ${colors.shadow};
`

const VerticalLine = styled.div`
    border-left: 1px solid ${colors.green};
    height: auto;
    margin-left: 8px;
`

const HorizontalLine = styled.div`
    border-bottom: 1px solid ${colors.green};
    width: 100%;
    margin-bottom: 8px;
`

const Chip = styled(HBox)`
    color: ${colors.white};
    width: fit-content;
    padding-left: 3px; 
    padding-right: 3px;
`

const Banner = ({ image, name, bmdc, doctor_type, qualification, specialty,
    experience, institution, designation, department, consultation_fee, is_online, isMobile }) => {
    return (          
        <BannerCard justify="center" align="center" style={{ padding: isMobile ? "16px" : "32px", margin: isMobile ? "16px 0px" : " 32px 0px" }}>
            <HBox style={{ width: "100%" }} justify="center">
                <VBox style={{ width: isMobile ? "fit-content" : "22%" }}>
                    <Image className="mb-3" style={{ width: isMobile ? "100px" : "160px" }} src={`${import.meta.env.VITE_SERVER_URL}${image}`} alt="image"/>
                    <P3 className="bold" style={{ marginTop: isMobile ? "-10px" : "" }}>বি.এম.ডি.সি: {doctor_type===("MBBS") ? "এ-" : ""}{bmdc}</P3>
                </VBox>
                {!isMobile && (
                    <VerticalLine />
                )}
                <VBox style={{ paddingLeft: isMobile ? "4px" : "24px", width: isMobile ? "fit-content" : "74%" }}>
                    <HBox style={{ justifyContent: isMobile ? "center" : "left", marginTop: isMobile ? "16px" : "" }}>
                        <P1 className="bold" color="third" style={{ marginBottom: isMobile ? "8px" : "16px", }}>{name}</P1>
                        <Chip className="ml-1" style={{ marginBottom: isMobile ? "10px" : "24px", }}>
                            <P4
                                className="bold px-1 py-0_5"
                                color="white"
                                justify="center"
                                align="center"
                                style={{
                                    backgroundColor: is_online ? colors.green : colors.lessDarkGrey,
                                    borderRadius: "20px",
                                }}
                            >
                                {is_online ? "Online" : "Offline"}
                            </P4>
                        </Chip>
                    </HBox>
                    <P3 style={{ marginTop: isMobile ? "0px" : "", marginBottom: isMobile ? "6px" : "16px" }}>{qualification}</P3>
                    <P3 style={{ marginBottom: isMobile ? "6px" : "16px" }}>{designation}, {department}, {institution}</P3>
                    <Chip style={{ marginBottom: isMobile ? "1px" : "16px" }}>
                        {typeof specialty === "object" ? specialty.map((spec, index) => (
                            <P4 className="bold px-1 mr-1 mb-1" color="white" justify="center" align="center" style={{ backgroundColor: colors.blue, borderRadius: "5px" }} key={index}>
                                {spec}
                            </P4>
                        ))
                        : 
                        typeof specialty === "string" && (
                            <P4 className="bold px-1 mr-1" color="white" justify="center" align="center" style={{ backgroundColor: colors.blue, borderRadius: "5px" }}>
                                {specialty}
                            </P4>
                        )}
                    </Chip>
                    <HBox style={{ marginBottom: isMobile ? "1px" : "16px" }} align="center">
                        <P3 className="">Consultation fee: </P3>
                        <P2 className="bold mt-0_5"><TbCurrencyTaka/></P2>
                        <P2 className="bold">{consultation_fee}</P2>
                    </HBox>
                    <HBox style={{ marginBottom: isMobile ? "24px" : "16px" }}>
                        <P3>Experience:</P3>
                        <P3 className="bold ml-1">{experience}</P3>
                    </HBox>
                    <Button
							color='third'
							size={isMobile ? 'xs' : 'sm'}
							style={{ align: "center", marginBottom: isMobile ? "0px" : "16px", marginLeft: isMobile ? "50%" : "70%", borderRadius: 25, height: isMobile ? 30 : 40, width: "fit-content" }}
							elevated
						>
							অ্যাপয়েন্টমেন্ট নিন
					</Button>
                </VBox>
            </HBox>
            {!isMobile && (
                <HorizontalLine />
            )}  
        </BannerCard>
    );
}

export default Banner;