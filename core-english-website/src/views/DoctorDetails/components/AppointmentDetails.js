import styled from "styled-components";
import moment from "moment";

import { HBox, VBox } from "../../../components/Containers";
import { H1, H2, H3, H4, H5, H6, P1, P2, P3, P4 } from "../../../components/Typography";
import COLORS from "../../../utility/styles";
import { getDate, getTime } from "../../../utility/utils";

const Container = styled(HBox)`
    background-color: ${COLORS.lightBlue};
    border: 1px solid ${COLORS.primaryColor};
    /* border-radius: 10px; */
    justify-content: space-between;
`

const Line = styled.div`
    width: 100%;
    border-bottom: 1px solid ${COLORS.grey};
`

const getDaysStr = (schedule) => {
    let days = [];
    if (schedule.saturday) days.push('Sat');
    if (schedule.sunday) days.push('Sun');
    if (schedule.monday) days.push('Mon');
    if (schedule.tuesday) days.push('Tue');
    if (schedule.wednesday) days.push('Wed');
    if (schedule.thursday) days.push('Thu');
    if (schedule.friday) days.push('Fri');

    return (
        <>
        {days.map((day, index) => (
            index === 0 ?
                <span>{day}</span>
                :
                <span>{',' + day}</span>
        ))}
        </>
    )
}

const AppointmentDetails = ({ isMobile, fee, followupFee, attended, appointmentSchedules, createdAt }) => {
    return (
        <Container className={isMobile ? "p-2 m-2" : "p-3 m-4"}>
            <VBox className="m-1" style={{ width: isMobile ? 'calc(50% - 16px)' : 'calc(25% - 16px)' }}>
                <P3 className='bold' color='second'>Consultation Fee</P3>
                <P1>BDT {fee}*</P1>
            </VBox>
            <VBox className="m-1" style={{ width: isMobile ? 'calc(50% - 16px)' : 'calc(25% - 16px)' }}>
                <P3 className='bold' color='second'>Follow Up Fee</P3>
                <P1>BDT {followupFee}*</P1>
            </VBox>
            <VBox className="m-1" style={{ width: isMobile ? 'calc(50% - 16px)' : 'calc(25% - 16px)' }}>
                <P3 className='bold' color='second'>Patient Attended</P3>
                <P1>{attended}</P1>
            </VBox>
            <VBox className="m-1" style={{ width: isMobile ? 'calc(50% - 16px)' : 'calc(25% - 16px)' }}>
                <P3 className='bold' color='second'>Joined NextGen MyHealth</P3>
                <P1>{getDate(createdAt, 'medium')}</P1>
            </VBox>
            <VBox className="m-1" style={{ width: '100%' }}>
                <P3 className='bold' color='second'>Consultation Time</P3>
                <VBox>
                    {appointmentSchedules?.map((appointmentSchedule, index) => (
                        <HBox align='center' className="mb-0_5">
                        <P1 className="mr-1">{getDaysStr(appointmentSchedule.schedule)}</P1>
                        <H5>({getTime(appointmentSchedule.schedule.startTime)} - {getTime(appointmentSchedule.schedule.endTime)})</H5>
                        </HBox>
                    ))}
                </VBox>
            </VBox>
            <P3 className="m-1 bold">*Including VAT and all charges</P3>
        </Container>
    )
}

export default AppointmentDetails;