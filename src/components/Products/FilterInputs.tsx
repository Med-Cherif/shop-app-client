import React from 'react'

const FilterInputs = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`filter-inputs ${className ? className : ""}`}>
        {children}
    </div>
  )
}

export default FilterInputs