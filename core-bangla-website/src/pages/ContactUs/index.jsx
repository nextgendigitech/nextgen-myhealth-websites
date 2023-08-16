import { useEffect } from "react";

import { VBox } from "../../components/Containers";
import Map from "./components/Map";
import Form from "./components/Form";

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <VBox>
            <Map />
            <Form />
        </VBox>
    );
}

export default ContactUs;