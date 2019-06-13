import React from 'react'

const SpaTwo = (props)=>{
    const cities = ['Canoga Park', 'Pacoima', 'Sun Valley', 'Tarzana', 'Castaic'] 
    const cityOptions = cities.map((city, i)=>{
        return <option key={i} value={city}>{city}</option>
    })
    return(
        <optgroup label='San Clarita Valley'>
            {cityOptions}
        </optgroup>
    )
}


export default SpaTwo;

