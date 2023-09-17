import { useState, useEffect } from "react";
import styled from 'styled-components';
import colors from "../../config/colors";

import { VBox } from "../../components/Containers";
import { H3, H6, P3 } from "../../components/Typography";
import { termsAndConditionsData } from '../../data';
import responsive from '../../config/responsive';

const Line = styled.div`
    width: 100%;
    border-bottom: 1px solid ${colors.grey};
    margin-top: 16px;
`

const TitleCard = styled(VBox)`
    width: 100%;
    background: ${colors.veryLightGreen};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`

const TermsConditions = () => {
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
            <TitleCard className="mt-4" justify="center" align="center" style={{ marginTop: isMobile ? "16px" : "32px", height: isMobile ? '40px' : '70px', borderRadius: isMobile ? '0px 15px' : '0px 30px'}}>
                <H3 className="bold" color="third">নিয়ম ও শর্তাবলী</H3>
            </TitleCard>
            <VBox>
                {Object.keys(termsAndConditionsData).map((key) => ( 
                    <VBox style={{ margin: isMobile ? "0px 30px" : "0px 120px", marginTop: isMobile ? "24px" : "72px" }}>
                        <H6 color='third' className="bold">{key}</H6>
                        <Line className='mb-0_5' />
                        {termsAndConditionsData[key].map((paragraph) => (
                            <P3 className='mt-4 mx-3' style={{ textAlign: 'justify' }}>{paragraph}</P3>
                        ))}
                    </VBox>
                ))}
            </VBox>
        </VBox> 
    );
}

export default TermsConditions;