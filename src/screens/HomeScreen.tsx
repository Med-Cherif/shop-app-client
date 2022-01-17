import CategoriesBar from "../components/CategoriesBar/CategoriesBar"
import Navbar from "../components/Navbar/Navbar"

const HomeScreen = () => {
    return (
        <div className="home-screen">
            <Navbar />
            <CategoriesBar />
        </div>
    )
}

export default HomeScreen