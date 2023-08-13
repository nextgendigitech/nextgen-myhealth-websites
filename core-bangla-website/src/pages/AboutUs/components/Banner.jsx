import styled from "styled-components";

import colors from "../../../config/colors";
import aboutus_banner from "../../../assets/images/aboutus_banner.png"

const BannerImage = styled.img`
    height: auto;
    width: 100%;
`

const Banner = () => {
    return (
        <BannerImage src={aboutus_banner} />
    );
}

export default Banner;