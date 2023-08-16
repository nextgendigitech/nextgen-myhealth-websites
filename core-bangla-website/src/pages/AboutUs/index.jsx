import { VBox } from "../../components/Containers";
import Banner from "./components/Banner";
import WhoWeAre from "./components/WhoWeAre";
import OurAdvantages from "./components/OurAdvantages";

const AboutUs = () => {
    return (
        <VBox>
            <Banner />
            <WhoWeAre />
            <OurAdvantages/>
        </VBox>
    );
}

export default AboutUs;