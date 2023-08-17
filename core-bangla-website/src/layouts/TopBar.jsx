import { useState } from 'react';
import styled from 'styled-components';

import { HBox } from '../components/Containers';
import { P1, P2 } from '../components/Typography';

import SearchBar from '../components/SearchBar';
import colors from '../config/colors';
import facebook_icon from '../assets/images/facebook_icon.png';
import linkedin_icon from '../assets/images/linkedin_icon.png';
import youtube_logo from '../assets/images/youtube_logo.png';

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

const TopBar = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
      setSearchValue(event.target.value);
      // Add your search logic here, like filtering data based on the search value
    }

    return (
        <Container justify='space-between' align='center'>
            <HBox>
                <a href="https://www.facebook.com/nextgenmyhealthvcp" target="_blank" rel="noopener noreferrer">
                    <IconImage src={facebook_icon} alt="Facebook Image" className='ml-1' />
                </a>
                <IconImage src={linkedin_icon} alt="LinkedIn Image" className="mx-3"/>
                <IconImage src={youtube_logo} alt="Youtube Image"/>
            </HBox>
            <P2 className="bold">হটলাইন +৮৮০১৩২১১১৯৩৯১</P2>
            <SearchBar
                placeholder="ডাক্তার অনুসন্ধান করুন"
                onChange={handleSearchChange}
                value={searchValue}
            />
        </Container>
    );
}

export default TopBar;