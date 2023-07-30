import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { HBox } from '../components/Containers';
import { P1 } from '../components/Typography';
import colors from '../config/colors';

const Container = styled(HBox)`
    position: sticky;
    top: 0px;
    height: 60px;
    width: 100%;
    border: 1px solid ${colors.grey};
`

const NavBar = () => {
    return (
        <Container justify='center' align='center'>
            <NavLink to='/'>
                <P1>হোম</P1>
            </NavLink>
            <NavLink to='/about-us'>
                <P1 className='mx-1'>পরিচিতি</P1>
            </NavLink>
            <NavLink to='/specialties'>
                <P1 className='mx-1'>বিশেষজ্ঞ ডাক্তার</P1>
            </NavLink>
            <NavLink to='/payment'>
                <P1 className='mx-1'>পেমেন্ট</P1>
            </NavLink>
            <NavLink to='/contact-us'>
                <P1 className='mx-1'>যোগাযোগ</P1>
            </NavLink>
        </Container>
    );
}

export default NavBar;