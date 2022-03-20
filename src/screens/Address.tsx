import React, { useState } from 'react'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import FormButton from '../components/FormButton';
import FormInput from '../components/Form/FormInput';


const Address = () => {
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");

    const [data, setData] = useState({
        line1: '',
        line2: '',
        postalCode: ''
    })

    const selectCountry = (value: string) => {
        setCountry(value)
    }

    const selectRegion = (value: string) => {
        setRegion(value)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const fullAddress = {
            country, region, ...data
        }

        console.log(fullAddress);
    }
 
    return (
        <div className="address-screen">
            <div className="container">
                <div className='form-wrapper'>
                    <form onSubmit={handleSubmit} className='form'>
                        <h2 className="form-title">Address</h2>
                        <div className="input-field">
                            <CountryDropdown
                                name='country'
                                classes='country-select'
                                value={country}
                                blacklist={['IL']}
                                onChange={selectCountry} 
                            />
                        </div>
                        <div className="input-field">
                            <RegionDropdown
                                name=''
                                classes='region-select'
                                country={country}
                                value={region}
                                onChange={selectRegion} 
                            />
                        </div>

                        <FormInput 
                            name='line1'
                            onChange={handleChange}
                            type='text'
                            placeholder='Address Line 1'
                        />
                        <FormInput 
                            name='line2'
                            onChange={handleChange}
                            type='text'
                            placeholder='Address Line 2'
                        />
                        <FormInput
                            name='postalCode'
                            onChange={handleChange}
                            type='text'
                            placeholder='Postal Code'
                        />

                        <FormButton 
                            disabled={false}
                            loading={false}
                            text="Add your address"
                        />

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Address