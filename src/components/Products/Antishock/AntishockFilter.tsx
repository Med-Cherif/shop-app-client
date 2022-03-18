import React from 'react'
import FilterBarText from '../FilterBarText'
import FilterColors from '../FilterColors'
import FilterInputs from '../FilterInputs'
import ProductsFilterCheckbox from '../FilterProductsCheckbox'

const forList = ['apple iphone 11', 'oneplus 8 pro', 'samsung galaxy s20']

const AntishockFilter = () => {
  return (
    <div className='product-filter'>
        <FilterBarText text='For' />
        <FilterInputs>
            {forList.map((item) => (
                <ProductsFilterCheckbox key={item} label={item} name='for' />
            ))}
        </FilterInputs>
        <FilterBarText text='Color' />
        <FilterInputs>
            <FilterColors allowTransparent />
        </FilterInputs>
    </div>
  )
}

export default AntishockFilter