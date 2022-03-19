import { useNavigate } from 'react-router-dom';
import './ProductCard.css';


interface IProps {
    [field: string]: string
}

const ProductCard = ({ _id, image, name, price }: IProps) => {

    const navigate = useNavigate();

    return <div onClick={() => navigate(`/products/${_id}`)} className="product-card">
        <div className="product-image">
            <img src={image} alt="Product" />
        </div>
        <h2 className="product-title">{name}</h2>
        <span className="product-price">{price}$</span>
    </div>;
};

export default ProductCard;
