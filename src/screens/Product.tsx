import CategoriesBar from '../components/CategoriesBar/CategoriesBar';
import Navbar from '../components/Navbar/Navbar';
import ProductOrderState from '../components/Products/ProductOrderState';
import ProductWrapper from '../components/Products/ProductWrapper';
import SimilarProductsList from '../components/Products/SimilarProductsList';
import "./styles/Product.css";

const Product = () => {
    return <div className='product-screen'>
        {/* <Alert /> */}
        <Navbar />
        <CategoriesBar />
        <div className="container">
            <div className="product-screen-wrapper">
                <ProductWrapper />
                <ProductOrderState />
            </div>
        </div>
        <SimilarProductsList />
    </div>;
};

export default Product;
