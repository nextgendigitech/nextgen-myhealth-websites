import styled from 'styled-components';

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

const TopBar = () => {
    return (
        <Container justify='center' align='center'>
            <P1>This is topbar</P1>
        </Container>
    );
}

export default TopBar;