import styled from "styled-components";

import { VBox, HBox } from "../../../components/Containers";
import SpecialtyCard from './SpecialtyCard';
import internalMedicine from '../../../assets/images/internal_medicine_2.png';

const Container = styled(VBox)`
    padding-left: 120px;
    padding-right: 120px;
`

const MedicineSection = () => {
    return (
        <Container>
            <HBox justify='space-between'>
                <SpecialtyCard></SpecialtyCard>
                <SpecialtyCard></SpecialtyCard>
                <SpecialtyCard></SpecialtyCard>
                <SpecialtyCard></SpecialtyCard>
                <SpecialtyCard></SpecialtyCard>
            </HBox>

        </Container>
    );
}

export default MedicineSection;