import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';

import { HBox, VBox } from "../../../components/Containers";
import { H3, P2, P3, P4 } from "../../../components/Typography";
import colors from "../../../config/colors";
import { Button } from '../../../components/Buttons';
import bp from "../../../assets/images/blood_pressure.png";

const SearchBar = styled(Button)`
    background-color: ${colors.lightGrey};
    border: 1px solid ${colors.grey};
    box-shadow: 0px 2px 3px ${colors.grey};
    flex-shrink: 0;
    border-radius: 10px;
    width: 200px;

    &:hover {
        background-color: ${colors.lightGrey};
        color: ${colors.darkGrey};
    }
`

const Image = styled.img`
    width: 25%;
`

const ContentContainer = styled(VBox)`
    width: 100%;

`

const ContentCard = ({ image, title, detail, isMobile }) => {
    return (
        <HBox className="p-3 my-2" style={{ width: "60%" }}>
            <Image className="mb-2" src={image} />
            <VBox>
                <P2 className="bold mb-2">{title}</P2>
                <P3>{detail}</P3>
            </VBox>
        </HBox>
    );
}

const Contents = ({isMobile}) => {
  return (
    <VBox className="ml-3">
        <SearchBar
            size='sm'
            // onClick={() => setOpenSearchDlg(true)}
        >
            <P2>অনুসন্ধান করুন</P2>
            <BiSearchAlt2 className={isMobile ? '' : 'ml-4'} />
        </SearchBar>
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