import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productsOption } from "../../data/productOption";

interface IProps {
  filterData: { [field: string]: string };
  setFilterData: React.Dispatch<React.SetStateAction<{[field: string]: string}>>;
}

const FilterProductsType = ({ filterData, setFilterData }: IProps) => {
    
    const [productTypes, setProductTypes] = useState<{
        hasProductTypes: boolean,
        productTypes: string[]
      }>({
      hasProductTypes: false,
      productTypes: []
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilterData((prev: any) => {
        
        if (e.target.name === 'category') {
            const option = productsOption.find((option) => option.title === e.target.value);
            if (option && option.productsType !== null) {
              return { ...prev, category: e.target.value, productType: 'all' }
            } else {
              delete prev?.productType;
              return { ...prev, category: e.target.value }
            }
        }
          return { ...prev, [e.target.name]: e.target.value }
        })
    }

    useEffect(() => {
      const option = productsOption.find((option) => option.title === filterData?.category)
      if (option && option.productsType) {
        setProductTypes({
            hasProductTypes: true,
            productTypes: option.productsType
        })
      } else {
        setProductTypes({
            hasProductTypes: false,
            productTypes: []
        });
      }
    }, [filterData?.category])

  
    return (
      <>
        <p className="filter-bar-text">Choose a category</p>
        <select onChange={handleChange} className="filter-bar-select" name="category" value={filterData?.category ? filterData?.category : 'all'}>
            <option value="all">All categories</option>
            {productsOption.map((option) => (
              <option style={{ textTransform: 'capitalize' }} key={option.title} value={option.value}>{option.title}</option>
            ))}
        </select>
          {
            productTypes.hasProductTypes && (
              <>
                <p className="filter-bar-text">You're looking for ?</p>
                <select onChange={handleChange} className="filter-bar-select" name="productType" value={filterData?.productType || 'all'}>
                    <option value="all">All products</option>
                    {productTypes.productTypes.map((product) => (
                      <option style={{ textTransform: 'capitalize' }} key={product} value={product.toLowerCase()}>{product}</option>
                    ))}
                </select>
              </>
            )
          }

      </>
    )
}

export default FilterProductsType