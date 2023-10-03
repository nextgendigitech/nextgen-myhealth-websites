import { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { HBox } from "../../../components/Containers";
import { P2 } from "../../../components/Typography";
import colors from "../../../config/colors";

const Container = styled(HBox)`
    width: 280px;
    height: 80px;
    background: ${colors.veryLightBlue};
    box-shadow: 4px 4px 4px 0px ${colors.grey};
    border-radius: 0px 20px;
    flex-wrap: nowrap;
    
    &:hover {
        box-shadow: 4px 4px 15px 2px ${colors.grey};
    }
`

const Image = styled.img`
    height: 45px;
`

const SpecialtyCard = ({ isMobile, image, specialtyBang, specialtyEng, language }) => {
    return (
        <Link
            className={`${isMobile ? 'm-0_5 clickable' : 'm-2 clickable'}`}
            to={`/specialty-doctors/${specialtyEng}`}
            style={{ textDecoration: 'none' }}
        >
            <Container align='center'>
                <Image className='ml-1' src={image} />
                {language == 'bang' ? 
                    <P2 className='ml-2' align='center'>{specialtyBang}</P2>
                    :
                    <P2 className='ml-4' >{specialtyEng}</P2> } 
            </Container>
        </Link>
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(SpecialtyCard);