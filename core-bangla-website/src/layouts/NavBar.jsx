import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { HBox } from '../components/Containers';
import { Button } from '../components/Buttons';
import logo from '../assets/images/Website-Logo.png'
import colors from '../config/colors';

const Container = styled(HBox)`
    position: sticky;
    top: 60px;
    height: 80px;
    width: 100%;
    border: 1px solid ${colors.grey};
    background-color: ${colors.veryLightGreen};
    padding-left: 120px;
    padding-right: 120px;
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

const NavBar = () => {
    return (
        <Container justify='space-between' align='center'>
            <LogoImage src={logo}/>
            <HBox>
                <SNavLink to='/'>
                    হোম
                </SNavLink>
                <SNavLink className='mx-4' style={{textDecoration: 'none'}} to='/about-us'>
                    পরিচিতি
                </SNavLink>
                <SNavLink className='' style={{textDecoration: 'none'}} to='/specialties'>
                    বিশেষজ্ঞ ডাক্তার
                </SNavLink>
                {/* <SNavLink className='mx-2' style={{textDecoration: 'none'}} to='/payment'>
                    পেমেন্ট
                </SNavLink> */}
                {/* <SNavLink style={{textDecoration: 'none'}} to='/contact-us'>
                    যোগাযোগ
                </SNavLink> */}
            </HBox>
            <HBox>
                <Button className='bold' color='first' elevated>পেশেন্ট পোর্টাল</Button>
                <Button className='bold ml-3' color='third' elevated>ডাক্তার পোর্টাল</Button>
            </HBox>
        </Container>
    );
}

export default NavBar;