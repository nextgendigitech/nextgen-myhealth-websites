import styled from "styled-components";
import colors from "../../../config/colors";

import { HBox, VBox } from "../../../components/Containers";
import { H3, P1, P2, P3, P4 } from "../../../components/Typography";


const AffliationCard = styled(VBox)`
    width: 50%;
    height: auto;
    margin-left: 120px;
    background: ${colors.lightGrey};
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
`

const DetailCard = ({ qualification, affiliation }) => {
    return (
        <>
            <AffliationCard className="m-3 p-4" justify="center" align="center">
                <P2 className="bold">Affliliation(s):</P2>
            </AffliationCard>
            <AffliationCard className="m-3 p-4" justify="fles-end" align="center">
                <P2 className="bold">Chamber(s):</P2>
            </AffliationCard>
            <AffliationCard className="m-3 p-4" justify="center" align="center">
                <P2 className="bold">Other information:</P2>
                <P4>Joined Nextgen MyHealth: 2nd March, 2023</P4>
                <P4>Patient attended: 500</P4>
            </AffliationCard>
        </>
    );
}

export default DetailCard;