import styled from 'styled-components';

import colors from "../../config/colors";
import { VBox } from "../../components/Containers";
import { H3, H6, P3 } from "../../components/Typography";

const VContainer = styled(VBox)`
    margin-top: 72px;
    margin-left: 120px;
    margin-right: 120px;
`

const TitleCard = styled(VBox)`
    width: 100%;
    height: 70px;
    background: ${colors.veryLightGreen};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 30px;
`

const index = () => {
    return (
        <VBox>
            <TitleCard className="mt-4" justify="center" align="center">
                <H3 className="bold" color="third">আমার স্বাস্থ্য</H3>
            </TitleCard>
        </VBox> 
    );
}

export default index;