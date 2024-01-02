import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import { HBox, VBox } from "../../../components/Containers";
import { H2, P2, P3, P4 } from "../../../components/Typography";
import colors from "../../../config/colors";

const Chip = styled(HBox)`
    background-color: ${props => props.background};  // Caution! This prop must be a hex color.
    border-radius: 5px;
    block-size: fit-content;
`

const HorizontalLine = styled.div`
    border-bottom: 1px solid ${colors.green};
    width: 100%;
    margin-bottom: 20px;
`

const Category = ({ isMobile, selectedCategory, setSelectedCategory, setPage }) => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchBlogCategory();
    }, [1]);

    const fetchBlogCategory = () => {
        setIsLoading(true);
        axios({
            method: 'GET',
            url: `${import.meta.env.VITE_SERVER_URL}/website/blog-category-list/`,
            params: {
                offset: 0,
                limit: 1000
            },
        })
        .then((response) => {
            setIsLoading(false);
            if (response.status === 200) {
                setCategories(response.data);
            } else {
                console.log('BLOG CATEGORY LIST FETCH FAILED', response.status);
            }
        })
        .catch((error) => {
            setIsLoading(false);
            console.log('BLOG CATEGORY LIST FETCH ERROR', error);
        })
    }

    const handleCategorySelection = (category) => {
        setSelectedCategory(category);
        setPage(1);
    };

    return (
        <>
            {
                isMobile ? (
                    <VBox>
                        <HBox align='center' className="mb-3">
                            <Chip background={colors.lessDarkGrey} className="mr-2 px-2 py-1">
                                <P2
                                    className="bold"
                                    color='white'
                                > 
                                    Category
                                </P2>
                            </Chip>
                            <HBox className={isMobile? "mt-1" : ""}>
                                <Chip background={!selectedCategory ? colors.blue : colors.green} className="mr-1 px-1 clickable">
                                        <P3
                                            className="bold"
                                            color='white'
                                            onClick={() => handleCategorySelection("")}
                                        >
                                            All
                                        </P3>
                                </Chip>
                                {categories.map((category) => (
                                    <Chip background={selectedCategory===category.name ? colors.blue : colors.green} className="mr-1 mb-1 px-1 clickable">
                                        <P3
                                            className="bold"
                                            color='white'
                                            onClick={() => handleCategorySelection(category.name)}
                                        >
                                            {category.name}
                                        </P3>
                                    </Chip>
                                ))}
                            </HBox>
                        </HBox>
                        <HorizontalLine/>
                    </VBox>
                ) : (
                    <HBox style={{ flexWrap: "nowrap" }}>
                        <VBox className="mr-3" >
                            <Chip background={colors.lessDarkGrey} className="ml-1 mb-5 px-4 py-2">
                                <P2
                                    className="bold"
                                    color='white'
                                > 
                                    Category
                                </P2>
                            </Chip>
                            <P2
                                onClick={() => handleCategorySelection("")}
                                className="mb-2"
                                color={!selectedCategory ? 'first' : 'default'}
                                style={{textAlign: "right", cursor: "pointer"}}
                            >
                                All
                            </P2>
                            {categories.map((category, index) => (
                                <>
                                    <HorizontalLine/>
                                    <P2 
                                        className="mb-2"
                                        color={category.name === selectedCategory ? 'first' : 'default'}
                                        onClick={() => handleCategorySelection(category.name)}
                                        style={{textAlign: "right", cursor: "pointer" }}>
                                        {category.name}
                                    </P2>
                                </>
                            ))}
                        </VBox>
                    </HBox>
                )
            }
        </>
    )
}

export default Category;