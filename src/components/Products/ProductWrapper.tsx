import "./ProductType.css";
import Ratings from "./Ratings";
import ProductFeatures from "./ProductFeatures";

interface IProps {
    product: { [field: string]: any }
}

const ProductWrapper = ({ product: { features, _id, name, description, rating, image } }: IProps) => {
  
  const handleFeatures = () => {
    let data: any = [];

    for (let feature in features) {
      data.push({
        feature,
        value: features[feature]
      })
    }

    return data;
  }

  return (
    <div className="product-wrapper">
        <div className="product-screen-image">
            <img src={image} alt={name} />
        </div>    
        <div className="product-screen-infos">
            <h2 className='product-screen-name'>{name}</h2>
            {
              description && <p className="product-description">{description}</p>
            }
            <Ratings rating={rating} />
            <ProductFeatures features={handleFeatures()} />
        </div>
    </div>
  )
}

export default ProductWrapper