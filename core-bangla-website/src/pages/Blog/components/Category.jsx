import styled from "styled-components";

import { HBox, VBox } from "../../../components/Containers";
import { H2, P2, P3, P4 } from "../../../components/Typography";
import colors from "../../../config/colors";

const Chip = styled(HBox)`
    color: ${colors.veryLightGrey};
    padding-left: 3px; 
    padding-right: 3px;
`
const HorizontalLine = styled.div`
    border-bottom: 1px solid ${colors.green};
    width: 100%;
    margin-bottom: 20px;
`

const Category = ({isMobile, data}) => {
    return (
        <>
            {
                isMobile ? (
                    <HBox>
                        <Chip className="mb-3 mr-2">
                            <P2
                                className="bold px-2 py-1"
                                color= {colors.white}
                                style={{
                                    backgroundColor: colors.lessDarkGrey,
                                    borderRadius: "5px",
                                }}
                            > 
                                Category
                            </P2>
                        </Chip>
                        <HBox>
                            {data.map((categorydata, index) => (
                                <Chip style={{ justifyContent: "center", alignContent: "center" }}>
                                    <P2 className="bold px-1 mr-1 mb-3" 
                                        color="white" 
                                        style={{ backgroundColor: colors.green, borderRadius: "5px" }} 
                                    >{categorydata.name}</P2>
                                </Chip>
                            ))} 
                        </HBox>
                        <HorizontalLine/>
                    </HBox>
                ) : (
                    <HBox style={{ flexWrap: "nowrap" }}>
                        <VBox className="mr-3" >
                            <Chip className="ml-1 mb-5">
                                <P2
                                    className="bold px-4 py-2"
                                    color= {colors.white}
                                    justify="center"
                                    align="center"
                                    style={{
                                        backgroundColor: colors.lessDarkGrey,
                                        borderRadius: "5px",
                                    }}
                                > 
                                    Category
                                </P2>
                            </Chip>
                            {data.map((categorydata, index) => (
                                <>
                                    <P2 className="mb-2" style={{textAlign: "right"}}>
                                        {categorydata.name}
                                    </P2>
                                    <HorizontalLine/>
                                </>
                            ))}      
                        </VBox>
                    </HBox>
                )
            }
        </>
    )
}

export default Category