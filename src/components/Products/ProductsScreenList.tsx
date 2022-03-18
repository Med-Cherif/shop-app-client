import React from 'react'
import { newProducts } from '../../data/products'
import ProductScreenItem from './ProductScreenItem';
import "./ProductsScreenList.css";

const ProductsScreenList = () => {
  return (
    <div className='products-screen-list'>
        {newProducts.map((product) => (
            <ProductScreenItem key={product.title} {...product} />
        ))}
    </div>
  )
}

export default ProductsScreenList