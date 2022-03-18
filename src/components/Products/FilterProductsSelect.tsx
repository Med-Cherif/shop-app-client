import React from 'react'

interface IProps {
    name: string;
    defaultValue: string;
    options: {
        label: string;
        value: string;
    }[]
}

const FilterProductsSelect = ({name, options, defaultValue}: IProps) => {
  return (
    <select className="filter-bar-select" style={{ margin: 0 }} name={name}>
        <option value="">{defaultValue}</option>
        {options.map((option) => (
            <option key={option.label} value={option.value}>{option.label}</option>
        ))}
    </select>
  )
}

export default FilterProductsSelect