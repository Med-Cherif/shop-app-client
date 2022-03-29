import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


interface IProps {
    [field: string]: any;
}

const CartProduct = ({ name, image, price, qty, totalQty }: IProps) => {

    const [quantity, setQuantify] = useState(qty as number);

    const increaseQty = () => {
        setQuantify((prev) => {
            if ((prev < totalQty) && (prev < 9)) {
                return prev + 1;
            }
            return prev;
        })
    }

    const removeProduct = () => {
        console.log('remove product')
    }

    const decreaseQty = () => {
        setQuantify((prev) => {
            if (prev === 1) {
                removeProduct();
                return prev;
            }
            return prev - 1;
        })
    }

    return (
        <div className="cart-product">
            <div className="cart-product-wrapper">
                <img className="cart-product-image" src={image} alt="" />
                <div className="cart-product-infos">
                    <h2 className="cart-product-name">{name}</h2>
                    <span className="cart-product-price">{price}$</span>
                </div>
            </div>
            <div className="cart-product-qty">
                <AiOutlineMinus onClick={decreaseQty} className="cart-product-qty-icon" />
                <span className="cart-product-qty-value">{quantity}</span>
                <AiOutlinePlus onClick={increaseQty} className="cart-product-qty-icon" />
            </div>
            <p className="cart-product-total-price">{price * quantity}$</p>
            <div className="cart-product-remove">
                <button className="cart-product-remove-btn">Remove</button>
            </div>
        </div>
    )
}

export default CartProduct