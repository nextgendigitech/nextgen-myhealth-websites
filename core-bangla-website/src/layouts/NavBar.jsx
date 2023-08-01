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
    background-color: rgba(40, 193, 253, 0.05);
`

const LogoImage = styled.img`
    height: 80px;
`

const NavBar = () => {
    return (
        <Container justify='center' align='center'>
            <LogoImage className='mr-8' src={logo}/>
            <NavLink className='bold' style={{textDecoration: 'none'}} to='/'>
                <P1>হোম</P1>
            </NavLink>
            <NavLink className='bold' style={{textDecoration: 'none'}} to='/about-us'>
                <P1 className='mx-1'>পরিচিতি</P1>
            </NavLink>
            <NavLink className='bold' style={{textDecoration: 'none'}} to='/specialties'>
                <P1 className='mx-1'>বিশেষজ্ঞ ডাক্তার</P1>
            </NavLink>
            <NavLink className='bold' style={{textDecoration: 'none'}} to='/payment'>
                <P1 className='mx-1'>পেমেন্ট</P1>
            </NavLink>
            <NavLink className='bold' style={{textDecoration: 'none'}} to='/contact-us'>
                <P1 className='mx-1'>যোগাযোগ</P1>
            </NavLink>
            <Button className='bold ml-3' color='first' elevated>পেশেন্ট পোর্টাল</Button>
            <Button className='bold ml-3' color='third' elevated>ডাক্তার পোর্টাল</Button>
        </Container>
    );
}

export default NavBar;