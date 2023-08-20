import { VBox } from "../../components/Containers";
import { H1 } from "../../components/Typography";
import Banner from './components/Banner';
import PaymentMethods from './components/PaymentMethods';

const Payment = () => {
    return (
        <VBox>
            <Banner></Banner>
            <PaymentMethods></PaymentMethods>
        </VBox>
    );
}

export default Payment;