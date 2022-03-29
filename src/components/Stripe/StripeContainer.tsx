import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const pb = "pk_test_51Jq1auLN1YwDHD9Vsqv9LnPmUldPuGSbmGVV7eIF50YS5dROGti7kFjQEBi8OOMTpgLZh8QpK8BGhXNn77IpjBzt00duuSlVpd"

const stripePromise = loadStripe(pb)

const StripeContainer = () => {
    return (
        <Elements stripe={stripePromise} options={{  }}>
            <CheckoutForm />
        </Elements>
    )
}

export default StripeContainer