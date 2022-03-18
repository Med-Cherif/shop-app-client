import ProductFeatureItem from "./ProductFeatureItem";

const ProductFeatures = () => {
  return (
    <div className='product-feature'>
        <h2 className='product-type-title'>Features:</h2>
        <ul className='product-specifications-list'>
            <ProductFeatureItem item="Brand" value="Apple" />
            <ProductFeatureItem item="Model" value="IPhone 11 pro max" />
            <ProductFeatureItem item="Color" value="Gold" />
            <ProductFeatureItem item="Size" value="6.5" />
            <ProductFeatureItem item="OS" value="IOS" />
            <ProductFeatureItem item="Resolution" value="1242 x 2688 pixels, 19.5:9 ratio (~458 ppi density)" />
            <ProductFeatureItem item="CPU" value="Apple A13 Bionic (7 nm+), Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)" />
            <ProductFeatureItem item="Memory" value="4GB RAM" />
            <ProductFeatureItem item="Storage" value="64GB" />
            <ProductFeatureItem item="Selfie Camera" value="12 MP, 4K@24/30/60fps, 1080p@30/60/120fps" />
            <ProductFeatureItem item="Main Camera" value="12 MP, 4K@24/30/60fps, 4K@24/30/60fps, 1080p@30/60/120/240fps" />        
            <ProductFeatureItem item="Battery" value="3969 mAh" />
        </ul>
    </div>
  )
}

export default ProductFeatures