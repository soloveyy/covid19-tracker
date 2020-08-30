import useStats from '../utils/useStats'
import Stats from './Stats'
import { useState } from 'react'

export default function Countries() {
    const countries = useStats('https://covid19.mathdro.id/api/countries')
    console.log(countries);
    const [chosenCountry, setChosenCountry] = useState('PL')
    if(!countries) return <p>Loading...</p>
    return (
        <div>
            <img src={`https://www.countryflags.io/${chosenCountry}/flat/64.png`}></img>
            <select
                className="form-control w-50"
                onChange={e=>{
                    setChosenCountry(e.target.value);
                }}
            >
                {countries.countries.map((country) => (
                    <option selected={chosenCountry === countries.iso2} key={country.iso2} value={country.iso2}>{country.name}</option>
                ))}
            </select>
            <Stats url={`https://covid19.mathdro.id/api/countries/${chosenCountry}`}></Stats>
     </div>
    )
}