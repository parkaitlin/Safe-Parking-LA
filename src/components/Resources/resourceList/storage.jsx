import React from 'react'
import { ResourceCards } from './styled'

const StorageList = props => {
  const resource = props.list.map((info, i) => {
    return (
      <ResourceCards key={i}>
        <h3>{info.OPERATOR}</h3>
        <p>Phone#: {info.PHONE}</p>
        <p>Hours: {info.HOURS_OF_OPERATION}</p>
        <p>Eligibility: {info.ELIGIBILITY_REQUIREMENTS}</p>
        <p>Walk-in: {info.WALK_INS}</p>
        {info.WEBSITE !== 'N/A' && <a href={info.WEBSITE}>Website</a>}
        <p>{info.ADDRESS}</p>
      </ResourceCards>
    )
  })
  return (
    <>
      <h3 className='city-name'>{props.city}</h3>
      {props.secondCity && <h3 className='city-name'>{props.cityTwo}</h3>}
      {resource}
    </>
  )
}

export default StorageList
