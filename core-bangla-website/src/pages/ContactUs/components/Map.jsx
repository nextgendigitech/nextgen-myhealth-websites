import styled from 'styled-components';

import { HBox } from '../../../components/Containers';

const Container = styled(HBox)`
    width: 100%;
`

const Map = ({isMobile}) => {
    return (
        <Container style={{ marginBottom: isMobile ? "30px" : "120px" }}>
            <iframe style={{ width: "100%", height: isMobile? "300px" : "500px" }} 
                src="https://maps.google.com/maps?&amp;&amp;hl=en&amp;q=Tool%20%26%20Technology%20Institute%20(TTI)%2C%20BITAC%20-%20%E0%A6%9F%E0%A7%81%E0%A6%B2%20%E0%A6%8F%E0%A6%A8%E0%A7%8D%E0%A6%A1%20%E0%A6%9F%E0%A7%87%E0%A6%95%E0%A6%A8%E0%A7%8B%E0%A6%B2%E0%A6%9C%E0%A6%BF%20%E0%A6%87%E0%A6%A8%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%BF%E0%A6%9F%E0%A6%BF%E0%A6%89%E0%A6%9F%20(%E0%A6%9F%E0%A6%BF%E0%A6%9F%E0%A6%BF%E0%A6%86%E0%A6%87)%2C%20%E0%A6%AC%E0%A6%BF%E0%A6%9F%E0%A6%BE%E0%A6%95%2C%20Dhaka%201208+(Tool%20%26%20Technology%20Institute%20(TTI)%2C%20BITAC%20-%20%E0%A6%9F%E0%A7%81%E0%A6%B2%20%E0%A6%8F%E0%A6%A8%E0%A7%8D%E0%A6%A1%20%E0%A6%9F%E0%A7%87%E0%A6%95%E0%A6%A8%E0%A7%8B%E0%A6%B2%E0%A6%9C%E0%A6%BF%20%E0%A6%87%E0%A6%A8%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%BF%E0%A6%9F%E0%A6%BF%E0%A6%89%E0%A6%9F%20(%E0%A6%9F%E0%A6%BF%E0%A6%9F%E0%A6%BF%E0%A6%86%E0%A6%87)%2C%20%E0%A6%AC%E0%A6%BF%E0%A6%9F%E0%A6%BE%E0%A6%95%2C%20Dhaka%201208)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed">
            </iframe>
        </Container>
    );
}

export default Map;