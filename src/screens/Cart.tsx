import CartProducts from "../components/Cart/CartProducts";
import Navbar from "../components/Navbar/Navbar";
import StripeContainer from "../components/Stripe/StripeContainer";

const Cart = () => {
    return <div className="cart-screen">
        <Navbar />
        <div className="container">
            <div className="cart-wrapper">
                <CartProducts />
                <StripeContainer />
            </div>
        </div>
    </div>
}

export default Cart;