import { useState, useEffect } from "react";
import styled from 'styled-components';

import colors from "../../config/colors";
import { VBox } from "../../components/Containers";
import { H3, H6, P3 } from "../../components/Typography";
import { privacyPolicyData } from '../../data';
import responsive from '../../config/responsive';

const Line = styled.div`
    width: 100%;
    border-bottom: 1px solid ${colors.grey};
    margin-top: 3%;
`

const TitleCard = styled(VBox)`
    width: 100%;
    background: ${colors.veryLightGreen};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`

const PrivacyPolicy = () => {
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

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <VBox>
            <TitleCard className={isMobile ? "mt-2" : "mt-4"} justify="center" align="center" style={{ height: isMobile ? '40px' : '70px', borderRadius: isMobile ? '0px 15px' : '0px 30px'}}>
                <H3 className="bold" color="third">গোপনীয়তা নীতিমালা</H3>
            </TitleCard>
            <VBox className={isMobile ? "mx-2 my-3" : "m-8 px-7 py-1"}>
                {Object.keys(privacyPolicyData).map((key) => ( 
                    <VBox className={isMobile ? "mb-2" : "mb-6"}>
                        <H6 color='third' className="bold">{key}</H6>
                        <Line className={isMobile ? "" : "mb-0_5"} />
                        {privacyPolicyData[key].map((paragraph) => (
                            <P3 className={isMobile ? "mt-2 mx-3" : 'mt-4 mx-3'} style={{ textAlign: 'justify' }}>{paragraph}</P3>
                        ))}
                    </VBox>
                ))}
            </VBox>
        </VBox> 
    );
}

export default PrivacyPolicy;