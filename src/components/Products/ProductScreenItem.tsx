import { useNavigate } from "react-router-dom";
import Ratings from "./Ratings";

interface IProps {
    title: string,
    price: number,
    image: string,
    rating: number
}

const ProductScreenItem = ({ title, price, image, rating }: IProps) => {

    const navigate = useNavigate()
    const navigateToProduct = () => {
        navigate(`/products/${452}`)
    }
    return (
        <div onClick={navigateToProduct} className="product-screen-item">
            <div className="product-screen-item-infos">
                <div className="product-screen-item-image-container">
                    <img src={image} alt={title} />
                </div>
                <div className="product-screen-item-data">
                    <h2 className="product-screen-item-title">{title}</h2>
                    <div className="product-screen-item-rating">
                        <Ratings rating={rating} />
                    </div>
                    <h5 className="product-screen-item-price">Price: {price}$</h5>
                </div>
            </div>
        </div>
    )
}

export default ProductScreenItem