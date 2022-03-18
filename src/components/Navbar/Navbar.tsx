import "./Navbar.css";
import { useState } from "react";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { FiMenu } from "react-icons/fi";
import { GrSearch } from "react-icons/gr";
import { FaUserAlt, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { useGlobalState } from "../../AppContext";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../redux/actions/authActions";
import NavbarSearchProducts from "./NavbarSearchProducts";

interface IProps {
    hideSearchBox?: boolean
}

const Navbar = ({ hideSearchBox }: IProps) => {
    const [isUserMenuVisible, setIsUserMenuVisible] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { showSidebar } = useGlobalState()
    const { accessToken } = useSelector((state: RootState) => state.auth);

    const toggleUserMenu = () => setIsUserMenuVisible((prev) => !prev);
    const navigateToSigninScreen = () => navigate('/login');

    const signout = () => {
        dispatch(logoutAction(navigate))
    }

    const handleOnUserClick = () => {
        if (accessToken) {
            return toggleUserMenu()
        }
        navigateToSigninScreen()
    }

    const navigateToHomeScreen = () => {
        navigate('/')
    }

    return (
        <div className="navbar">
            <nav className="navbar-wrapper">
                <div className="navbar-left">
                    <FiMenu onClick={showSidebar} className="menu-icon" />
                    <h2 onClick={navigateToHomeScreen} className="app-title">Bibo</h2>
                </div>
                { !hideSearchBox && <NavbarSearchProducts />}
                <div className="navbar-right">
                    <div onClick={handleOnUserClick} className="navbar-right-item-wrapper">
                        <FaUserAlt />
                        {
                            accessToken && (
                                <div className={`user-drop-menu ${isUserMenuVisible ? "visible" : ""}`}>
                                    <ul>
                                        <li onClick={signout} className="user-bar-item">
                                            <FaSignOutAlt />
                                            Logout
                                        </li>
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                    <div className="navbar-right-item-wrapper">
                        <FaShoppingCart />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
