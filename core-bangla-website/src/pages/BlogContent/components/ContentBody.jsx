import { BsFacebook } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import ReactQuill from 'react-quill';
import { FacebookShareButton } from "react-share";
import { Tooltip } from '@mui/material';
import { jsPDF } from "jspdf";

import 'react-quill/dist/quill.snow.css';
import { HBox, VBox } from "../../../components/Containers";
import { H3, P2, P3 } from "../../../components/Typography";
import colors from "../../../config/colors";
import 'react-quill/dist/quill.bubble.css';
import { blogData } from "../../../data";

const handleEmailShare = () => {
    const subject = "Check out this page!";
    const body = "I found this great page you might like: " + window.location.href;
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const emailMessage = `mailto:?subject=${encodedSubject}&body=${encodedBody}`;

    if ('open' in window && typeof window.open === 'function') {
        window.open(emailMessage);
    } else {
        window.location.href = emailMessage;
    }
};


const ContentBody = ({id, title, content, isMobile, language}) => {
    const pageUrl = window.location.href;

    const quillStyle = {
        fontSize: '180px'
    };

    // const generatePDF = () => {
    //     const doc = new jsPDF({
    //         orientation: "landscape",
    //         unit: "mm",
    //         format: "a4",
    //     });
    //     doc.html(document.body, {
    //       callback: function (pdf) {
    //         pdf.save(title+".pdf");
    //       },
    //     });
    //   };

    return (
        <VBox>
            <H3 
                className={isMobile ? "bold my-2" : "bold mt-5 mb-3"} 
                justify="center" 
                align="center" 
                style={{ color: colors.green }}
            >
                {title}
            </H3>
            <ReactQuill value={content} readOnly={true} theme={'bubble'} style={quillStyle} />
            <HBox className={isMobile ? "my-2" : "my-4"}>
                <P2 className="mr-2">{blogData.blogcontentbody.share[language]}</P2>
                <Tooltip title='Facebook' arrow>
                    <P2 className="mr-2" style={{ fontSize: "20px" }}>
                        <FacebookShareButton url={pageUrl} quote={title}>
                            <BsFacebook style={{color: colors.blue}}/>
                        </FacebookShareButton>
                    </P2>
                </Tooltip>
                <Tooltip title='Email' arrow>
                    <P2 className="mr-2" style={{ cursor: 'pointer', fontSize: "23px" }}>
                        <AiFillMail onClick={handleEmailShare} style={{color: colors.lightBlack}}/>
                    </P2>
                </Tooltip>
                {/* <Tooltip title='Print as PDF' arrow>
                    <P2 className="mr-2" style={{ cursor: 'pointer', fontSize: "23px" }}>
                        <FcPrint onClick={generatePDF} style={{color: colors.lightBlack}}/>
                    </P2>
                </Tooltip> */}
            </HBox>
        </VBox>
    )
}

export default ContentBody