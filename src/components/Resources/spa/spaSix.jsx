import React from 'react'

const SpaSix = props => {
  const cities = ['Compton', 'Hacienda Village', 'Lynwood', 'South Park']
  const cityOptions = cities.map((city, i) => {
    return (
      <option key={i} value={city}>
        {city}
      </option>
    )
  })
  return <optgroup label='Central LA'>{cityOptions}</optgroup>
}

export default SpaSix
