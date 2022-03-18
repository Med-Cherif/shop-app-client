
import FilterProductsInputRange from "../FilterProductsInputRange";
import FilterProductsSelect from "../FilterProductsSelect";
import ProductsFilterCheckbox from "../FilterProductsCheckbox";
import FilterBarText from "../FilterBarText";
import FilterInputs from "../FilterInputs";
import { useState } from "react";

const brands = [
    'samsung', 'apple', 'xiaomi', 'oneplus', 'lg', 'huawei'
]

const PhoneFilter = () => {
    const [phoneBrands, setPhoneBrands] = useState([]);
    
    return (
        <div className='phone-filter'>

            <FilterBarText text="Brand" />
            <FilterInputs>
                {brands.map((brand) => (
                    <ProductsFilterCheckbox key={brand} label={brand} name='brand' />
                ))}
            </FilterInputs>

            <FilterBarText text="Model" />
            <FilterInputs>
                {brands.map((brand) => (
                    <ProductsFilterCheckbox key={brand} label={brand} name='model' />
                ))}
            </FilterInputs>

            <FilterBarText text="Memory" />
            <FilterInputs>        
                <FilterProductsSelect 
                    defaultValue="Min Memory" 
                    options={[
                        { label: "64 GB", value: "64" },
                        { label: "128 GB", value: "128" },
                        { label: "256 GB", value: "256" }
                    ]} 
                    name="screen-size"
                />
            </FilterInputs>
            

            <FilterBarText text="RAM" />
            <FilterInputs>

            
                <FilterProductsSelect 
                    defaultValue="Min RAM" 
                    options={[
                        { label: "2 GB", value: "2" },
                        { label: "4 GB", value: "2" },
                        { label: "2 GB", value: "2" },
                    ]} 
                    name="screen-size"
                />
            </FilterInputs>

            <FilterBarText text="CPU (GHz)" />
            <FilterInputs>

            
                <FilterProductsSelect 
                    name="cpu"
                    defaultValue="Min CPU"
                    options={[
                        { value: '1.6 GHz', label: '1.6' },
                        { value: '2.0 GHz', label: '2.0' },
                        { value: '2.5 GHz', label: '2.5' },
                    ]}
                />
            </FilterInputs>

            <FilterBarText text="Main Camera" />
            <FilterProductsInputRange 
                min={{ name: 'min-camera', placeholder: "Min MP" }}
                max={{ name: 'max-camera', placeholder: "Max MP" }}
            />

            <FilterBarText text="Selfie Camera" />
            <FilterProductsInputRange 
                min={{ name: 'min-camera', placeholder: "Min MP" }}
                max={{ name: 'max-camera', placeholder: "Max MP" }}
            />

            <FilterBarText text="Battery" />
            <FilterProductsInputRange 
                min={{ name: 'min-battery', placeholder: "Min mAh" }}
                max={{ name: 'max-battery', placeholder: "Max mAh" }}
            />

        </div>
    )
}

export default PhoneFilter