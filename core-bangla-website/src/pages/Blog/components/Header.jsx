import styled from "styled-components";
import { connect } from 'react-redux';

import { HBox } from "../../../components/Containers";
import { H3, P3, P4 } from "../../../components/Typography";
import colors from "../../../config/colors";
import { blogData } from "../../../data";

const TitleCard = styled(HBox)`
    width: 100%;
    background: ${colors.veryLightGreen};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`

const Header = ({isMobile, language}) => {
    return (
        <TitleCard 
            justify="center" 
            align="center" 
            style={{alignContent: "center", 
                    marginTop: isMobile ? "16px" : "32px", 
                    height: isMobile ? '40px' : '70px', 
                    borderRadius: isMobile ? '0px 15px' : '0px 30px'}}>
            <H3 className="bold" color="third">{blogData.header.head[language]}</H3>
        </TitleCard>
    );
}

export default Header;