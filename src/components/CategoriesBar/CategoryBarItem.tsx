import { IconType } from "react-icons/lib"

interface IProps {
    link: string;
    title: string;
    Icon: IconType;
    sidebar?: boolean
}

const CategoryBarItem = ({ Icon, title, sidebar }: IProps) => {
    return (
        <div className={`category-item-bar ${sidebar ? "sidebar-category-item" : ""}`}>
            <div className="category-item-icon-wrapper">
                <Icon />
            </div>
            <p className="category-item-title">{title}</p>
        </div>
    )
}

export default CategoryBarItem
