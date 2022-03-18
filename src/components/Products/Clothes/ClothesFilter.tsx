import React from 'react'
import FilterBarText from '../FilterBarText'
import FilterColors from '../FilterColors'
import FilterInputs from '../FilterInputs'
import ProductsFilterCheckbox from '../FilterProductsCheckbox'
import FilterProductsSelect from '../FilterProductsSelect'

const brands = ['adidas', 'nike', 'puma', 'vercase', 'EA']

const ClothesFilter = () => {
  return (
    <div className='product-filter'>
        <FilterBarText text='Brand' />
        <FilterInputs>
            {brands.map((brand) => (
                <ProductsFilterCheckbox key={brand} label={brand} name='brand' />
            ))}
        </FilterInputs>
        <FilterBarText text='Size' />
        <FilterInputs>
            <FilterProductsSelect 
                defaultValue='Size'
                name='clothes-size'
                options={
                    [
                        { label: 'XS', value: 'xs' },
                        { label: 'S', value: 's' },
                        { label: 'M', value: 'm' },
                        { label: 'L', value: 'l' },
                        { label: 'XL', value: 'xl' },
                    ]
                }
            />
        </FilterInputs>
        <FilterBarText text='Color' />
        <FilterInputs>
            <FilterColors />
        </FilterInputs>
    </div>
  )
}

export default ClothesFilter