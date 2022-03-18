
interface IProps {
    label: string;
    name: string;
}

const ProductsFilterCheckbox = ({ name, label }: IProps) => {
  return (
    <div className="filter-input">
        <input type="checkbox" id={label} name={name} />
        <label htmlFor={label}>{label}</label>
    </div>
  )
}

export default ProductsFilterCheckbox