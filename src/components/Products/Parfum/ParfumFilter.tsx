import React from 'react'
import FilterBarText from '../FilterBarText'
import FilterInputs from '../FilterInputs'
import ProductsFilterCheckbox from '../FilterProductsCheckbox'
import FilterProductsSelect from '../FilterProductsSelect'

const brands = ['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4']

const ParfumFilter = () => {
    return (
      <div className='product-filter'>
          <FilterBarText text='Brand' />
          <FilterInputs>
              {brands.map((brand) => (
                  <ProductsFilterCheckbox key={brand} label={brand} name='brand' />
              ))}
          </FilterInputs>

          <FilterBarText text='Capacity' />
          
          <FilterInputs>
              <FilterProductsSelect
                  defaultValue="Parfum Capacity" 
                  options={[
                      { label: "20 ML to 40 ML", value: "20 ml to 40 ml" },
                      { label: "40 ML to 60 ML", value: "40 ml to 60 ml" },
                      { label: "60 ML to 100 ML", value: "60 ml to 100 ml" },
                  ]} 
                  name="screen-size"
              />
          </FilterInputs>
      </div>
      // brand // capacity
    )
}

export default ParfumFilter