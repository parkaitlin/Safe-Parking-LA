import React from 'react'

const SpaSeven = props => {
  const cities = [
    'Bell',
    'Bellflower',
    'Cerritos',
    'Downey',
    'East Los Angeles',
    'Hawaiian Gardens',
    'Huntington Park',
    'La Mirada',
    'Lakewood',
    'Norwalk',
    'Santa Fe Springs',
    'Whittier'
  ]
  const cityOptions = cities.map((city, i) => {
    return (
      <option key={i} value={city}>
        {city}
      </option>
    )
  })
  return <optgroup label='South East LA'>{cityOptions}</optgroup>
}

export default SpaSeven
