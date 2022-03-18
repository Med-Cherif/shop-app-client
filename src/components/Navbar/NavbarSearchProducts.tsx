import React, { useState } from 'react'
import { GrSearch } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom';

const NavbarSearchProducts = () => {

    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const search = () => {
        navigate(`/products?search=${searchValue}`)
    }

    const searchOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key.toLowerCase() === 'enter') {
            search();
        }
    }

    return (
        <div className="navbar-center">
            <div className="search-input-container">
                <input 
                    type="text" 
                    value={searchValue}
                    placeholder="Search for products" 
                    onKeyUp={searchOnEnter}
                    onChange={onChangeInput}
                />
                <GrSearch onClick={search} />
            </div>
        </div>
    )
}

export default NavbarSearchProducts;