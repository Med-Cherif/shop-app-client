import { FaUserAlt } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useGlobalState } from "../../AppContext";
import "./Sidebar.css";
import SidebarCategories from "./SidebarCategories";
import SidebarSearch from "./SidebarSearch";

const Sidebar = () => {

    const { isSidebarVisible, hideSidebar } = useGlobalState()
    

    return (
        <div className={`sidebar ${isSidebarVisible ? "show" : ""}`}>
            <div className="sidebar-wrapper">
                <div className="sidebar-header">
                    <div className="user-state">
                        <FaUserAlt />
                        <h3 className="sidebar-header-text">Sign in</h3>
                    </div>
                    <GrClose onClick={hideSidebar} />
                </div>
                <h2 className="sidebar-title">Search</h2>
                <SidebarSearch /> 
                <h2 className="sidebar-title">Categories</h2>
                <SidebarCategories />
            </div>
        </div>
    )
}

export default Sidebar
