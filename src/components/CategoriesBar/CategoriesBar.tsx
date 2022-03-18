import "./CategoriesBar.css";
import { categories } from "../../data/categories";
import CategoryBarItem from "./CategoryBarItem";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const CategoriesBar = () => {
    const subMenuRef =  useRef<HTMLDivElement>(null)
    const [subMenuData, setSubMenuData] = useState<{
        visible: boolean;
        title: string;
        items: { name: string, link: string }[]
    }>({
        visible: false,
        title: "",
        items: []
    })

    const closeSubMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const event = (e as any).target;
        
        if (
            event.classList.contains('categories-bar') ||
            event.classList.contains('categories-bar-wrapper') ||
            event.classList.contains('category-item-bar')

        ) {
            setSubMenuData({
                visible: false,
                title: "",
                items: []
            })
        }
    }
    return (
        <div onMouseOver={closeSubMenu} className="categories-bar">
            <div className="categories-bar-wrapper">
                {categories.map((category) => (
                    <CategoryBarItem setSubMenuData={setSubMenuData} subMenuRef={subMenuRef} key={category.id} {...category} />
                ))}
            </div>
            <div ref={subMenuRef} className={`categories-submenu ${subMenuData.visible ? "visible" : ""}`}>
                <h2 className="submenu-title">{subMenuData.title}</h2>
                <div className="submenu-list">
                    {
                        subMenuData.items.map((item) => (
                            <Link key={Math.random()} className="submenu-item" to={item.link}>{item.name}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoriesBar
