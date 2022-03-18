import { useNavigate } from 'react-router-dom';
import './ProductCard.css';


interface IProps {
    image: string;
    title: string;
    price: number;
}

const ProductCard = ({ image, title, price }: IProps) => {

    const navigate = useNavigate()

    const randomValue = () => {
        const min = 100;
        const max = 999;

        return Math.floor(Math.random() * (max - min)) + min;
    }

    return <div onClick={() => navigate(`/products/${randomValue()}`)} className="product-card">
        <div className="product-image">
            <img src={image} alt="Product" />
        </div>
        <h2 className="product-title">{title}</h2>
        <span className="product-price">{price}$</span>
    </div>;
};

export default ProductCard;
