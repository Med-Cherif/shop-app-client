import { Link } from 'react-router-dom';
import './ProductCard.css';


interface IProps {
    [field: string]: string
}

const ProductCard = ({ _id, image, name, price }: IProps) => {

    return <div className="product-card">
        <Link className='product-card-link' to={`/products/${_id}`}>
            <div className="product-image">
                <img src={image} alt="Product" />
            </div>
            <h2 className="product-title">{name}</h2>
            <span className="product-price">{price}$</span>
        </Link>
    </div>;
};

export default ProductCard;
