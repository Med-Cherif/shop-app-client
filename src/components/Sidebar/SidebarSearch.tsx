import { GrSearch } from "react-icons/gr"

const SidebarSearch = () => {
    return (
        <div className="search-input-container sidebar-search">
            <input type="text" placeholder="Products..." />
            <GrSearch />
        </div>
    )
}

export default SidebarSearch
