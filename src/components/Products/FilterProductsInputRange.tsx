import FilterInputs from "./FilterInputs"

interface IProps {
    min: { name: string, placeholder: string };
    max: { name: string, placeholder: string };
}

const FilterProductsInputRange = ({ min, max }: IProps) => {
  return (
    <FilterInputs className="range-inputs">
        <input type="text" name={min.name} placeholder={min.placeholder} />
        <input type="text" name={max.name} placeholder={max.placeholder} />
    </FilterInputs>
  )
}

export default FilterProductsInputRange