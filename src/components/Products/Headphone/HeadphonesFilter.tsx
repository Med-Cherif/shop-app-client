import React, { useState } from 'react'
import FilterBarText from '../FilterBarText'
import FilterColors from '../FilterColors'
import FilterInputRadio from '../FilterInputRadio'
import FilterInputs from '../FilterInputs'
import ProductsFilterCheckbox from '../FilterProductsCheckbox'

const brands = ['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'];
const connectionTypes = ['wireless', 'wired', 'both']

const HeadphonesFilter = () => {
    const [checkedItem, setCheckedItem] =  useState(2)
    const checkItem = (index: number) => {
        setCheckedItem(index);
    }
  return (
    <div className='product-filter'>

        <FilterBarText text='Brand' />
        <FilterInputs>
            {brands.map((brand) => (
                <ProductsFilterCheckbox key={brand} label={brand} name='brand'  />
            ))}
        </FilterInputs>
        <FilterBarText text='Connection Types' />

        <FilterInputs>
            {connectionTypes.map((type, i) => (
                <FilterInputRadio onChange={() => checkItem(i)} key={type} label={type} name='wire-type' checked={i === checkedItem} />
            ))}
        </FilterInputs>
        <FilterBarText text='Color' />
        <FilterInputs>
            <FilterColors />
        </FilterInputs>
    </div>
  )
}

export default HeadphonesFilter