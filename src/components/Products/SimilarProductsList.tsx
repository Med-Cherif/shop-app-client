import React from 'react'
import { newProducts } from '../../data/products'
import ProductsList from './ProductsList'

interface IProps {
  products: { [field: string]: any }[]
}

const SimilarProductsList = ({ products }: IProps) => {
    return (
      <div className='similar-products'>
          <ProductsList disablePadding title="Similar Products" products={products} />
      </div>
    )
}

export default SimilarProductsList