import Ratings from "./Ratings";
import "./ProductType.css";
import ProductFeatures from "./ProductFeatures";

const source = "https://firebasestorage.googleapis.com/v0/b/bibo-shop.appspot.com/o/iphone2.jpeg?alt=media&token=669f588f-6fb1-47f6-9aef-a0f132e8e71c";

const ProductWrapper = () => {

  return (
    <div className="product-wrapper">
        <div className="product-screen-image">
            <img src={source} alt="IPhone" />
        </div>    
        <div className="product-screen-infos">
            <h2 className='product-screen-name'>Apple IPhone 11 Pro Max</h2>
            <p className="product-description">A black Apple iphone 11 pro max has 64GB 4GB RAM</p>
            <Ratings rating={3.5} />
            <ProductFeatures />
        </div>
    </div>
  )
}

export default ProductWrapper