import "./ProductsList.css";
import ProductCard from "./ProductCard";

interface IProps {
    products: { title: string; price: number; image: string, type: string }[];
    title: string;
    disablePadding?: boolean
}

const ProductsList = ({ products, title, disablePadding }: IProps) => {

    let style = {};

    if (disablePadding) {
        style = {
            padding: 0
        }
    }

    return <div style={style} className="products-wrapper">
        <div className="container">
            <h2 className="products-wrapper-title">
                {title}
            </h2>
            <div className="products-container">
                {products.map((product) => (
                    <ProductCard key={product.title} {...product} />
                ))}
            </div>

        </div>
    </div>
}

export default ProductsList;