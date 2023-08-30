import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { GiHamburgerMenu } from 'react-icons/gi';

import { HBox } from '../components/Containers';
import { Button } from '../components/Buttons';
import { P2 } from '../components/Typography';
import logo from '../assets/images/Website-Logo.png'
import colors from '../config/colors';
import responsive from '../config/responsive';

const Container = styled(HBox)`
    position: sticky;
    top: 60px;
    height: 80px;
    width: 100%;
    border: 1px solid ${colors.grey};
    background-color: ${colors.veryLightGreen};
    padding-left: 8%;
    padding-right: 8%;
    z-index: 10;
    flex-wrap: nowrap;
`

const LogoImage = styled.img`
    height: 80px;
`

const SNavLink = styled(NavLink)`
    font-size: 1.2rem;
    text-decoration: none;
    color: ${colors.darkGrey};

    &.active {
        font-weight: bold;
    }
`

const MenuIcon = styled(GiHamburgerMenu)`
    cursor: pointer;
    font-size: 20px;
    flex-shrink: 0;
`

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);

    useEffect(() => {
        const setResponsiveness = () => {
            let orientation = !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape';
    
            if (orientation === 'portrait' || window.innerWidth < responsive.mobileThresh) {
                setIsMobile(true);
            }
            else {
                setIsMobile(false);
                setActiveMenu(false);
            }
        }
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness());

        return () => window.removeEventListener('resize', () => setResponsiveness());
    }, []);

    function handleMenu() {
        if(activeMenu) {
            setActiveMenu(false);
        }
        else {
            setActiveMenu(true);
        }
    }

    return (
        <Container justify='space-between' align='center'>
            <SNavLink to='/'>
                <LogoImage src={logo} />
            </SNavLink>
            {
            isMobile ?
            <>
            <MenuIcon onClick={handleMenu} />
            <Drawer open={activeMenu} anchor={'right'} PaperProps={{ style: { width: '50%', backgroundColor: `${colors.veryLightGreen}` } }}>
                <List>
                    <ListItem className='mb-4'>
                        <LogoImage src={logo} />
                    </ListItem>
                    <ListItem className='mb-4'>
                        <MenuIcon onClick={handleMenu} />
                    </ListItem>
                    <ListItem className='mb-4'>
                        <ListItemText>
                            <SNavLink to='/' onClick={handleMenu}>
                                হোম
                            </SNavLink>
                        </ListItemText>
                    </ListItem>
                    <ListItem className='mb-4'>
                        <ListItemText>
                            <SNavLink to='/about-us' onClick={handleMenu}>
                                পরিচিতি
                            </SNavLink>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <SNavLink to='/specialties' onClick={handleMenu}>
                                বিশেষজ্ঞ ডাক্তার
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
                    হোম
                </SNavLink>
                <SNavLink className='mx-4' to='/about-us'>
                    পরিচিতি
                </SNavLink>
                <SNavLink to='/specialties'>
                    বিশেষজ্ঞ ডাক্তার
                </SNavLink>
                {/* <SNavLink className='mx-2' style={{textDecoration: 'none'}} to='/payment'>
                    পেমেন্ট
                </SNavLink> */}
                {/* <SNavLink style={{textDecoration: 'none'}} to='/contact-us'>
                    যোগাযোগ
                </SNavLink> */}
            </HBox>
            <HBox className='ml-6' style={{flexWrap: 'nowrap'}}>
                <SNavLink to='https://patient.nextgenmyhealth.com/login' target='_blank'>
                    <Button color='first' elevated><P2 className='bold' color='white' style={{flexShrink: '0'}}>পেশেন্ট পোর্টাল</P2></Button>
                </SNavLink>
                <SNavLink to='https://doctor.nextgenmyhealth.com/login' target='_blank'>
                    <Button className='ml-3' color='third' elevated><P2 className='bold' color='white' style={{flexShrink: '0'}}>ডাক্তার পোর্টাল</P2></Button>
                </SNavLink>
            </HBox>

            {/* <HBox>
                <SNavLink to='https://patient.nextgenmyhealth.com/login' target='_blank'>
                    <Button className='bold' color='first' elevated>পেশেন্ট পোর্টাল</Button>
                </SNavLink>
                <SNavLink to='https://doctor.nextgenmyhealth.com/login' target='_blank'>
                    <Button className='bold ml-3' color='third' elevated>ডাক্তার পোর্টাল</Button>
                </SNavLink>
            </HBox> */}
            </>
            }
        </Container>
    );
}

export default NavBar;