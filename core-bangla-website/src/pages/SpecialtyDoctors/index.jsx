import colors from "../../config/colors";
import styled from "styled-components";

import { useParams } from "react-router-dom";

import { HBox, VBox } from "../../components/Containers";
import { H3, P2 } from "../../components/Typography";
import DoctorCard from "./components/DoctorCard";


const TitleCard = styled(VBox)`
    width: 100%;
    height: 70px;
    background: ${colors.veryLightGreen};
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 30px;
`

const SpecialtyDoctors = () => {
    let { specialty } = useParams();

    const EnglishSpecialtyNames = ["Internal Medicine", "Cardiology", "Respiratory Medicine", 
                                    "Neurology", "Nephrology", "Gastroenterology", "Rheumatology", 
                                    "Hematology", "Endocrinology", "Psychiatry", "Pediatrics", 
                                    "Physical Medicine & Rehabilitation", 
                                    "Aesthetic Dermatology", "Dermatology & Venereology", 
                                    "Hepatology"];
    const A = ["ইন্টারনাল মেডিসিন", "হৃদরোগ", "কিডনি", "ফুসফুস", "বাতরোগ", "লিভার", "পরিপাকতন্ত্র", "স্নায়ুরোগ",
                "ক্যান্সার", "রক্তরোগ", "হরমোন", "চর্ম ও যৌনরোগ", "শিশুরোগ", "মনোরোগ", "ফিজিক্যাল মেডিসিন", 
                "এস্থেটিক ডার্মাটোলজি"]
    const BanglaSpecialtyNames = EnglishSpecialtyNames.map(number => "number * 2");
    console.log(BanglaSpecialtyNames);

    return (
        <VBox>
            <TitleCard className="mt-4" justify="center" align="center">
                <H3>{specialty}</H3>
            </TitleCard>
            <VBox style={{ paddingLeft: "120px" }}>
                <P2 className="bold mt-8">৯ জন চিকিৎসক পাওয়া গেছে</P2>
                <DoctorCard />
            </VBox>
        </VBox>
    );
}

export default SpecialtyDoctors;