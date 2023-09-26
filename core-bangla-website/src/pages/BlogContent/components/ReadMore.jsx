import styled from "styled-components";

import bp from "../../../assets/images/blood_pressure.png";
import { HBox, VBox } from "../../../components/Containers";
import { P2 } from "../../../components/Typography";


const Article = ({isMobile, image, title}) => {
    return (
        <VBox>
            <img src={image} className="my-2" style={{ width: isMobile? "150px" : "220px" }}/>
            <P2 align="center">{title}</P2>
        </VBox>
    )
}

const ReadMore = ({isMobile}) => {
    return (
        <VBox className={isMobile ? "mt-3" : "mt-5"}>
            <P2>Read More...</P2>
            <HBox className="mt-1" justify="space-between">
                <Article isMobile={isMobile} image={bp} title="Article 1" />
                <Article isMobile={isMobile} image={bp} title="Article 2" />
                <Article isMobile={isMobile} image={bp} title="Article 3" />
                <Article isMobile={isMobile} image={bp} title="Article 4" />
            </HBox>
        </VBox>
    )
}

export default ReadMore;