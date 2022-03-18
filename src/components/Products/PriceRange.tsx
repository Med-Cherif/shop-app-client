import React from "react";
import "./PriceRange.css";

interface IProps {
  setFilterData: React.Dispatch<React.SetStateAction<{
    [field: string]: string;
  }>>;
  filterData: { [field: string]: string }
}

const PriceRange = ({ setFilterData, filterData }: IProps) => {

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  return (
    <div className="range">
        <p style={{ marginBottom: 15 }} className="filter-bar-text">Pricing</p>
        <div className="range-inputs">
            <input value={filterData?.minprice || ""} onChange={handleChangePrice} type="text" name="minprice" placeholder="Min Price" />
            <input value={filterData?.maxprice || ""} onChange={handleChangePrice} type="text" name="maxprice" placeholder="Max Price" />
        </div>
    </div>
  )
}

export default PriceRange