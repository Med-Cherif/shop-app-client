import { useNavigate, Link } from "react-router-dom";
import Ratings from "./Ratings";

interface IProps {
    [field: string]: string | number
}

const ProductScreenItem = ({ _id, name, price, image, rating }: IProps) => {

    
    return (
        <div className="product-screen-item">
            <Link to={`/products/${_id}`}>
                <div className="product-screen-item-infos">
                    <div className="product-screen-item-image-container">
                        <img src={image as string} alt={name as string} />
                    </div>
                    <div className="product-screen-item-data">
                        <h2 className="product-screen-item-title">{name}</h2>
                        <div className="product-screen-item-rating">
                            <Ratings rating={rating as number} />
                        </div>
                        <h5 className="product-screen-item-price">Price: {price}$</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductScreenItem