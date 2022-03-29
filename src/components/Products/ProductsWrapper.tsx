import { useEffect } from 'react'
import FilterBar from './FilterBar'
import ProductsScreenList from './ProductsScreenList'

const ProductsWrapper = () => {
    useEffect(() => {
        
    }, [])
    return (
        <div className="products-screen-wrapper">
            <FilterBar />
            <ProductsScreenList />
        </div>
    )
}

export default ProductsWrapper