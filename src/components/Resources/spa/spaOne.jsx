import React from 'react'

const SpaOne = props => {
  const cities = ['Lancaster', 'Palmdale']
  const cityOptions = cities.map((city, i) => {
    return (
      <option key={i} value={city}>
        {city}
      </option>
    )
  })
  return <optgroup label='Antelope Valley'>{cityOptions}</optgroup>
}

export default SpaOne
