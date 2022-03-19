import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface IProps {
    allQty: number;
    price: number
}

const ProductOrderState = ({ allQty, price }: IProps) => {
    const [qty, setQty] = useState(1);

    const increaseQty = () => {
        setQty((prev) => {
            if (prev === allQty) return prev;
            return prev + 1;
        });
    }

    const decreaseQty = () => {
        setQty((prev) => {
            if (prev === 1) return prev;
            return prev - 1;
        })
    }

    return (
        <div className='product-order-state'>
            <div className="product-order-state-wrapper">
                <div className="qty-control">
                    <AiOutlineMinus onClick={decreaseQty} />
                    <span className="qty">{qty}</span>
                    <AiOutlinePlus onClick={increaseQty} />
                </div>
                <div className="product-order-state-item">
                    <span className='key'>Price</span>: <span className='value'>{price}$</span>
                </div>
                <div className="product-order-state-item">
                    <span className='key'>Qty</span>: <span className='value'>{qty}</span>
                </div>
                <div className="product-order-state-item">
                    <span className='key'>Total price</span>: <span className='value'>{price * qty}$</span>
                </div>
                <div className="product-order-state-buttons">
                    <button className="product-order-state-btn">Add to cart</button>
                    <button className="product-order-state-btn buy">Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductOrderState