import "./styles/Products.css";
import { useLocation, useSearchParams } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import FilterBar from "../components/Products/FilterBar"
import ProductsScreenList from "../components/Products/ProductsScreenList"
import { GrSearch } from "react-icons/gr";
import { useEffect, useState } from "react";
import { useGlobalState } from "../AppContext";

function getSearchValue(searchParams: URLSearchParams) {
    const search = searchParams.get('search');
    if (!search) return "";
    return search
}

const Products = () => {
    const { openFilter } = useGlobalState();

    const [searchParams, setSearchParams] = useSearchParams()
    const [searchValue, setSearchValue] = useState(() => getSearchValue(searchParams));


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
                            placeholder="Search for products by Name, Category..." 
                            className="products-search-input" 
                        />
                        <GrSearch />
                    </div>
                </div>
                <div className="products-screen-wrapper">
                    <FilterBar />
                    <ProductsScreenList />
                </div>
            </div>
            <button onClick={openFilter} className="open-filter-button">Filter</button>
            <Footer />
        </div>
    )
}

export default Products