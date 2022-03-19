import { useEffect } from "react";
import { getLatestProductsAction } from "../redux/actions/productActions";
import CategoriesBar from "../components/CategoriesBar/CategoriesBar"
import Navbar from "../components/Navbar/Navbar"
import ProductsList from "../components/Products/ProductsList";
import Footer from "../components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import Status from "../components/Status";
import Error from "../components/Errors/Error";


const HomeScreen = () => {
    const { latestProducts, status, error } = useSelector((state: RootState) => state.product);
    const dispatch = useDispatch();

    console.log(latestProducts)

    useEffect(() => {
        dispatch(getLatestProductsAction())
    }, [])
    

    return (
        <div className="home-screen">
            {/* <Alert /> */}
            <Navbar />
            <CategoriesBar />
            <Status 
                status={status} 
                Success={<ProductsList title="Latest Products" products={latestProducts} />}
                Error={<Error error={error} />}
                Loading={<h2>Loading</h2>}
            />
            
            <Footer />
        </div>
    )
}

export default HomeScreen