import { useEffect } from "react";

import { VBox } from "../../components/Containers";
import { H1 } from "../../components/Typography";
import Banner from './components/Banner';
import PaymentMethods from './components/PaymentMethods';

const Payment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <VBox>
            <Banner />
            <PaymentMethods />
        </VBox>
    );
}

export default Payment;