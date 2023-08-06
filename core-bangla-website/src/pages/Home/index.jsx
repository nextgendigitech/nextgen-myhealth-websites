import { VBox } from "../../components/Containers";
import Banner from "./components/Banner";
import ShortIntro from "./components/ShortIntro";
import SpecialtiesSummary from "./components/SpecialtiesSummary";
import BookingSteps from "./components/BookingSteps";
import CustomerReview from "./components/CustomerReview";
import JoinDoctor from "./components/JoinDoctor";

const Home = () => {
    return (
        <VBox>
            <Banner />
            <ShortIntro />
            <SpecialtiesSummary />
            <BookingSteps />
            <CustomerReview />
            <JoinDoctor />
        </VBox>
    );
}

export default Home;