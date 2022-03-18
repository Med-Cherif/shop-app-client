import React, { useState } from 'react'
import FilterBarText from '../FilterBarText'
import FilterInputs from '../FilterInputs'
import ProductsFilterCheckbox from '../FilterProductsCheckbox'
import FilterInputRadio from "../FilterInputRadio"
import FilterProductsSelect from '../FilterProductsSelect'

const brands = ['samsung', 'apple', 'sony', 'huawei', 'xiaomi']
const cables = ['USB type C', 'USB micro B', 'Ligntning (For Iphone)']

const ChargerFilter = () => {
    const [checkedItem, setCheckedItem] = useState(0)
  return (
    <div className='product-filter'>
        <FilterBarText text='Brand' />
        <FilterInputs>
            {brands.map((brand) => (
                <ProductsFilterCheckbox key={brand} label={brand} name='brand' />
            ))}
        </FilterInputs>

        <FilterBarText text='Cable Type' />
        <FilterInputs>
            {cables.map((cable, i) => (
                <FilterInputRadio 
                    key={cable} 
                    label={cable} 
                    name='cable' 
                    onChange={() => setCheckedItem(i)} checked={i === checkedItem} 
                />
            ))}
        </FilterInputs>

        <FilterBarText text='Voltage' />
        <FilterInputs>
            <FilterProductsSelect
                defaultValue="Charger Voltage" 
                options={[
                    { label: "Under 5V", value: "under 5V" },
                    { label: "5V to 10V", value: "5V to 10V" },
                    { label: "Above 10V", value: "aboce 10V" },
                ]} 
                name="charger-voltage"
            />
        </FilterInputs>

        <FilterBarText text='Current' />
        <FilterInputs>
            <FilterProductsSelect
                defaultValue="Charger Current" 
                options={[
                    { label: "2A", value: "2A" },
                    { label: "2A to 5A", value: "2A to 5A" },
                    { label: "Above 5A", value: "above 5A" },
                ]} 
                name="charger-voltage"
            />
        </FilterInputs>
    </div>
  )
}

export default ChargerFilter