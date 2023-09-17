import styled from "styled-components";
import { TbCurrencyTaka } from "react-icons/tb";

import { HBox, VBox } from "../../../components/Containers";
import { P3 } from "../../../components/Typography";
import colors from "../../../config/colors";

const HSummaryCard = styled(HBox)`
    width: 100%;
    background: ${colors.veryLightBlue};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
`

const VSummaryCard = styled(VBox)`
    width: 100%;
    background: ${colors.veryLightBlue};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
`

const VerticalLine = styled.div`
    height: 100px;
    width: 5px;
    margin-left: 4px;
    background: linear-gradient(
        0deg,
        ${colors.darkGreen} 0.51%,
        ${colors.lightGreen} 50%,
        ${colors.darkGreen} 100%
    );
    border-radius: 5px;
`

const Summary = ({ consultation_fee, followup_fee, appointment_schedules, isMobile }) => {
    return (
        <>
            {isMobile ?
            <>
                <VSummaryCard className="py-1 px-2">
                    <HBox>
                        <VerticalLine style={{ height: "60px", marginRight: "8px" }}/>
                        <VBox justify="center">
                            <P3>
                                Consultation fee: <TbCurrencyTaka />
                                {consultation_fee}
                            </P3>
                            <P3>
                                Followup fee: <TbCurrencyTaka />
                                {followup_fee}
                            </P3>
                        </VBox>
                    </HBox>
                    <HBox align="center" justify="right">
                        <P3 justify="center">Spoken Language: English, Bangla</P3>
                        <VerticalLine style={{ height: "60px", marginLeft: "8px" }}/>
                    </HBox>
                    <HBox align="center">
                        <VerticalLine style={{ height: "60px", marginRight: "8px" }}/>
                        <P3>Consultation time: {appointment_schedules}</P3>
                    </HBox>
                </VSummaryCard>
                </>
            
            :
            <>
                <HSummaryCard 
                    className="py-3 pl-6 my-3" 
                    justify="space-around" 
                    align="center" 
                >
                    <VerticalLine />
                    <VBox style={{ width: "25%" }}>
                        <P3>
                            Consultation fee: <TbCurrencyTaka />
                            {consultation_fee}
                        </P3>
                        <P3>
                            Followup fee: <TbCurrencyTaka />
                            {followup_fee}
                        </P3>
                    </VBox>
                    <VerticalLine style={{ height: "100px" }}/>
                    <P3 style={{ width: "25%" }}>Spoken Language: English, Bangla</P3>
                    <VerticalLine style={{ height: "100px" }}/>
                    <P3 style={{ width: "40%" }}>
                        Consultation time: {appointment_schedules}
                    </P3>
                </HSummaryCard>
            </>
            }
        </>
    );
};

export default Summary;
