import React from 'react'

interface IProps {
    label: string;
    name: string;
    checked?: boolean;
    onChange: () => void;
}

const FilterInputRadio = ({ label, name, checked, onChange }: IProps) => {
  return (
    <div className="filter-input">
        <input onChange={onChange} type="radio" id={label} name={name} checked={checked} />
        <label htmlFor={label}>{label}</label>
    </div>
  )
}

export default FilterInputRadio