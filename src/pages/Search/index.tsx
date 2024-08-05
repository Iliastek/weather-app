import React, { useState } from 'react'
import './search.css'
import WeatherBox from '../../components/Weatherbox'
import { Link } from "react-router-dom";

const Search = () => {
    const cities = ['Hamburg', 'New York', 'Paris', 'Cairo', 'Athen']
    const [filteredCites, setFilteredCities] = useState(cities)
    return (
        <div className='link-to-main'>
            <div className='searchbar'>
                <input type="text" placeholder='Search...' onChange={(e) => {
                    setFilteredCities(cities.filter(city => city.toLowerCase().includes(e.target.value) && city))
                }} />
            </div>

            <Link to="/Main">
                {filteredCites.map((city) => <WeatherBox headline={city} />)}
            </Link>
        </div>

    )
}

export default Search