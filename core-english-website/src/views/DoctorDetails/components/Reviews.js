import styled from "styled-components";
import Rating from '@mui/material/Rating';
import { Line } from 'rc-progress';

import { HBox, VBox } from "../../../components/Containers";
import { H1, H2, H3, H4, H5, H6, P1, P2, P3, P4 } from "../../../components/Typography";
import COLORS from "../../../utility/styles";

const baseURL = 'https://nextgenmyhealth.com:8000';  // Using substring to remove last '/'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SLine = styled(Line)`
    width: 20vw;
    height: 12px;
    border-radius: 6px;
`

const Image = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    /* border: 2px solid ${COLORS.greyColor}; */
`

const Review = ({ isMobile }) => {
    return (
        <HBox justify='center' className={isMobile ? "p-2" : "p-3"} style={{ width: isMobile ? '100vw' : '30vw' }}>
            <Image src={`${baseURL}/media/images/doctor/5577-doctor1.PNG`} />
            <VBox className="ml-1" style={{ width: 'calc(100% - 58px)' }}>
                <HBox align='flex-end'>
                    <H6 className="mr-1">Ashraful Hasan</H6>
                    <P3>12 January 2020</P3>
                </HBox>
                <HBox className="mb-1">
                    <Rating value={4.6} className="mr-1" style={{ fontSize: 12, color: `${COLORS.red}` }} readOnly />
                    <P3>4.6</P3>
                </HBox>
                <P2 style={{  }}>Very professional. I recommend this doctor to everybody.</P2>
            </VBox>
        </HBox>
    )
}

const Reviews = ({ isMobile }) => {
    return (
        <Container>
            <HBox className="mb-8">
                <VBox className="p-2" justify='space-between'>
                    <Rating value={4.6} style={{ fontSize: 16, color: `${COLORS.red}` }} readOnly />
                    <P2 className="mb-4">267</P2>
                    <H1>4.6</H1>
                </VBox>
                <VBox className="p-2" justify='space-between'>
                    <HBox align="center"><P1 className="mr-1" style={{ width: 16 }}>5</P1><SLine percent="50" strokeColor={`${COLORS.blue}`} style={{ width: isMobile ? '40vw' : '20vw' }} /></HBox>
                    <HBox align="center"><P1 className="mr-1" style={{ width: 16 }}>4</P1><SLine percent="30" strokeColor={`${COLORS.blue}`} style={{ width: isMobile ? '40vw' : '20vw' }} /></HBox>
                    <HBox align="center"><P1 className="mr-1" style={{ width: 16 }}>3</P1><SLine percent="10" strokeColor={`${COLORS.blue}`} style={{ width: isMobile ? '40vw' : '20vw' }} /></HBox>
                    <HBox align="center"><P1 className="mr-1" style={{ width: 16 }}>2</P1><SLine percent="5" strokeColor={`${COLORS.blue}`} style={{ width: isMobile ? '40vw' : '20vw' }} /></HBox>
                    <HBox align="center"><P1 className="mr-1" style={{ width: 16 }}>1</P1><SLine percent="3" strokeColor={`${COLORS.blue}`} style={{ width: isMobile ? '40vw' : '20vw' }} /></HBox>
                </VBox>
            </HBox>
            <HBox className="mb-8" justify='center' style={{ width: '100vw' }}>
                <Review isMobile={isMobile} />
                <Review isMobile={isMobile} />
                <Review isMobile={isMobile} />
                <Review isMobile={isMobile} />
                <Review isMobile={isMobile} />
                <Review isMobile={isMobile} />
            </HBox>
        </Container>
    )
}

export default Reviews;