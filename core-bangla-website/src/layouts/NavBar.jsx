import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

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
    padding-left: 120px;
    padding-right: 120px;
    z-index: 10;
    flex-wrap: nowrap;
`

const LogoImage = styled.img`
    height: 80px;
`

const NavOptionContainer = styled(HBox)`
    @media only screen and (min-width: ${responsive.sm}px) {
        flex-wrap: nowrap;
    }
`

const ButtonContainer = styled(HBox)`
    @media only screen and (min-width: ${responsive.sm}px) {
        flex-wrap: nowrap;
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

const NavBar = () => {
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

    return (
        <Container justify='space-between' align='center'>
            <SNavLink to='/'>
                <LogoImage src={logo}/>
            </SNavLink>
            {
            isMobile ?
            <Drawer open={true} anchor={'right'}>
                <List>  
                    <ListItem>
                        <ListItemText>
                            <SNavLink to='/'>
                                হোম
                            </SNavLink>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            :
            <>
            <NavOptionContainer style={{flexShrink: '0'}}>
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
            </NavOptionContainer>
            <ButtonContainer>
                <SNavLink to='https://patient.nextgenmyhealth.com/login' target='_blank'>
                    <Button color='first' elevated><P2 className='bold' color='white' style={{flexShrink: '0'}}>পেশেন্ট পোর্টাল</P2></Button>
                </SNavLink>
                <SNavLink to='https://doctor.nextgenmyhealth.com/login' target='_blank'>
                    <Button className='ml-3' color='third' elevated><P2 className='bold' color='white' style={{flexShrink: '0'}}>ডাক্তার পোর্টাল</P2></Button>
                </SNavLink>
            </ButtonContainer>

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