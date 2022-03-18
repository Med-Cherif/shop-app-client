import React from 'react'
import { newProducts } from '../../data/products'
import ProductsList from './ProductsList'

const SimilarProductsList = () => {
  return (
    <div className='similar-products'>
        <ProductsList disablePadding title="Similar Products" products={newProducts} />
        
    </div>
  )
}

export default SimilarProductsList