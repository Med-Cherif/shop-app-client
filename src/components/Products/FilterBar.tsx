import "./FilterBar.css"
import { useEffect, useState } from "react";
import FilterProductsType from "./FilterProductsType"
import PhoneFilter from "./Phone/PhoneFilter";
import ClothesFilter from "./Clothes/ClothesFilter"
import HeadphonesFilter from "./Headphone/HeadphonesFilter"
import PriceRange from "./PriceRange"
import { GrClose } from "react-icons/gr"
import AntishockFilter from "./Antishock/AntishockFilter";
import ChargerFilter from "./Charger/ChargerFilter";
import ParfumFilter from "./Parfum/ParfumFilter";
import WatchFilter from "./Watch/WatchFilter";
import { useGlobalState } from "../../AppContext";
import { useSearchParams } from "react-router-dom";
import { getProductType } from "../../helpers/getProductType";

const filterComponents = {
  'phones': <PhoneFilter />,
  'computers': null,
  'clothes': <ClothesFilter />,
  'chargers': <ChargerFilter />,
  'anti shocks': <AntishockFilter />,
  'headphones': <HeadphonesFilter />,
  'earphones': <HeadphonesFilter />,
  'watches': <WatchFilter />,
  'parfums': <ParfumFilter />,
  'soaps': null,
  'deodorants': null,
  'shampoos': null,
}

function getFilterData(searchParams: URLSearchParams) {
  let data = {}
  for (const [key, value] of searchParams.entries()) {
    data = { ...data, [key]: value }
  }
  return data
}

const delay = () => {
  return new Promise((resolve) => setTimeout(resolve, 2000))
}

const FilterBar = () => {
    const { isFilterVisible, closeFilter } = useGlobalState();
    const [searchParams, setSearchParams] = useSearchParams();
    const [filterData, setFilterData] = useState<{ [field: string]: string }>(() => getFilterData(searchParams))
    const [type, setType] = useState<null | string>(null);
    const [status, setStatus] = useState<"loading" | "error" | "success" | null>(null);
    
    const getProducts = () => {
      let data: { [field: string]: string } = {};

      for (let item in filterData) {
        if (filterData[item]) {
          data[item] = filterData[item]
        }
      }

      setSearchParams(data)
      
    }

    const displayFilterProductsByType = (): React.ReactNode => {
      if (!type) return null;

      return (filterComponents as any)[type];
    }

    useEffect(() => {
      setType(getProductType(filterData?.category, filterData?.productType))
  }, [filterData])

    useEffect(() => {
      setStatus('loading');
      delay()
        .then(() => {
          setStatus('success')
          console.log(filterData)
        })
    }, [filterData?.category, filterData?.productType])

    return (
      <div className={`filter-bar ${isFilterVisible ? "active" : ""}`}>
        <div className="filter-bar-wrapper">
          <h2 className="filter-bar-title">Filter products</h2>
          <FilterProductsType filterData={filterData} setFilterData={setFilterData} />
          <PriceRange setFilterData={setFilterData} filterData={filterData} />
          {
            status === 'loading' 
              ? <h2 style={{ textAlign: "center" }}>Loading...</h2> : 
            status === 'success' 
              ? displayFilterProductsByType() :
            status === 'error' ? <h2 style={{ textAlign: "center" }}>Error...</h2> : 
              null
          }
          <button onClick={getProducts} className="filter-submit-btn">Filter</button>
          <GrClose onClick={closeFilter} className="close-icon" />
        </div>
      </div>
    )
}

export default FilterBar