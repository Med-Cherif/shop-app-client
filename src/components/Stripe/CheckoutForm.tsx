import "./CheckoutForm.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!stripe || !elements) return;

    }
    return (
        <form className="checkout-form">
            <CardElement />
            <button className="purchase-btn">Purchase</button>
        </form>
    )
}

export default CheckoutForm