import styled from 'styled-components';
import colors from "../../config/colors";

import { VBox } from "../../components/Containers";
import { H3, H6, P3 } from "../../components/Typography";
import { privacyPolicyData } from '../../data';

const VContainer = styled(VBox)`
    margin-top: 72px;
    margin-left: 120px;
    margin-right: 120px;
`

const Line = styled.div`
    width: 100%;
    border-bottom: 1px solid ${colors.grey};
    margin-top: 16px;
`

const TitleCard = styled(VBox)`
    width: 100%;
    height: 70px;
    background: ${colors.veryLightGreen};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 30px;
`

const PrivacyPolicy = () => {
    return (
        <VBox>
            <TitleCard className="mt-4" justify="center" align="center">
                <H3 className="bold" color="third">গোপনীয়তা নীতিমালা</H3>
            </TitleCard>
            <VBox>
                {Object.keys(privacyPolicyData).map((key) => ( 
                    <VContainer>
                        <H6 color='third' className="bold">{key}</H6>
                        <Line className='mb-0_5' />
                        {privacyPolicyData[key].map((paragraph) => (
                            <P3 className='mt-4 mx-3' style={{ textAlign: 'justify' }}>{paragraph}</P3>
                        ))}
                    </VContainer>
                ))}
            </VBox>
        </VBox> 
    );
}

export default PrivacyPolicy;