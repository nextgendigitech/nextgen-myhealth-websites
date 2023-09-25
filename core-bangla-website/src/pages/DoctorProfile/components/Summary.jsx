import styled from "styled-components";
import { TbCurrencyTaka } from "react-icons/tb";
import { getTime } from "../../../utils";


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
                        <VerticalLine className="mr-1" style={{ height: "60px" }}/>
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
                        <VerticalLine className="mr-1" style={{ height: "60px" }}/>
                    </HBox>
                    <HBox align="center">
                        {appointment_schedules ? (
                            <>
                                <VerticalLine className="mr-1" style={{ height: "90px" }}/>
                                <VBox>
                                    <P3>Consultation time:</P3>
                                    <HBox>
                                        <P3>Sunday: {appointment_schedules.sunday ? "Available" : "Not available"},&nbsp;</P3>
                                        <P3>Monday: {appointment_schedules.monday ? "Available" : "Not available"},&nbsp;</P3>
                                        
                                    </HBox>
                                    <HBox>
                                        <P3>Tuesday: {appointment_schedules.tuesday ? "Available" : "Not available"},&nbsp;</P3>
                                        <P3>Wednesday: {appointment_schedules.wednesday ? "Available" : "Not available"},&nbsp;</P3>
                                    </HBox>
                                    <HBox>
                                        <P3>Thursday: {appointment_schedules.thursday ? "Available" : "Not available"},&nbsp;</P3>
                                        <P3>Friday: {appointment_schedules.friday ? "Available" : "Not available"},&nbsp;</P3>
                                    </HBox>
                                    <HBox>
                                        <P3>Saturday: {appointment_schedules.saturday ? "Available" : "Not available"}</P3>
                                    </HBox>
                                    <HBox>
                                        <P3>Time: {getTime(appointment_schedules.startTime)}&nbsp;-&nbsp;{getTime(appointment_schedules.endTime)}</P3>
                                        {/* <P3>End Time: {getTime(appointment_schedules.endTime)}</P3> */}
                                    </HBox>
                                </VBox>
                            </>
                            ) : (
                            <>
                                <VerticalLine className="mr-1" style={{ height: "60px" }}/>
                                <VBox>
                                    <P3>Consultation time:</P3>
                                    <P3>No schedule available</P3>  
                                </VBox>     
                            </>
                        )}
                    </HBox>
                </VSummaryCard>
            </>
            :
            <>
                <HSummaryCard 
                    className="py-3 pl-6 my-3" 
                    align="center" 
                >
                    <VerticalLine style={{ height: "110px" }}/>
                    <VBox className="pl-3" style={{ width: "23%" }}>
                        <P3>
                            Consultation fee: <TbCurrencyTaka />
                            {consultation_fee}
                        </P3>
                        <P3>
                            Followup fee: <TbCurrencyTaka />
                            {followup_fee}
                        </P3>
                    </VBox>
                    <VerticalLine style={{ height: "110px" }}/>
                    <P3 className="pl-3 mr-3" style={{ width: "25%" }}>Spoken Language: English, Bangla</P3>
                    <VerticalLine style={{ height: "110px" }}/>
                    <VBox className="pl-3">
                        <P3>Consultation time:</P3>
                        {appointment_schedules ? (
                            <>
                                <HBox>
                                    <P3>Sunday: {appointment_schedules.sunday ? "Available" : "Not available"},&nbsp;</P3>
                                    <P3>Monday: {appointment_schedules.monday ? "Available" : "Not available"},&nbsp;</P3>
                                    <P3>Tuesday: {appointment_schedules.tuesday ? "Available" : "Not available"},&nbsp;</P3>
                                    
                                </HBox>
                                <HBox>
                                    <P3>Wednesday: {appointment_schedules.wednesday ? "Available" : "Not available"},&nbsp;</P3>
                                    <P3>Thursday: {appointment_schedules.thursday ? "Available" : "Not available"},&nbsp;</P3>
                                    <P3>Friday: {appointment_schedules.friday ? "Available" : "Not available"},&nbsp;</P3>
                                </HBox>
                                <HBox>
                                    <P3>Saturday: {appointment_schedules.saturday ? "Available" : "Not available"}</P3>
                                </HBox>
                                <HBox>
                                    <P3>Time: {getTime(appointment_schedules.startTime)}&nbsp;-&nbsp;{getTime(appointment_schedules.endTime)}</P3>
                                    {/* <P3>End Time: {getTime(appointment_schedules.endTime)}</P3> */}
                                </HBox>
                            </>
                            ) : (
                            <P3>No schedule available</P3>
                        )}
                    </VBox>
                </HSummaryCard>
            </>
            }
        </>
    );
};

export default Summary;
