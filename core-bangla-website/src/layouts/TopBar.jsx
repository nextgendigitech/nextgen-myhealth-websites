import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HBox } from '../components/Containers';
import { P1, P2 } from '../components/Typography';
import { Button } from '../components/Buttons';
import colors from '../config/colors';
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
    padding-left: 120px;
    padding-right: 120px;
    z-index: 10;
`

const IconImage = styled.img`
    height: 30px;
    width: auto;
`

const SearchBar = styled(Button)`
    background-color: ${colors.lightGrey};
    border: 1px solid ${colors.grey};
    box-shadow: 0px 2px 3px ${colors.grey};

    &:hover {
        background-color: ${colors.lightGrey};
        color: ${colors.darkGrey};
    }
`

const TopBar = () => {
    const [openSearchDlg, setOpenSearchDlg] = useState(false);

    return (
        <Container justify='space-between' align='center'>
            <HBox>
                <Link to="https://www.facebook.com/nextgenmyhealthvcp" target="_blank">
                    <IconImage src={facebookIcon} alt="Facebook Image" className='ml-1' />
                </Link>
                <Link to='https://www.linkedin.com/company/nextgen-myhealth-vcp/' target='_blank'>
                    <IconImage src={linkedinIcon} alt="LinkedIn Image" className="mx-3"/>
                </Link>
                <Link to='https://www.youtube.com/channel/UCSDFJqW2y9UYs6IMWGK2i9w' target='_blank'>
                    <IconImage src={youtubeLogo} alt="Youtube Image"/>
                </Link>
            </HBox>
            <P2 className="bold">হটলাইন +৮৮০১৩২১১১৯৩৯১</P2>
            <SearchBar
                size='sm'
                onClick={() => setOpenSearchDlg(true)}
            >
                ডাক্তার অনুসন্ধান করুন
                <img className='ml-8' src={searchIcon} style={{height: '70%'}} />
            </SearchBar>

            <DoctorSearchDlg
                open={openSearchDlg}
                setOpen={setOpenSearchDlg}
            />
        </Container>
    );
}

export default TopBar;