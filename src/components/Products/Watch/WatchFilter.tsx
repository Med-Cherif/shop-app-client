import { useState } from "react"
import FilterBarText from "../FilterBarText"
import FilterColors from "../FilterColors"
import FilterInputRadio from "../FilterInputRadio"
import FilterInputs from "../FilterInputs"
import ProductsFilterCheckbox from "../FilterProductsCheckbox"

const brands = ['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'];
const choices = ['Yeah', 'No']

const WatchFilter = () => {
    const [checkedItem, setCheckedItem] = useState(0)
    return (
        <div className="product-filter">
            <FilterBarText text="Brand" />
                <FilterInputs>
                    {brands.map((brand) => (
                        <ProductsFilterCheckbox key={brand} label={brand} name='brand' />
                    ))}
            </FilterInputs>

            <FilterBarText text="Color" />
            <FilterInputs>
                <FilterColors />
            </FilterInputs>
            
            <FilterBarText text="Water Resistance" />

            <FilterInputs>
                {choices.map((choice, i) => (
                    <FilterInputRadio 
                        key={choice} 
                        label={choice} 
                        name='cable' 
                        onChange={() => setCheckedItem(i)} checked={i === checkedItem} 
                    />
                ))}
            </FilterInputs>
        </div>
    ) 
}

export default WatchFilter