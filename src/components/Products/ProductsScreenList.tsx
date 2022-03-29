import "./ProductsScreenList.css";
import { useSelector } from 'react-redux';
import { RootState } from "../../redux/store";
import ProductScreenItem from './ProductScreenItem';
import Status from "../Status";

const ProductsScreenList = () => {

  const { products, status, error } = useSelector((state: RootState) => state.product);

  console.log(products)

  return (
    <div className='products-screen-list'>
      <Status
        status={status}
        Error={error}
        Success={
          <>
            {
              products.map((product) => (
                <ProductScreenItem key={product._id} {...product} />
              ))
            }
          </>
        }
      />

      {
        (status === 'success' && products.length === 0) && (
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h2>No Products</h2>
          </div>
        )
      }
        
    </div>
  )
}

export default ProductsScreenList