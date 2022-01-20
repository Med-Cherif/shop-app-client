import "./Sidebar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import { useGlobalState } from "../../AppContext";
import { RootState } from "../../redux/store";
import SidebarCategories from "./SidebarCategories";
import SidebarSearch from "./SidebarSearch";
import UserBar from "./UserBar";

const Sidebar = () => {


    const navigate = useNavigate()
    const { isSidebarVisible, hideSidebar } = useGlobalState()
    
    const [isUserBarVisible, setIsUserBarVisible] = useState(false)
    const { userData, accessToken } = useSelector((state: RootState) => state.auth);

    const toggleUserBar = () => setIsUserBarVisible((prev) => !prev)
    const navigateToSigninScreen = () => navigate('/login')

    const handleOnUserClick = () => {
        if (accessToken) {
            return toggleUserBar()
        }
        navigateToSigninScreen()
    }
    

    return (
        <div className={`sidebar ${isSidebarVisible ? "show" : ""}`}>
            <div className="sidebar-wrapper">
                <div className="sidebar-header">
                    <div onClick={handleOnUserClick} className="user-state">
                        <FaUserAlt />
                        {accessToken ? <h3 className="sidebar-header-text">{(userData as any)?.username}</h3> : <h3 className="sidebar-header-text">Sign in</h3>}
                    </div>
                    <GrClose onClick={hideSidebar} />
                </div>
                {accessToken && <UserBar isUserBarVisible={isUserBarVisible} />}
                <h2 className="sidebar-title">Search</h2>
                <SidebarSearch /> 
                <h2 className="sidebar-title">Categories</h2>
                <SidebarCategories />
            </div>
        </div>
    )
}

export default Sidebar
