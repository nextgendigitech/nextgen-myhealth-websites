import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

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

const Category = ({ isMobile, clear, selectedCategory }) => {
    const [blogCategory, setBlogCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchBlogCategory();
    }, [1]);

    const fetchBlogCategory = () => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url: `${import.meta.env.VITE_SERVER_URL}/website/blog-category/`,
            params: {
                offset: 0,
                limit: 1000
            },
        })
        .then((response) => {
            setIsLoading(false);
            if (response.status === 200) {
                setBlogCategory(response.data);
            } else {
                console.log('BLOG CATEGORY LIST FETCH FAILED', response.status);
            }
        })
        .catch((error) => {
            setIsLoading(false);
            console.log('BLOG CATEGORY LIST FETCH ERROR', error);
        })
    }

    const handleCategoryClick = (categorydata) => {
        selectedCategory(categorydata);
    };

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
                            {blogCategory.map((categorydata, index) => (
                                <Chip style={{ justifyContent: "center", alignContent: "center" }}>
                                    <P3 className="bold px-1 mr-1 mb-3" 
                                        color="white" 
                                        onClick={() => handleCategoryClick(categorydata)}
                                        style={{ backgroundColor: colors.green, borderRadius: "5px", textAlign: "right", cursor: "pointer" }} 
                                    >
                                        {categorydata.name}
                                    </P3>
                                </Chip>
                            ))}
                            <P2 
                                color="first"
                                onClick={clear} 
                                className="mb-2" 
                                style={{textAlign: "right", cursor: "pointer"}}
                            >
                                See All
                            </P2>
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
                            {blogCategory.map((categorydata, index) => (
                                <>
                                    <P2 
                                        className="mb-2"
                                        onClick={() => handleCategoryClick(categorydata)}
                                        style={{textAlign: "right", cursor: "pointer" }}>
                                        {categorydata.name}
                                    </P2>
                                    <HorizontalLine/>
                                </>
                            ))}
                            <P2 
                                color="first"
                                onClick={clear} 
                                className="mb-2" 
                                style={{textAlign: "right", cursor: "pointer"}}
                            >
                                See All
                            </P2>
                        </VBox>
                    </HBox>
                )
            }
        </>
    )
}

export default Category