import styled from "styled-components";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

import { Button } from "../../../components/Buttons";
import { HBox, VBox } from "../../../components/Containers";
import { P1, P2, P3, P4 } from "../../../components/Typography";
import colors from "../../../config/colors";
import { doctorProfile } from "../../../data";
import { specialtyEtoB } from "../../../data";


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

const Banner = ({id, image, name, bmdc, doctor_type, qualification, specialty,
    experience, institution, designation, department, consultation_fee, is_online, isMobile }) => {
    return (          
        <BannerCard className={isMobile ? "py-2 px-1 my-2" : "p-4 my-4"} justify="center" align="center" >
            <HBox justify="center" style={{ width: "100%", 
                            flexDirection: isMobile ? "column" : "row", 
                            alignItems: isMobile ? "center" : "" }}>
                <VBox style={{ width: isMobile ? "fit-content" : "22%" }} align={isMobile ? "center" : ""} justify={isMobile ? "center" : ""}>
                    <Image className="mb-3" 
                            style={{ width: isMobile ? "100px" : "160px" }} 
                            src={`${import.meta.env.VITE_SERVER_URL}${image}`} 
                            alt="image"
                            />
                    <P3 className="bold" 
                        style={{ marginTop: isMobile ? "-10px" : "" }}>
                            {doctorProfile.banner.head1["bang"]} {doctor_type===("MBBS") ? doctorProfile.banner.head2["bang"] : ""}{bmdc}
                    </P3>
                </VBox>
                {!isMobile && (
                    <VerticalLine />
                )}
                <VBox className={isMobile ? "pl-0_5" : "pl-3"} style={{ alignItems: isMobile ? "center" : "", 
                                                                        width: isMobile ? "fit-content" : "74%" }}>
                    <HBox className={isMobile ? "mt-2" : ""} style={{ alignItems: "center", 
                                    flexDirection: isMobile ? "column" : "row", 
                                    justifyContent: isMobile ? "center" : "left" }}>
                        <P1 color="third" className={isMobile ? "bold mb-1" : "bold mb-2"}>{name}</P1>
                        <Chip className={isMobile ? "ml-1 mb-1" : "ml-1 mb-3"}>
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
                                {is_online ? doctorProfile.banner.head6["bang"] : doctorProfile.banner.head7["bang"]}
                            </P4>
                        </Chip>
                    </HBox>
                    <P3 className={isMobile ? "mb-1" : "mb-2"} style={{ textAlign: isMobile ? "center" : "" }}>{qualification}</P3>
                    <P3 className={isMobile ? "mb-1" : "mb-2"} style={{ textAlign: isMobile ? "center" : "" }}>
                        {designation ? designation+", " : ""}{department ? department+", " : ""}{institution}
                    </P3>
                    <Chip className={isMobile ? "mb-1" : "mb-2"} style={{ justifyContent: isMobile ? "center" : "", 
                                    alignContent: isMobile ? "center" : "" }}>
                        {typeof specialty === "object" ? specialty.map((spec, index) => (
                            <P4 className="bold px-1 mr-1 mb-1" 
                                color="white" 
                                style={{ backgroundColor: colors.blue, borderRadius: "5px" }} 
                                key={index}
                            >
                                {specialtyEtoB[spec]}
                            </P4>
                        ))
                        : 
                        typeof specialty === "string" && (
                            <P4 className="bold px-1 mr-1" 
                                color="white" 
                                justify="center" 
                                align="center" 
                                style={{ backgroundColor: colors.blue, borderRadius: "5px" }}
                            >
                                {specialtyEtoB[specialty]}
                            </P4>
                        )}
                    </Chip>
                    <HBox style={{ marginBottom: isMobile ? "1px" : "16px" }} align="center">
                        <P3 className="">{doctorProfile.banner.head3["bang"]}</P3>
                        <P2 className="bold mt-0_5"><TbCurrencyTaka/></P2>
                        <P2 className="bold">{consultation_fee}</P2>
                    </HBox>
                    <HBox className={isMobile ? "mb-3" : "mb-2"}>
                        {experience != null &&
                            <>
                                <P3>{doctorProfile.banner.head4["bang"]}</P3>
                                <P3 className="bold ml-1">{experience}</P3>
                            </>
                        }
                    </HBox>
                    <HBox justify={isMobile ? "center" : "flex-end"}>
                        <Link to={`https://patient.nextgenmyhealth.com/doctor/${id}`} style={{textDecoration: 'none'}} target='_blank'>
                            <Button
                                    className={isMobile ? "" : "mb-2"}
                                    color="third"
                                    size={isMobile ? "xs" : "sm"}
                                    style={{ alignContent: isMobile ? "center" : "", 
                                            borderRadius: 25, 
                                            height: isMobile ? 30 : 40, 
                                            width: "fit-content" }}
                                    elevated
                                >
                                    {doctorProfile.banner.head5["bang"]}
                            </Button>
                        </Link>
                    </HBox>   
                </VBox>
            </HBox>
            {!isMobile && (
                <HorizontalLine />
            )}  
        </BannerCard>
    );
}

export default Banner;