import styled from "styled-components";

import { VBox } from "../../../components/Containers";
import { P2, P3 } from "../../../components/Typography";
import colors from "../../../config/colors";
import { getDate } from "../../../utils";
import { doctorProfile } from "../../../data";

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
                <Card className={isMobile ? "p-3 my-2" : "p-3 my-3"} justify="center" style={{width: isMobile ? "100%" : "65%"  }}>
                    <P2 className="bold">{doctorProfile.details.head1["bang"]}</P2>
                    <P3 className={isMobile ? "ml-3" : "ml-6"} >{affiliations.map((affiliation, index) => (
                        <li className="my-2" key={index}>
                            {affiliation.designation ? affiliation.designation+", " : ""}
                            {affiliation.department ? affiliation.department+", " : ""}
                            {affiliation.institution}
                        </li>
                    ))}</P3>
                </Card>
            )}
            {(chambers.length > 0) && (chambers[0].address.length > 0) && (
                <Card 
                    className={isMobile ? "p-3 mb-2" : "p-3 my-3"} 
                    justify="center" 
                    style={{alignSelf: "flex-end", 
                            width: isMobile ? "100%" : "65%"  
                            }}>
                    <P2 className="bold">{doctorProfile.details.head2["bang"]}</P2>
                    <P3 className={isMobile ? "ml-3" : "ml-6"}>{chambers.map((chamber, index) => (
                        <li className="my-2"  key={index}>
                            {chamber.address}
                        </li>
                    ))}</P3>
                </Card>
            )}
            <Card className={isMobile ? "p-3" : "p-3 mt-3"} justify="center" style={{ width: isMobile ? "100%" : "65%"  }}>
                <P2 className="bold">{doctorProfile.details.head3["bang"]}</P2>
                <P3 className={isMobile ? "ml-3" : "ml-6"}>
                    <li className="pt-2">{doctorProfile.details.para1["bang"]} {getDate(created_at, "long")}</li>
                    <li className="pt-2">{doctorProfile.details.para2["bang"]} {attended}</li>
                </P3>
            </Card>
        </>
    );
}

export default Details;