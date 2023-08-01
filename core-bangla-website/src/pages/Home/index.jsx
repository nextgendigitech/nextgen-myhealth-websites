import { VBox } from "../../components/Containers";
import Banner from "./components/Banner";
import ShortIntro from "./components/ShortIntro";



const Home = () => {
    return (
        <VBox>
            <Banner />
            <ShortIntro />
        </VBox>
    );
}

export default Home;