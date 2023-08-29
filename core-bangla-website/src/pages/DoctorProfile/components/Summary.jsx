import styled from "styled-components";
import colors from "../../../config/colors";

import { HBox, VBox } from "../../../components/Containers";
import { H3, P1, P2, P3, P4 } from "../../../components/Typography";
import { TbCurrencyTaka } from 'react-icons/tb';


const SummaryCard = styled(HBox)`
    width: 80%;
    height: auto;
    margin-left: 120px;
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


const Summary = ({ consultation_fee, followup_fee, appointment_schedules, language, consultationlanguage }) => {
    return (
        <SummaryCard className="m-2 p-3" justify="space-around" align="center">
            <VerticalLine />
            <VBox style={{ width: "25%" }}>
                <P3>Consultation fee: <TbCurrencyTaka/>{consultation_fee}</P3>
                <P3>Followup fee: <TbCurrencyTaka/>{followup_fee}</P3>
            </VBox>
            <VerticalLine />
            <P3 style={{ width: "25%" }}>Spoken Language: English, Bangla</P3>
            <VerticalLine />
            <P3 style={{ width: "40%" }}>Consultation time: {appointment_schedules}</P3>
        </SummaryCard>
    );
}

export default Summary;