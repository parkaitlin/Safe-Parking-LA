import React from 'react'

const SpaFive = (props)=>{
    const cities = ['Culver City', 'Pico-Robertson', 'Santa Monica', 'Sawtelle', 'South Los Angeles', 'Venice', 'West LA'] 
    const cityOptions = cities.map((city, i)=>{
        return <option key={i} value={city}>{city}</option>
    })
    return(
        <optgroup label='West LA'>
            {cityOptions}
        </optgroup>
    )
}


export default SpaFive;
