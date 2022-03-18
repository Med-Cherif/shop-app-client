interface IProps {
    item: string;
    value: string;
}

const SpecificationItem = ({ item, value }: IProps) => {
  return (
    <li className="product-specification-item">
        <span className="product-specification-item-key">{item}</span>: <span className="product-specification-item-value">{value}</span>
    </li>
  )
}

export default SpecificationItem