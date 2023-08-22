import { useState } from 'react';
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
    // Add your CSS here
    background-color: ${colors.lightGrey};
    box-shadow: 0 0 4px 1px ${colors.darkGrey};
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
                <a href="https://www.facebook.com/nextgenmyhealthvcp" target="_blank" rel="noopener noreferrer">
                    <IconImage src={facebookIcon} alt="Facebook Image" className='ml-1' />
                </a>
                <IconImage src={linkedinIcon} alt="LinkedIn Image" className="mx-3"/>
                <IconImage src={youtubeLogo} alt="Youtube Image"/>
            </HBox>
            <P2 className="bold">হটলাইন +৮৮০১৩২১১১৯৩৯১</P2>
            {/* <SearchBar
                placeholder="ডাক্তার অনুসন্ধান করুন"
                onChange={handleSearchChange}
                value={searchValue}
            /> */}
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