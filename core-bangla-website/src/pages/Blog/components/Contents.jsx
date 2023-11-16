import { Link } from "react-router-dom";
import LinesEllipsis from 'react-lines-ellipsis';

import 'react-quill/dist/quill.bubble.css';
import { HBox, VBox } from "../../../components/Containers";
import { P2, P3 } from "../../../components/Typography";
import no_image from '../../../assets/images/no-image.png';


const ContentCard = ({ title, content, isMobile, id, cover_image }) => {

    const editedContent = (content, maxLines) => {
        const element = document.createElement("div");
        element.innerHTML = content;
        const plainText = element.textContent;
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
                <HBox className={isMobile ? "mt-2" : "mt-1 mb-5"} style={{ width: "100%" }}>
                    {cover_image?
                        <img 
                            src={`${import.meta.env.VITE_SERVER_URL}${cover_image}`}  
                            className={isMobile ? "mb-2" : ""} 
                            style={{ width: isMobile ? "50%" : "25%" }}
                        /> 
                        : 
                        <img 
                            src={no_image} 
                            className={isMobile ? "mb-2" : "mr-5"}
                            style={{ width: isMobile ? "50%" : "20%" }}
                        /> 
                    }
                    <VBox 
                        justify={isMobile? "" : "center"} 
                        className={isMobile ? "" : "ml-2 pl-2"} 
                        style={{ width: isMobile ? "100%" : "72%"}}
                    >
                        <P2 className="bold mb-2">{title}</P2>
                        <P3>
                            <LinesEllipsis
                                text={ editedContent(content, 4) }
                                maxLine="3"
                                ellipsis="..."
                                style={{ color: 'black' }}
                            /> 
                        </P3>
                    </VBox>
                </HBox>
            </VBox>
        </Link>
    );
}

const Contents = ({isMobile, id, title, content, cover_image}) => {
  return (
    <VBox className={isMobile ? "" : "ml-4"}>
        <ContentCard
            isMobile={isMobile}
            id={id}
            title={title}
            content={content}
            cover_image={cover_image}
        />
    </VBox>
  )
}

export default Contents