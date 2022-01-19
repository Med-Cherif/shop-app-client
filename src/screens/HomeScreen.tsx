import CategoriesBar from "../components/CategoriesBar/CategoriesBar"
import Navbar from "../components/Navbar/Navbar"
import Alert from "../components/Alert";

const HomeScreen = () => {
    return (
        <div className="home-screen">
            <Alert />
            <Navbar />
            <CategoriesBar />
        </div>
    )
}

export default HomeScreen