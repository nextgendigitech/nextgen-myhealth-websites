import styled from "styled-components";
import { BiSolidTime } from "react-icons/bi";

import { HBox, VBox } from "../../../components/Containers";
import { H2, P1, P2, P3, P4 } from "../../../components/Typography";
import colors from "../../../config/colors";
import { getDate, getTimeFromDateTime } from '../../../utils';


const HorizontalLine = styled.div`
    border-bottom: 1px solid ${colors.green};
    width: 100%;
`

const AboutAuthor = ({isMobile, created_at, author_image, author_name, author_details}) => {
    return (
        <VBox>
            <HorizontalLine/>
            <HBox className="mt-2">
                <img 
                    src={`${import.meta.env.VITE_SERVER_URL}${author_image}`}  
                    style={{ height: "100px" }}/>
                <VBox className="my-1 ml-2" justify="center" style={{ width: isMobile ? "60%" : "70%" }}>
                    <P3>লিখেছেন</P3>
                    <P3>{author_name}</P3>
                    <P3>{author_details}</P3>
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