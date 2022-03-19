import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CategoriesBar from '../components/CategoriesBar/CategoriesBar';
import Navbar from '../components/Navbar/Navbar';
import ProductOrderState from '../components/Products/ProductOrderState';
import ProductWrapper from '../components/Products/ProductWrapper';
import SimilarProductsList from '../components/Products/SimilarProductsList';
import { RootState } from '../redux/store';
import { getSingleProductAction, getSimilarProductAction } from "../redux/actions/productActions";
import "./styles/Product.css";
import Status from '../components/Status';
import Error from '../components/Errors/Error';
import Footer from '../components/Footer/Footer';

const Product = () => {
    const { status, error, product, similarProducts } = useSelector((state: RootState) => state.product);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(getSingleProductAction(id));
        }
    }, [id])

    useEffect(() => {
        if (product?._id) {
            dispatch(getSimilarProductAction(product.categories))
        }
    }, [product])


    return <div className='product-screen'>
        {/* <Alert /> */}
        <Navbar />
        <CategoriesBar />
        <div className="container">
            <div className="product-screen-wrapper">
                <Status 
                    status={status}
                    Error={<Error error={error} />}
                    Success={<>
                        <ProductWrapper product={product} />
                        <ProductOrderState allQty={product.qty} price={product.price} />
                    </>}
                />
            </div>
        </div>
        {
            similarProducts.length > 0 && <SimilarProductsList products={similarProducts} />
        }
        <Footer />
    </div>;
};

export default Product;
