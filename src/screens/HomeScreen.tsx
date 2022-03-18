import CategoriesBar from "../components/CategoriesBar/CategoriesBar"
import Navbar from "../components/Navbar/Navbar"
import Alert from "../components/Alert";
import ProductsList from "../components/Products/ProductsList";
import Footer from "../components/Footer/Footer";
import { newProducts } from "../data/products";

const HomeScreen = () => {
    return (
        <div className="home-screen">
            {/* <Alert /> */}
            <Navbar />
            <CategoriesBar />
            <ProductsList title="New Products" products={newProducts} />
            <Footer />
        </div>
    )
}

export default HomeScreen