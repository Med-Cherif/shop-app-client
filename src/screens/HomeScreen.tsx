import CategoriesBar from "../components/CategoriesBar/CategoriesBar"
import Navbar from "../components/Navbar/Navbar"
import Alert from "../components/Alert";
import NewProducts from "../components/Products/NewProducts";

const HomeScreen = () => {
    return (
        <div className="home-screen">
            <Alert />
            <Navbar />
            <CategoriesBar />
            <NewProducts />
        </div>
    )
}

export default HomeScreen