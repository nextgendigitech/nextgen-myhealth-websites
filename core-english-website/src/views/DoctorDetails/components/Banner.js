import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { FiX, FiArrowLeft } from "react-icons/fi";
import { Tooltip } from "@mui/material";

import { HBox, VBox } from "../../../components/Containers";
import { H1, H2, H3, H4, H5, H6, P1, P2, P3 } from "../../../components/Typography";
import COLORS from "../../../utility/styles";
import Button from "../../../components/Button";
import { Hyperlink } from "../../../components/Hyperlink";

const baseURL = 'https://nextgenmyhealth.com:8000';  // Using substring to remove last '/'

const Container = styled(VBox)`
    background: linear-gradient(188deg, white 0%, rgba(0, 0, 0, 0.10) 100%);
    box-shadow: 0px 5px 15px 0px ${COLORS.primaryLight};
`

const Topbar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SLink = styled(Link)`
    text-decoration: none;
`

const Image = styled.img`
    height: 160px;
    width: 160px;
    border-radius: 80px;
    border: 2px solid ${COLORS.lightGrey};
    box-shadow: 0px 1px 1px ${COLORS.primaryLight};
`

const SHBox = styled(HBox)`
    border: 1px solid ${COLORS.greyColor};
    border-radius: 5px;
    box-shadow: 0px 1px 1px ${COLORS.primaryLight};
`

const Nav = styled.div`
    display: flex;
`

const OnlineIcon = styled.div`
    background-color: ${COLORS.greenColor};
    height: 8px;
    width: 8px;
    border-radius: 4px;
`

const Banner = ({ isMobile, id, name, image, bmdc, doctorType, qualification, experience, specialty,
                  rating, isOnline, affiliationSummary, setShowUppernav }) => {
    const navigate = useNavigate();

    // setShowUppernav(false);

    return (
        <Container align='center'>
            <Topbar>
                <Button
                    className="ml-2"
                    onClick={() => navigate(-1)}
                >
                    <FiArrowLeft />
                </Button>
                {/* <P1>Profile</P1> */}
                <SLink to="/dashboard">
                    <Button
                        className="mr-2"
                        // onClick={() => setShowUppernav(true)}
                    >
                        <FiX />
                    </Button>
                </SLink>
            </Topbar>
            <VBox align="center" style={{ width: isMobile ? '95%' : '50%' }}>
                <Image
                    className="mt-6"
                    src={`${baseURL}${image}`}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src="/images/noImage.svg";
                    }}
                />
                <HBox className="mt-2">
                    <H2 color='first'>{name}</H2>
                    {isOnline ? <Tooltip title='Online' arrow><OnlineIcon className="ml-0_5" /></Tooltip> : null}
                </HBox>
                <P2 align='center' className="mt-1">{qualification}</P2>
                <P2 color='second' className="mt-0_5">{specialty}</P2>
                {affiliationSummary?.length ?
                        <P2 className="mt-0_5" color='third' align='center'>
                            {affiliationSummary[0].designation}, {affiliationSummary[0].institution}
                        </P2>
                        :
                        <></>
                    }

                <SHBox className="mt-4">
                    {/* <VBox align="center" justify='space-between' className="py-1 px-3">
                        <P3>Rating of 0</P3>
                        <HBox align="center">
                            <Rating value={parseFloat(rating)} style={{ fontSize: 16, color: `${COLORS.red}` }} readOnly />
                            <H6 style={{ marginLeft: 4 }}>({rating ? `${rating}` : 'Not Rated'})</H6>
                        </HBox>    
                    </VBox> */}
                    <VBox align="center" justify='space-between' className="py-1 px-3">
                        <P3>BMDC No.</P3>
                        <H5 color='black'>{doctorType === "MBBS" ? "A-" : ""}{bmdc}</H5>
                    </VBox>
                    {experience && <VBox align="center" justify='space-between' className="py-1 px-3" style={{ borderLeft: `1px solid ${COLORS.grey}` }}>
                        <P3>Experience</P3>
                        <H5 color='black'>{experience}</H5>
                    </VBox>}
                </SHBox>

                <div to={`/appointment-schedule/${id}`} className='mt-6 mb-8'>
                    <Hyperlink href='https://patient.nextgenmyhealth.com/' target="_blank"><Button name='Book Appointment' color={COLORS.facebookColor}></Button></Hyperlink>
                </div>
            </VBox>
            {/* <Nav className="mt-4">
                <P2 className="px-2 py-1 bold" style={{ borderBottom: `2px solid ${COLORS.darkGrey}` }}>Doctor Details</P2>
                <P2 className="px-2 py-1 bold">Affiliations</P2>
                <P2 className="px-2 py-1 bold">Reviews</P2>
            </Nav> */}
        </Container>
    )
}

export default Banner;