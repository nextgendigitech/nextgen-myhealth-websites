import styled from "styled-components";

import { VBox } from "../../../components/Containers";
import { P2, P3 } from "../../../components/Typography";
import colors from "../../../config/colors";
import { getDate } from "../../../utils";

const Card = styled(VBox)`
    width: 65%;
    background: ${colors.lightGrey};
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
`

const Details = ({ chambers, affiliations, attended, created_at, isMobile }) => {
    return (
        <>
            {(affiliations.length > 0) && (
                <Card className="p-3" justify="center" style={{ margin: isMobile ? "16px 0px" : "24px 0px", width: isMobile ? "100%" : "65%"  }}>
                    <P2 className="bold">Affliliation(s):</P2>
                    <P3 style={{ marginLeft: isMobile ? "24px" : "48px" }}>{affiliations.map((affiliation, index) => (
                        <li className="my-2" key={index}>
                            {affiliation.designation}, {affiliation.department}, {affiliation.institution}
                        </li>
                    ))}</P3>
                </Card>
            )}
            {(chambers.length > 0) && (chambers[0].address.length > 0) && (
                <Card 
                    className="p-3" 
                    justify="center" 
                    style={{ marginTop: isMobile ? "0px" : "24px", 
                            marginBottom: isMobile ? "16px" : "24px", 
                            alignSelf: 'flex-end', 
                            width: isMobile ? "100%" : "65%"  
                            }}>
                    <P2 className="bold">Chamber(s):</P2>
                    <P3 style={{ marginLeft: isMobile ? "24px" : "48px" }}>{chambers.map((chamber, index) => (
                        <li className="my-2"  key={index}>
                            {chamber.address}
                        </li>
                    ))}</P3>
                </Card>
            )}
            <Card className="p-3" justify="center" style={{ marginTop: isMobile ? "0px" : "24px", width: isMobile ? "100%" : "65%"  }}>
                <P2 className="bold">Other information:</P2>
                <P3 style={{ marginLeft: isMobile ? "24px" : "48px" }}>
                    <li className="pt-2">Joined Nextgen MyHealth: {getDate(created_at, 'long')}</li>
                    <li className="pt-2">Patient attended: {attended}</li>
                </P3>
            </Card>
        </>
    );
}

export default Details;