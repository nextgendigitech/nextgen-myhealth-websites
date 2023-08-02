import { VBox } from "../../components/Containers";
import Banner from "./components/Banner";
import ShortIntro from "./components/ShortIntro";
import CustomerReview from "./components/CustomerReview";
import JoinDoctor from "./components/JoinDoctor";

const Home = () => {
    return (
        <VBox>
            <Banner />
            <ShortIntro />
            <CustomerReview />
            <JoinDoctor />
        </VBox>
    );
}

export default Home;