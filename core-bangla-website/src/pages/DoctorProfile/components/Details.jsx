import styled from "styled-components";

import { VBox } from "../../../components/Containers";
import { P2, P3 } from "../../../components/Typography";
import colors from "../../../config/colors";
import { getDate } from "../../../utils";

const Card = styled(VBox)`
    width: 65%;
    height: auto;
    background: ${colors.lightGrey};
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
`

const Details = ({ chambers, affiliations, attended, created_at }) => {
    return (
        <>
            {(affiliations.length > 0) && (
                <Card className="my-4 p-4" justify="center">
                    <P2 className="bold">Affliliation(s):</P2>
                    <P3 className="ml-6 px-2">{affiliations.map((affiliation, index) => (
                        <li className="my-2" key={index}>
                            {affiliation.designation}, {affiliation.department}, {affiliation.institution}
                        </li>
                    ))}</P3>
                </Card>
            )}
            {(chambers.length > 0) && (chambers[0].address.length > 0) && (
                <Card className="my-4 p-4" justify="center" style={{ alignSelf: 'flex-end' }}>
                    <P2 className="bold">Chamber(s):</P2>
                    <P3 className="ml-6 px-2">{chambers.map((chamber, index) => (
                        <li className="my-2" key={index}>
                            {chamber.address}
                        </li>
                    ))}</P3>
                </Card>
            )}
            <Card className="my-4 p-4" justify="center">
                <P2 className="bold">Other information:</P2>
                <li className="ml-6 pt-2">Joined Nextgen MyHealth: {getDate(created_at, 'long')}</li>
                <li className="ml-6 pt-2">Patient attended: {attended}</li>
            </Card>
        </>
    );
}

export default Details;