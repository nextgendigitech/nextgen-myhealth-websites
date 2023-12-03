import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { GiHamburgerMenu } from 'react-icons/gi';
import { connect } from 'react-redux';

import { HBox } from '../components/Containers';
import { Button } from '../components/Buttons';
import { P1, P2 } from '../components/Typography';
import logo from '../assets/images/Website-Logo.png'
import colors from '../config/colors';
import responsive from '../config/responsive';
import { navbarData, links } from '../data';

const Container = styled(HBox)`
    position: sticky;
    top: 60px;
    height: 80px;
    width: 100%;
    border: 1px solid ${colors.grey};
    background-color: ${colors.veryLightGreen};
    z-index: 10;
    flex-wrap: nowrap;
`

const MobilePortalContainer = styled(HBox)`
    height: 50px;
    background-color: ${colors.veryLightGreen};
    border-bottom: 1px solid ${colors.grey};
`

const LogoImage = styled.img`
    @media only screen and (max-width: ${responsive.xs}px) { // xs
        height: 65px;
    }
    @media only screen and (min-width: ${responsive.xs}px) and (max-width: ${responsive.sm}px) {  // sm
        height: 70px;
    }
    @media only screen and (min-width: ${responsive.sm}px) and (max-width: ${responsive.md}px) {  // md
        height: 80px;
    }
    @media only screen and (min-width: ${responsive.md}px) and (max-width: ${responsive.lg}px) {  // lg
        height: 80px;
    }
    @media only screen and (min-width: ${responsive.lg}px) {  // xl
        height: 80px;
    }
`

const SNavLink = styled(NavLink)`
    font-size: 1.2rem;
    text-decoration: none;
    color: ${colors.darkGrey};

    &.active {
        font-weight: bold;
    }
`

const SLink = styled(Link)`
    text-decoration: none;
`

const MenuIcon = styled(GiHamburgerMenu)`
    cursor: pointer;
    font-size: 20px;
    flex-shrink: 0;
`

const NavBar = ({ language }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [openNavDrawer, setOpenNavDrawer] = useState(false);

    useEffect(() => {
        const setResponsiveness = () => {
            let orientation = !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape';
    
            if (orientation === 'portrait' || window.innerWidth < responsive.mobileThresh) {
                setIsMobile(true);
            }
            else {
                setIsMobile(false);
                setOpenNavDrawer(false);
            }
        }
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness());

        return () => window.removeEventListener('resize', () => setResponsiveness());
    }, []);

    const handleClickMenuItem = () => {
        setOpenNavDrawer(!openNavDrawer);
    }

    return (
        <>
            <Container
                justify='space-between'
                align='center'
                style={{ paddingLeft: isMobile ? "20px" : "100px", paddingRight: isMobile ? "20px" : "100px" }}
            >
                <SNavLink to='/'>
                    <LogoImage src={logo} />
                </SNavLink>
                {
                isMobile ?
                    <>
                        <MenuIcon onClick={() => setOpenNavDrawer(!openNavDrawer)} />
                        <Drawer
                            open={openNavDrawer}
                            anchor='right'
                            PaperProps={{ style: { width: '50%', backgroundColor: `${colors.veryLightGreen}` } }}
                            onClose={() => setOpenNavDrawer(false)}

                        >
                            <List>
                                <ListItem className='mb-4'>
                                    <LogoImage src={logo} />
                                </ListItem>
                                <ListItem className='mb-2'>
                                    <ListItemText>
                                        <SNavLink to='/' onClick={handleClickMenuItem}>
                                            <P1>{navbarData.head1[language]}</P1>
                                        </SNavLink>
                                    </ListItemText>
                                </ListItem>
                                <ListItem className='mb-2'>
                                    <ListItemText>
                                        <SNavLink to='/about-us' onClick={handleClickMenuItem}>
                                            <P1>{navbarData.head2[language]}</P1>
                                        </SNavLink>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        <SNavLink to='/specialties' onClick={handleClickMenuItem}>
                                            <P1>{navbarData.head3[language]}</P1>
                                        </SNavLink>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        <SNavLink to='/blog' onClick={handleClickMenuItem}>
                                            <P1>{navbarData.head4[language]}</P1>
                                        </SNavLink>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Drawer>
                    </>
                    :
                    <>
                        <HBox style={{flexShrink: '0', flexWrap: 'nowrap'}}>
                            <SNavLink to='/'>
                                {navbarData.head1[language]}
                            </SNavLink>
                            <SNavLink className='ml-4' to='/about-us'>
                                {navbarData.head2[language]}
                            </SNavLink>
                            <SNavLink className='ml-4' to='/specialties'>
                                {navbarData.head3[language]}
                            </SNavLink>
                            <SNavLink className='ml-4' to='/blog'>
                                {navbarData.head4[language]}
                            </SNavLink>
                        </HBox>
                        <HBox className='ml-5' style={{flexWrap: 'nowrap'}}>
                            <SLink to='https://patient.nextgenmyhealth.com/login' target='_blank'>
                                <Button color='first' elevated>
                                    <P2 className='bold' color='white' style={{flexShrink: '0'}}>
                                        {navbarData.btn1[language]}
                                    </P2>
                                </Button>
                            </SLink>
                            <SLink to='https://doctor.nextgenmyhealth.com/login' target='_blank'>
                                <Button className='ml-3' color='third' elevated>
                                    <P2 className='bold' color='white' style={{flexShrink: '0'}}>
                                        {navbarData.btn2[language]}
                                    </P2>
                                </Button>
                            </SLink>
                        </HBox>
                    </>
                }
            </Container>
            {isMobile && <MobilePortalContainer justify='center' align='center'>
                <SLink to='https://patient.nextgenmyhealth.com/login' target='_blank'>
                    <Button size='sm' color='first' elevated>
                        <P2 className='bold' color='white' style={{flexShrink: '0'}}>
                            {navbarData.btn1[language]}
                        </P2>
                    </Button>
                </SLink>
                <SLink to='https://doctor.nextgenmyhealth.com/login' target='_blank'>
                    <Button size='sm' className='ml-3' color='third' elevated>
                        <P2 className='bold' color='white' style={{flexShrink: '0'}}>
                            {navbarData.btn2[language]}
                        </P2>
                    </Button>
                </SLink>
            </MobilePortalContainer>}
        </>
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(NavBar);