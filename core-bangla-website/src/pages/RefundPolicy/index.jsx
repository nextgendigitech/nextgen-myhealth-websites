import { useState, useEffect } from "react";
import styled from 'styled-components';
import { BiArrowBack } from "react-icons/bi";

import colors from "../../config/colors";
import { VBox, HBox } from "../../components/Containers";
import { H3, H6, P3 } from "../../components/Typography";
import { refundPolicyData } from '../../data';
import responsive from '../../config/responsive';
import { footerData } from '../../data';
import { connect } from 'react-redux';


const Line = styled.div`
    width: 100%;
    border-bottom: 1px solid ${colors.grey};
`

const TitleCard = styled(HBox)`
    width: 100%;
    height: 70px;
    background: ${colors.veryLightGreen};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 30px;
`

const RefundPolicy = ({language}) => {
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

    const goBack = () => {
        window.history.back();
    }

    return (
        <VBox style={{ backgroundColor: colors.lightGrey }}>
            <TitleCard className={isMobile ? "mt-2" : "mt-4"} justify="space-between" align="center" style={{ height: isMobile ? '40px' : '70px', borderRadius: isMobile ? '0px 15px' : '0px 30px'}}>
                <BiArrowBack 
                    className={isMobile ? "ml-2" : "ml-8"}
                    justify="center" 
                    style={{ cursor: "pointer" }} 
                    onClick={goBack} 
                />
                <H3 className="bold" color="third">{footerData.footer3[language]}</H3>
                <HBox />
            </TitleCard>
            <VBox className={isMobile ? "my-3" : "my-8 py-1"}
                style={{ paddingLeft: isMobile ? "15px" : "100px", paddingRight: isMobile ? "15px" : "100px" }}>
                {Object.keys(refundPolicyData).map((key) => ( 
                    <VBox className={isMobile ? "mb-2" : "mb-6"}>
                        <H6 color='third'>{key}</H6>
                        <Line className={isMobile ? "" : "mb-0_5"} />
                        {refundPolicyData[key].map((paragraph) => (
                            <P3 className={isMobile ? "mt-2 mx-1" : 'mt-4 mx-3'} style={{ textAlign: 'justify' }}>{paragraph}</P3>
                        ))}
                    </VBox>
                ))}
            </VBox>
        </VBox> 
    );
}

const mapStateToProps = state => ({
    language: state.general.language,
});

export default connect(mapStateToProps, {})(RefundPolicy);