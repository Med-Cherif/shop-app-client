import React from "react";
import { IconType } from "react-icons/lib"
import { useNavigate } from "react-router-dom";

interface IProps {
    link: string;
    title: string;
    Icon: IconType;
    items: { name: string, link: string }[];
    subMenuRef?: React.RefObject<HTMLDivElement>;
    setSubMenuData?: React.Dispatch<React.SetStateAction<{
        title: string;
        visible: boolean;
        items: { name: string, link: string }[];
    }>>
    sidebar?: boolean
}

const CategoryBarItem = ({ Icon, title, sidebar, subMenuRef, items, setSubMenuData, link }: IProps) => {

    const navigate = useNavigate()

    const navigateToProductsScreen = () => {
        navigate(link);
    }

    const openSubMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!subMenuRef || !setSubMenuData) return;
        const text = (e as any)?.target?.nextElementSibling?.textContent
        if (text) {
            let windowWidth = window.innerWidth
            const submenu = subMenuRef.current!;
            const { left: itemLeft, bottom: itemBottom, right: itemRight } = (e as any).target.getBoundingClientRect();
            const { width: submenuWidth } = submenu.getBoundingClientRect();
            setSubMenuData({
                visible: true,
                title: text,
                items
            });

            submenu.style.left = ((itemLeft + itemRight) / 2) + 'px';
            submenu.style.top = itemBottom + 'px';
            if (submenuWidth / 2 > itemLeft) {
                submenu.style.transform = 'translateX(0)';
            } else if (submenuWidth / 2 + itemLeft > windowWidth) {
                submenu.style.transform = 'translateX(-100%)';
            } else {
                submenu.style.transform = 'translateX(-50%)';
            }

        }
    }

    return (
        <div onClick={navigateToProductsScreen} className={`category-item-bar ${sidebar ? "sidebar-category-item" : ""}`}>
            <div 
                onMouseEnter={openSubMenu} 
                className="category-item-icon-wrapper"
            >
                <Icon className="category-icon" />
            </div>
            <p className="category-item-title">{title}</p>
        </div>
    )
}

export default CategoryBarItem
