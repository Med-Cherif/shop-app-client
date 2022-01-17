import "./CategoriesBar.css";
import { categories } from "../../data/categories";
import CategoryBarItem from "./CategoryBarItem";

const CategoriesBar = () => {
    return (
        <div className="categories-bar">
            <div className="categories-bar-wrapper">
                {categories.map((category) => (
                    <CategoryBarItem key={category.id} {...category} />
                ))}
            </div>
            
        </div>
    )
}

export default CategoriesBar
