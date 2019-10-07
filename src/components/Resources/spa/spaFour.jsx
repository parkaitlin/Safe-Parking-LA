import React from 'react'

const SpaFour = props => {
  const cities = [
    'Downtown Los Angeles',
    'East Hollywood',
    'Echo Park',
    'Fashion District',
    'Highland Park',
    'Historic Filipenotown',
    'Hollywood',
    'Lincoln Heights',
    'Montecito Heights',
    'Rampart Village',
    'Silverlake',
    'University Park',
    'Venice',
    'Westlake'
  ]
  const cityOptions = cities.map((city, i) => {
    return (
      <option key={i} value={city}>
        {city}
      </option>
    )
  })
  return <optgroup label='Metro LA'>{cityOptions}</optgroup>
}

export default SpaFour
