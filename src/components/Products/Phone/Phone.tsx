import SpecificationItem from "../ProductFeatureItem";

const Phone = () => {
  return (
    <div className='product-phone'>
        <h2 className='product-type-title'>Features:</h2>
        <ul className='product-specifications-list'>
            <SpecificationItem item="Brand" value="Apple" />
            <SpecificationItem item="Model" value="IPhone 11 pro max" />
            <SpecificationItem item="Color" value="Gold" />
            <SpecificationItem item="Size" value="6.5" />
            <SpecificationItem item="OS" value="IOS" />
            <SpecificationItem item="Resolution" value="1242 x 2688 pixels, 19.5:9 ratio (~458 ppi density)" />
            <SpecificationItem item="CPU" value="Apple A13 Bionic (7 nm+), Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)" />
            <SpecificationItem item="Memory" value="4GB RAM" />
            <SpecificationItem item="Storage" value="64GB" />
            <SpecificationItem item="Selfie Camera" value="12 MP, 4K@24/30/60fps, 1080p@30/60/120fps" />
            <SpecificationItem item="Main Camera" value="12 MP, 4K@24/30/60fps, 4K@24/30/60fps, 1080p@30/60/120/240fps" />        
            <SpecificationItem item="Battery" value="3969 mAh" />
        </ul>
    </div>
  )
}

export default Phone