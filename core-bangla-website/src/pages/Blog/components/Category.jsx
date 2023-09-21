import styled from "styled-components";

import { HBox, VBox } from "../../../components/Containers";
import { H3, P2, P3, P4 } from "../../../components/Typography";
import colors from "../../../config/colors";

const Chip = styled(HBox)`
    color: ${colors.veryLightGrey};
    /* width: 100%; */
    padding-left: 3px; 
    padding-right: 3px;
`
const HorizontalLine = styled.div`
    border-bottom: 1px solid ${colors.green};
    width: 100%;
    margin-bottom: 20px;
`

const VerticalLine = styled.div`
    border-left: 1px solid ${colors.green};
    margin-left: 8px;
`

const Category_list = ({isMobile, title, HorizontalLine, className }) => {
    return (
        <VBox>
            <P2 className="mb-2" style={{textAlign: "right"}}>{title}</P2>
            <HorizontalLine/>
        </VBox>
    );
}

const Category = ({isMobile}) => {
  return (
    <HBox>
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
            <Category_list 
                isMobile={isMobile}
                title="Fever"
                HorizontalLine={HorizontalLine}
            />
                        <Category_list 
                isMobile={isMobile}
                title="Dengue"
                HorizontalLine={HorizontalLine}
            />
                        <Category_list 
                isMobile={isMobile}
                title="Covid"
                HorizontalLine={HorizontalLine}
            />
                        <Category_list 
                isMobile={isMobile}
                title="Mental Illness"
                HorizontalLine={HorizontalLine}
            />
                        <Category_list 
                isMobile={isMobile}
                title="Anemia"
                HorizontalLine={HorizontalLine}
            />
        </VBox>
        <VerticalLine/>
    </HBox>
  )
}

export default Category