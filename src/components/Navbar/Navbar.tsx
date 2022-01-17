import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { GrSearch } from "react-icons/gr";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { useGlobalState } from "../../AppContext";

const Navbar = () => {
    const { showSidebar } = useGlobalState()
    return (
        <div className="navbar">
            <nav className="navbar-wrapper">
                <div className="navbar-left">
                    <FiMenu onClick={showSidebar} className="menu-icon" />
                    <h2 className="app-title">Bibo</h2>
                </div>
                <div className="navbar-center">
                    <div className="search-input-container">
                        <input type="text" placeholder="Search for products" />
                        <GrSearch />
                    </div>
                </div>
                <div className="navbar-right">
                    <div className="icon-wrapper">
                        <FaUserAlt />
                    </div>
                    <div className="icon-wrapper">
                        <FaShoppingCart />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
