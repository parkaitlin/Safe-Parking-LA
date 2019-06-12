import React from 'react'

const CityBySpa = (props)=>{
  const spaOne = one.map((city, i)=>{
    return <option key={i} value={city}/>
})
  const cities = [
    ['Baldwin Park', 'Bellflower', 'Carson', 'Claremont', 'Compton', 'Downey', 'Glendora', 'Hawaiian Gardens', 'Hawthorne', 'Hermosa Beach', 'Inglewood', 'Irwindale', 'Lakewood', 'Lancaster', 'Lawndale', 'Lennox', 'Lomita', 'Pomona', 'Pasadena', 'Pico-Robertson', 'Rampart Village', 'Redondo Beach', 'San Dimas', 'San Gabriel', 'San Pedro', 'Santa Monica', 'South El Monte', 'Torrance', 'Venice', 'Wilmington']
}


const AllStates = (props)=>{
    const states = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY']
    const stateOptions = states.map((state, i)=>{
        return <option key={i} value={state}/>
    })
    return(
        <datalist id='states'>
            {stateOptions}
        </datalist>
    )
}

export default AllStates;