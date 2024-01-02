import styled from "styled-components";
import { BiSolidTime } from "react-icons/bi";

import { HBox, VBox } from "../../../components/Containers";
import { H2, P1, P2, P3, P4 } from "../../../components/Typography";
import colors from "../../../config/colors";
import { getDate, getTimeFromDateTime } from '../../../utils';
import noImage from '../../../assets/images/no-image.png';

const HorizontalLine = styled.div`
    border-bottom: 1px solid ${colors.green};
    width: 100%;
`

const AboutAuthor = ({isMobile, createdAt, authorImage, authorName, authorDetails}) => {
    return (
        <VBox>
            <HorizontalLine/>
            <HBox className="mt-2" style={{ height: authorName ? "100px" : "" }}>
            {authorName ?
                <>  
                    {authorImage ?
                        <img 
                            src={`${import.meta.env.VITE_SERVER_URL}${authorImage}`}  
                            style={{ height: isMobile? "70px" : "100px", width: isMobile? "80px": "" }}
                        /> 
                        : <img src={noImage} style={{ height: isMobile? "70px" : "100px", width: isMobile? "80px": "" }}/>
                    }
                    <VBox className="mb-1 ml-2" justify={isMobile? "" : "center"} style={{ width: "70%" }}>
                        <P3>লিখেছেন</P3>
                        <P3>{authorName}</P3>
                        <P3>{authorDetails}</P3>
                    </VBox>
                </> :
                <></>
            }
            </HBox>
            <HBox justify="flex-end" className={isMobile ? "" : "mb-1"}>
                <P3 className="mr-1" style={{ fontSize: "15px" }}>
                    <BiSolidTime style={{color: colors.lightBlack}}/>
                </P3>
                <P3>{getDate(createdAt)}</P3>
            </HBox>
            <HorizontalLine/>
        </VBox>
    )
}
export default AboutAuthor;