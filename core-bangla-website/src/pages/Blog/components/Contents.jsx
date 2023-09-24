import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";

import { HBox, VBox } from "../../../components/Containers";
import { H3, P2, P3, P4 } from "../../../components/Typography";
import colors from "../../../config/colors";
import { Button } from "../../../components/Buttons";
import bp from "../../../assets/images/blood_pressure.png";

const SearchBar = styled(Button)`
    width: fit-content;
    height: 2.5em;
    background-color: ${colors.lightGrey};
    border: 1px solid ${colors.grey};
    border-radius: 10px;
    box-shadow: 0px 2px 3px ${colors.grey};
    font-size: 1rem;

    &:hover {
        background-color: ${colors.lightGrey};
        color: ${colors.darkGrey};
    }
`

const Image = styled.img`
    width: 25%;
`

const HorizontalLine = styled.div`
    border-bottom: 1px solid ${colors.green};
    width: 100%;
`

const ContentCard = ({ image, title, detail, isMobile }) => {
    return (
        <Link
            className='clickable'
            to={`/blog-content/${title}`}
            style={{ textDecoration: 'none' }}
        >
            <VBox>
                <HBox className={isMobile ? "mt-2" : "my-2"} style={{ width: "100%" }}>
                    <Image src={image} style={{ width: isMobile ? "100%" : "28%" }}/>
                    <VBox className={isMobile ? "" : "ml-2 pl-2"} style={{ width: isMobile ? "100%" : "70%" }}>
                        <P2 className="bold mb-2">{title}</P2>
                        <P3>{detail}</P3>
                    </VBox>
                </HBox>
                <HorizontalLine className="my-2" />
            </VBox>
        </Link>
    );
}

const Contents = ({isMobile}) => {
  return (
    <VBox className={isMobile ? "" : "ml-4"}>
        <SearchBar className={isMobile ? "mb-4" : "mb-6"} size="sm"> 
            <P2>অনুসন্ধান করুন</P2>
            <BiSearchAlt2 className="ml-3" />
        </SearchBar>
        <HorizontalLine className="mb-2" />
        <ContentCard
            isMobile={isMobile}
            image={bp}
            title="কানে পানি গেলে কি বের করে আনাটা জরুরি"
            detail="হঠাৎ করে কানে পানি যেতেই পারে। এতে ভয়ের কিছু নেই। অনেকেই মনে করেন, কানে পানি গেলেই কানের ক্ষতি হয়ে যাবে। এই ধারণাটির কোনো বৈজ্ঞানিক ভিত্তিই নেই। 
                    সুস্থ কানে পানি গেলে আদতে কোনো অসুস্থতাই সৃষ্টি হয় না। তবে সুস্থ কানে পানি গেলে বের করার চেষ্টা করতে গেলেই বাধে বিপত্তি। যেসব কাজ থেকে বিরত থাকতে হবে:
                    কানে পানি গেলে ভয় পাওয়া যাবে না;
                    কান থেকে পানি বের করার কোনো চেষ্টাও করা যাবে না;
                    নাক চেপে ধরে কান দিয়ে বাতাস বের করার চেষ্টা করেন অনেকেই। প্রচলিত বিশ্বাস হলো এভাবে বাতাসের চাপে কানের পানি বেরিয়ে আসবে। 
                    এ ধরনের প্রচেষ্টায় ..."
        />
        <ContentCard
            isMobile={isMobile}
            image={bp}
            title="3 Simple Changes to lower Blood Pressure"
            detail="Hypertension or high blood pressure can lead to severe health problems including heart attacks and stroke. 
            Aneurysms can also form, which means the blood vessel walls can weaken and bulge out -- and if they rupture, 
            that could cause.... Hypertension or high blood pressure can lead to severe health problems including heart attacks and stroke. 
            Aneurysms can also form, which means the blood vessel walls can weaken and bulge out -- and if they rupture, 
            that could cause..."
        />
        <ContentCard
            isMobile={isMobile}
            image={bp}
            title="3 Simple Changes to lower Blood Pressure"
            detail="Hypertension or high blood pressure can lead to severe health problems including heart attacks and stroke. 
            Aneurysms can also form, which means the blood vessel walls can weaken and bulge out -- and if they rupture, 
            that could cause.... Hypertension or high blood pressure can lead to severe health problems including heart attacks and stroke. 
            Aneurysms can also form, which means the blood vessel walls can weaken and bulge out -- and if they rupture, 
            that could cause..."
        />
    </VBox>
  )
}

export default Contents