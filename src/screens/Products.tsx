import "./styles/Products.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import { GrSearch } from "react-icons/gr";
import { useGlobalState } from "../AppContext";
import { getSearchedProductsAction } from "../redux/actions/productActions";
import ProductsWrapper from "../components/Products/ProductsWrapper";

function getSearchValue(searchParams: URLSearchParams) {
    const search = searchParams.get('search');
    if (!search) return "";
    return search
}

const Products = () => {
    const dispatch = useDispatch();
    const { openFilter } = useGlobalState();

    const [searchParams] = useSearchParams()
    const [searchValue, setSearchValue] = useState(() => getSearchValue(searchParams));

    const searchProducts = () => {
        dispatch(getSearchedProductsAction(searchValue));
    }

    const searchProductsWithEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key.toLowerCase() === 'enter') {
            searchProducts();
        }
    }


    return (
        <div className="products-screen">
            <Navbar hideSearchBox />
            <div className="container">
                <div className="products-search-box">
                    <div className="products-search-input-wrapper">
                        <input 
                            value={searchValue} 
                            onChange={(e) => setSearchValue(e.target.value)}
                            type="text" 
                            onKeyUp={searchProductsWithEnter}
                            placeholder="Search for products by Name, Category..." 
                            className="products-search-input" 
                        />
                        <GrSearch onClick={searchProducts} />
                    </div>
                </div>
                <ProductsWrapper />
            </div>
            <button onClick={openFilter} className="open-filter-button">Filter</button>
            <Footer />
        </div>
    )
}

export default Products