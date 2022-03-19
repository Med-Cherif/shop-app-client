import ProductFeatureItem from "./ProductFeatureItem";

interface IProps {
  features: { feature: string, value: any }[]
}

const ProductFeatures = ({ features }: IProps) => {
  return (
    <div className='product-feature'>
        <h2 className='product-type-title'>Features:</h2>
        <ul className='product-specifications-list'>
            {features.map(({ feature, value }) => (
              <ProductFeatureItem key={feature} item={feature} value={value} />
            ))}
        </ul>
    </div>
  )
}

export default ProductFeatures