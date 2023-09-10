import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HBox } from '../components/Containers';
import { P2 } from '../components/Typography';
import { Button } from '../components/Buttons';
import colors from '../config/colors';
import responsive from '../config/responsive';
import facebookIcon from '../assets/images/facebook_icon.png';
import linkedinIcon from '../assets/images/linkedin_icon.png';
import youtubeLogo from '../assets/images/youtube_logo.png';
import searchIcon from '../assets/images/search_icon.png';
import DoctorSearchDlg from './DoctorSearchDlg';

const Container = styled(HBox)`
    position: sticky;
    top: 0px;
    height: 60px;
    width: 100%;
    border: 1px solid ${colors.grey};
    background: ${colors.mercury};
    padding-left: 8%;
    padding-right: 8%;
    z-index: 10;
    flex-wrap: nowrap;
`

const IconContainer = styled(HBox)`
    @media only screen and (max-width: ${responsive.mobileThresh-1}px) {
        display: none;
    }
`

const IconImage = styled.img`
    height: 30px;
    width: auto;
`

const SearchBar = styled(Button)`
    background-color: ${colors.lightGrey};
    border: 1px solid ${colors.grey};
    box-shadow: 0px 2px 3px ${colors.grey};
    flex-shrink: 0;

    &:hover {
        background-color: ${colors.lightGrey};
        color: ${colors.darkGrey};
    }

    @media only screen and (max-width: ${responsive.mobileThresh-1}px) {
        width: 50px;
    }
`

const DoctorSearchText = styled(P2)`
    @media only screen and (max-width: ${responsive.mobileThresh-1}px) {
        display: none;
    }
`

const DoctorSearchIcon = styled.img`
    height: 70%;
    @media only screen and (max-width: ${responsive.mobileThresh-1}px) {
        margin: 0;
    }
`

const TopBar = () => {
    const [openSearchDlg, setOpenSearchDlg] = useState(false);

    return (
        <Container justify='space-between' align='center'>
            <IconContainer>
                <Link to="https://www.facebook.com/nextgenmyhealthvcp" target="_blank">
                    <IconImage src={facebookIcon} alt="Facebook Image" className='ml-1' />
                </Link>
                <Link to='https://www.linkedin.com/company/nextgen-myhealth-vcp/' target='_blank'>
                    <IconImage src={linkedinIcon} alt="LinkedIn Image" className="mx-3"/>
                </Link>
                <Link to='https://www.youtube.com/channel/UCSDFJqW2y9UYs6IMWGK2i9w' target='_blank'>
                    <IconImage src={youtubeLogo} alt="Youtube Image"/>
                </Link>
            </IconContainer>
            <P2 className="bold">হটলাইন +৮৮০১৩২১১১৯৩৯১</P2>
            <SearchBar
                size='sm'
                onClick={() => setOpenSearchDlg(true)}
            >
                <DoctorSearchText>
                    ডাক্তার অনুসন্ধান করুন
                </DoctorSearchText>
                <DoctorSearchIcon className='ml-8' src={searchIcon} />
            </SearchBar>

            <DoctorSearchDlg
                open={openSearchDlg}
                setOpen={setOpenSearchDlg}
            />
        </Container>
    );
}

export default TopBar;