import React from 'react'

const SpaThree = (props)=>{
    const cities = ['Arcadia', 'Azuza', 'Baldwin Park', 'Claremont', 'Covina', 'Duarte', 'El Monte', 'Glendora', 'Irwindale', 'La Verne', 'Monrovia', 'Pomona', 'Pasadena', 'San Dimas', 'San Gabriel', 'South El Monte'] 
    const cityOptions = cities.map((city, i)=>{
        return <option key={i} value={city}>{city}</option>
    })
    return(
        <optgroup label='San Gabriel Valley'>
            {cityOptions}
        </optgroup>
    )
}


export default SpaThree;

