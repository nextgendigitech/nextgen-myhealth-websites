import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlinePhone } from 'react-icons/hi';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { HBox } from '../components/Containers';
import { P2, P3 } from '../components/Typography';
import { Button } from '../components/Buttons';
import colors from '../config/colors';
import responsive from '../config/responsive';
import facebookIcon from '../assets/images/facebook_icon.png';
import linkedinIcon from '../assets/images/linkedin_icon.png';
import youtubeLogo from '../assets/images/youtube_logo.png';
import searchIcon from '../assets/images/search_icon.png';
import DoctorSearchDlg from './DoctorSearchDlg';
import { topbarData, links } from '../data';
import CheckButton from '../components/CheckButton';
import { toggleLang } from '../services/actions/generalAction';

const Container = styled(HBox)`
    position: sticky;
    top: 0px;
    height: 60px;
    width: 100%;
    border: 1px solid ${colors.grey};
    background: ${colors.mercury};
    z-index: 10;
    flex-wrap: nowrap;
`

const IconContainer = styled(HBox)`
    flex-wrap: nowrap;
`

const IconImage = styled.img`
    height: 30px;
    width: auto;

    @media only screen and (max-width: ${responsive.mobileThresh-1}px) {
        height: 20px;
    }
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
`

const DoctorSearchIcon = styled.img`
    height: 60%;
`

const TopBar = ({ language, toggleLang }) => {
    const [languages, setLanguages] = useState([
        {text: 'বাং', checked: true},
        {text: 'En', checked: false},
    ]);
    const [openSearchDlg, setOpenSearchDlg] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const setResponsiveness = () => {
            let orientation = !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape';
    
            if (orientation === 'portrait' || window.innerWidth < responsive.mobileThresh) {
                setIsMobile(true);
            }
            else {
                setIsMobile(false);
            }
        }
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness());

        return () => window.removeEventListener('resize', () => setResponsiveness());
    }, []);

    useEffect(() => {
        toggleLang(getLanguage());
    }, [languages]);

    const getLanguage = () => {
        if (languages[0].checked) return 'bang';
        else return 'eng';
    }

    const handlePhoneCall = () => {
        window.location.href = `tel:${topbarData.head2[language]}`;
    };

    return (
        <Container 
            justify='space-between' 
            align='center'
            style={{ paddingLeft: isMobile ? "20px" : "100px", paddingRight: isMobile ? "20px" : "100px" }}>
            <IconContainer>
                <Link to={links.topbar.link1} target="_blank" className='ml-1'>
                    <IconImage src={facebookIcon} alt="Facebook Image" />
                </Link>
                {/* <Link to={links.topbar.link2} target='_blank'>
                    <IconImage src={linkedinIcon} alt="LinkedIn Image" className={isMobile ? 'mx-1' : 'mx-3'} />
                </Link> */}
                <Link to={links.topbar.link3} target='_blank' className='ml-1'>
                    <IconImage src={youtubeLogo} alt="Youtube Image" />
                </Link>
            </IconContainer>
            <P2 className="bold" onClick={handlePhoneCall} style={{ cursor: 'pointer' }}>
                {isMobile ? <HiOutlinePhone style={{position: 'relative', top:'2px'}}/> : topbarData.head1[language]} {topbarData.head2[language]}
            </P2>
            <HBox align='center'>
                <SearchBar
                    style={{ width: isMobile ? "50px" : "" }}
                    size='sm'
                    onClick={() => setOpenSearchDlg(true)}
                >
                    {!isMobile && <P3>{topbarData.btn1[language]}</P3>}
                    <DoctorSearchIcon className={isMobile ? '' : 'ml-8'} src={searchIcon} />
                </SearchBar>
                <CheckButton
                    className={isMobile ? "ml-1" : "ml-2"}
                    size='md'
                    items={languages}
                    setItems={setLanguages}
                />
            </HBox>
            <DoctorSearchDlg
                isMobile={isMobile}
                open={openSearchDlg}
                setOpen={setOpenSearchDlg}
            />
        </Container>
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, { toggleLang })(TopBar);
