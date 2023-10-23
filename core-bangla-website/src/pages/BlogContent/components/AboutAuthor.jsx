import styled from "styled-components";
import { BiSolidTime } from "react-icons/bi";

import bp from "../../../assets/images/blood_pressure.png";
import { HBox, VBox } from "../../../components/Containers";
import { H2, P1, P2, P3, P4 } from "../../../components/Typography";
import colors from "../../../config/colors";
import { getDate, getTimeFromDateTime } from '../../../utils';


const HorizontalLine = styled.div`
    border-bottom: 1px solid ${colors.green};
    width: 100%;
`

const AboutAuthor = ({isMobile, created_at}) => {
    return (
        <VBox>
            <HorizontalLine/>
            <HBox className="mt-2">
                <img src={bp} style={{ width: isMobile ? "25%" : "10%" }}/>
                <VBox className="my-1 ml-2" justify="center" style={{ width: isMobile ? "60%" : "70%" }}>
                    <P3>লিখেছেন</P3>
                    <P3>অধ্যাপক ডা. এ এফ মহিউদ্দিন খান</P3>
                    <P3>সাবেক বিভাগীয় প্রধান, নাক কান গলা বিভাগ, ঢাকা মেডিকেল কলেজ ও হাসপাতাল</P3>
                </VBox>
            </HBox>
            <HBox justify="flex-end" className={isMobile ? "" : "mb-1"}>
                <P3 className="mr-1" style={{ fontSize: "15px" }}>
                    <BiSolidTime style={{color: colors.lightBlack}}/>
                </P3>
                <P3>{getDate(created_at)}</P3>
                {/* <P3>{created_at.slice(0, 10)}</P3> */}
            </HBox>
            <HorizontalLine/>
        </VBox>
    )
}
export default AboutAuthor