import { categories } from "../../data/categories"
import CategoryBarItem from "../CategoriesBar/CategoryBarItem"

const SidebarCategories = () => {
    return (
        <div className="categories-sidebar">
            {categories.map((category) => (
                <CategoryBarItem sidebar key={category.id} {...category} />
            ))}
        </div>
    )
}

export default SidebarCategories
