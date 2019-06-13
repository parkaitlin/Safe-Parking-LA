import React from 'react'

const SpaEight = (props)=>{
    const cities = ['Carson', 'Gardena', 'Harbor City', 'Hawthorne', 'Hermosa Beach', 'Inglewood', 'Lawndale', 'Lennox', 'Lomita', 'Long Beach', 'Redondo Beach', 'San Pedro', 'Torrance', 'Wilmington'] 
    const cityOptions = cities.map((city, i)=>{
        return <option key={i} value={city}>{city}</option>
    })
    return(
        <optgroup label='South Bay'>
            {cityOptions}
        </optgroup>
    )
}


export default SpaEight;

