import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { HBox } from '../components/Containers';
import { P1 } from '../components/Typography';
import { Button } from '../components/Buttons';
import logo from '../assets/images/Website-Logo.png'
import colors from '../config/colors';

const Container = styled(HBox)`
    position: sticky;
    top: 0px;
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

const NavBar = () => {
    return (
        <Container justify='space-between' align='center'>
            <LogoImage src={logo}/>
            <HBox>
                <NavLink style={{textDecoration: 'none'}} to='/'>
                    <P1 className='bold'>হোম</P1>
                </NavLink>
                <NavLink className='mx-2' style={{textDecoration: 'none'}} to='/about-us'>
                    <P1 className='bold'>পরিচিতি</P1>
                </NavLink>
                <NavLink className='mx-2' style={{textDecoration: 'none'}} to='/specialties'>
                    <P1 className='bold'>বিশেষজ্ঞ ডাক্তার</P1>
                </NavLink>
                <NavLink className='mx-2' style={{textDecoration: 'none'}} to='/payment'>
                    <P1 className='bold'>পেমেন্ট</P1>
                </NavLink>
                <NavLink style={{textDecoration: 'none'}} to='/contact-us'>
                    <P1 className='bold'>যোগাযোগ</P1>
                </NavLink>
            </HBox>
            <HBox>
                <Button className='bold' color='first' elevated>পেশেন্ট পোর্টাল</Button>
                <Button className='bold ml-3' color='third' elevated>ডাক্তার পোর্টাল</Button>
            </HBox>
        </Container>
    );
}

export default NavBar;