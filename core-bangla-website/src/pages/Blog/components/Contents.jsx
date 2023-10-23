import styled from "styled-components";
import { Link } from "react-router-dom";
// import ReactQuill from 'react-quill';
import LinesEllipsis from 'react-lines-ellipsis';


import 'react-quill/dist/quill.bubble.css';
import { HBox, VBox } from "../../../components/Containers";
import { P2, P3 } from "../../../components/Typography";
import colors from "../../../config/colors";
import bp from "../../../assets/images/blood_pressure.png";


const Image = styled.img`
    width: 25%;
`

const HorizontalLine = styled.div`
    border-bottom: 1px solid ${colors.green};
    width: 100%;
`

const ContentCard = ({ title, content, isMobile, id, created_at }) => {

    const editedContent = (content, maxLines) => {
        const plainText = content.replace(/<[^>]+>/g, '');
        const truncatedText = plainText.split('\n').slice(0, maxLines).join('\n');
        return truncatedText;
    };

    return (
        <Link
            className='clickable'
            to={`/blog-content/${id}`}
            style={{ textDecoration: 'none' }}
        >
            <VBox>
                <HBox className={isMobile ? "mt-2" : "my-2"} style={{ width: "100%" }}>
                    <Image src={bp} className={isMobile ? "mb-2" : ""} style={{ width: isMobile ? "100%" : "28%" }}/>
                    <VBox className={isMobile ? "" : "ml-2 pl-2"} style={{ width: isMobile ? "100%" : "70%" }}>
                        <P2 className="bold mb-2">{title}</P2>
                        <P3>
                            <LinesEllipsis
                                text={ editedContent(content, 4) }
                                maxLine="4"
                                ellipsis="..."
                                style={{ color: 'black' }}
                            /> 
                        </P3>
                        {/* <P3>{created_at}</P3> */}
                    </VBox>
                </HBox>
            </VBox>
        </Link>
    );
}

const Contents = ({isMobile, id, title, content, created_at}) => {
  return (
    <VBox className={isMobile ? "" : "ml-4"}>
        <HorizontalLine className="mb-2" />
        <ContentCard
            isMobile={isMobile}
            id={id}
            title={title}
            content={content}
            created_at={created_at}
        />
    </VBox>
  )
}

export default Contents