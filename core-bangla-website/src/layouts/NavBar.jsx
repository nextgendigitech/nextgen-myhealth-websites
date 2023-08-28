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
    z-index: 10;
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
            <SNavLink to='/'>
                <LogoImage src={logo}/>
            </SNavLink>
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
                <SNavLink to='https://patient.nextgenmyhealth.com/login' target='_blank'>
                    <Button className='bold' color='first' elevated>পেশেন্ট পোর্টাল</Button>
                </SNavLink>
                <SNavLink to='https://doctor.nextgenmyhealth.com/login' target='_blank'>
                    <Button className='bold ml-3' color='third' elevated>ডাক্তার পোর্টাল</Button>
                </SNavLink>
            </HBox>
        </Container>
    );
}

export default NavBar;