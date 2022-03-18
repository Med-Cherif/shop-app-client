import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const ProductOrderState = () => {
  return (
    <div className='product-order-state'>
        <div className="product-order-state-wrapper">
            <div className="qty-control">
                <AiOutlineMinus />
                <span className="qty">1</span>
                <AiOutlinePlus />
            </div>
            <div className="product-order-state-item">
                <span className='key'>Price</span>: <span className='value'>300$</span>
            </div>
            <div className="product-order-state-item">
                <span className='key'>Qty</span>: <span className='value'>1</span>
            </div>
            <div className="product-order-state-item">
                <span className='key'>Total price</span>: <span className='value'>300$</span>
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