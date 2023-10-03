import styled from "styled-components";
import { TbCurrencyTaka } from "react-icons/tb";
import { getTime } from "../../../utils";
import { connect } from 'react-redux';

import { HBox, VBox } from "../../../components/Containers";
import { P3 } from "../../../components/Typography";
import colors from "../../../config/colors";
import { doctorProfile } from "../../../data";

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

const Summary = ({ consultation_fee, followup_fee, appointment_schedules, isMobile, language }) => {
    return (
        <>
            {isMobile ?
            <>
                <VSummaryCard className="py-1 px-2">
                    <HBox>
                        <VerticalLine className="mr-1" style={{ height: "60px" }}/>
                        <VBox justify="center">
                            <P3>
                                {doctorProfile.summary.head1[language]}<TbCurrencyTaka />
                                {consultation_fee}
                            </P3>
                            <P3>
                            {doctorProfile.summary.head2[language]}<TbCurrencyTaka />
                                {followup_fee}
                            </P3>
                        </VBox>
                    </HBox>
                    <HBox align="center" justify="right">
                        <P3 justify="center">
                            {doctorProfile.summary.head3[language]}{doctorProfile.summary.pnt1[language]}, {doctorProfile.summary.pnt2[language]}    
                        </P3>
                        <VerticalLine className="mr-1" style={{ height: "60px"}}/>
                    </HBox>
                    <HBox align="center" style={{flexWrap: "nowrap"}}>
                        {appointment_schedules ? (
                            <>
                                <VerticalLine className="mr-1" style={{ height: "90px" }}/>
                                <VBox>
                                    <P3>{doctorProfile.summary.head4[language]}</P3>
                                    <P3>
                                        {appointment_schedules.sunday ? doctorProfile.week.day1[language]+", " : ""}
                                        {appointment_schedules.monday ? doctorProfile.week.day2[language]+", " : ""}
                                        {appointment_schedules.tuesday ? doctorProfile.week.day3[language]+", " : ""}
                                        {appointment_schedules.wednesday ? doctorProfile.week.day4[language]+", " : ""}
                                        {appointment_schedules.thursday ? doctorProfile.week.day5[language]+", " : ""}
                                        {appointment_schedules.friday ? doctorProfile.week.day6[language]+", " : ""} 
                                        {appointment_schedules.saturday ? doctorProfile.week.day7[language] : ""}
                                    </P3>
                                    <P3>{doctorProfile.week.time[language]}: {getTime(appointment_schedules.startTime)}&nbsp;-&nbsp;{getTime(appointment_schedules.endTime)}</P3>
                                </VBox>
                            </>
                            ) : (
                            <>
                                <VerticalLine className="mr-1" style={{ height: "60px" }}/>
                                <VBox>
                                    <P3>{doctorProfile.summary.head4[language]}</P3>
                                    <P3>{doctorProfile.summary.pera1[language]}</P3>  
                                </VBox>     
                            </>
                        )}
                    </HBox>
                </VSummaryCard>
            </>
            :
            <>
                <HSummaryCard 
                    className="py-3 pl-5 my-3" 
                    align="center" 
                >
                    <VerticalLine style={{ height: "120px" }}/>
                    <VBox className="pl-3" style={{ width: "23%" }}>
                        <P3>
                        {doctorProfile.summary.head1[language]}<TbCurrencyTaka />
                            {consultation_fee}
                        </P3>
                        <P3>
                        {doctorProfile.summary.head2[language]}<TbCurrencyTaka />
                            {followup_fee}
                        </P3>
                    </VBox>
                    <VerticalLine style={{ height: "120px" }}/>
                    <P3 className="pl-3 mr-3" style={{ width: "25%" }}>
                        {doctorProfile.summary.head3[language]}{doctorProfile.summary.pnt1[language]}, {doctorProfile.summary.pnt2[language]}
                    </P3>
                    <VerticalLine style={{ height: "120px" }}/>
                    <VBox className="pl-3" style={{ flexWrap: "nowrap", width: "45%" }}>
                        <P3>{doctorProfile.summary.head4[language]}</P3>
                        {appointment_schedules ? (
                            <>
                                {/* <HBox>
                                    <P3>{doctorProfile.week.day1[language]}: {appointment_schedules.sunday ? "Available" : "Not available"},&nbsp;</P3>
                                    <P3>{doctorProfile.week.day2[language]}: {appointment_schedules.monday ? "Available" : "Not available"},&nbsp;</P3>  
                                </HBox>
                                <HBox>
                                    <P3>{doctorProfile.week.day3[language]}: {appointment_schedules.tuesday ? "Available" : "Not available"},&nbsp;</P3>
                                    <P3>{doctorProfile.week.day4[language]}: {appointment_schedules.wednesday ? "Available" : "Not available"},&nbsp;</P3>   
                                </HBox>
                                <HBox>
                                    <P3>{doctorProfile.week.day5[language]}: {appointment_schedules.thursday ? "Available" : "Not available"},&nbsp;</P3>
                                    <P3>{doctorProfile.week.day6[language]}: {appointment_schedules.friday ? "Available" : "Not available"},&nbsp;</P3> 
                                </HBox>
                                <HBox>
                                    <P3>{doctorProfile.week.day7[language]}: {appointment_schedules.saturday ? "Available" : "Not available"}</P3>
                                </HBox>
                                <HBox>
                                    <P3>{doctorProfile.week.time[language]}: {getTime(appointment_schedules.startTime)}&nbsp;-&nbsp;{getTime(appointment_schedules.endTime)}</P3>
                                </HBox> */}
                                <P3>
                                    {appointment_schedules.sunday ? doctorProfile.week.day1[language]+", " : ""}
                                    {appointment_schedules.monday ? doctorProfile.week.day2[language]+", " : ""}
                                    {appointment_schedules.tuesday ? doctorProfile.week.day3[language]+", " : ""}
                                    {appointment_schedules.wednesday ? doctorProfile.week.day4[language]+", " : ""}
                                    {appointment_schedules.thursday ? doctorProfile.week.day5[language]+", " : ""}
                                    {appointment_schedules.friday ? doctorProfile.week.day6[language]+", " : ""} 
                                    {appointment_schedules.saturday ? doctorProfile.week.day7[language] : ""}
                                </P3>
                                <P3>{doctorProfile.week.time[language]}: {getTime(appointment_schedules.startTime)}&nbsp;-&nbsp;{getTime(appointment_schedules.endTime)}</P3>
                            </>
                            ) : (
                            <P3>{doctorProfile.summary.pera1[language]}</P3>
                        )}
                    </VBox>
                </HSummaryCard>
            </>
            }
        </>
    );
};

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(Summary);
