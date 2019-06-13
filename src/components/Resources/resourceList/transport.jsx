import React from 'react'

const TransportList = (props)=>{
  const resource = props.list.map((info, i)=>{
    return(
      <div key={i}>
        <h3>{info.OPERATOR}</h3>
        <p>Phone#: {info.PHONE}</p>
        <p>Hours: {info.HOURS_OF_OPERATION}</p>
        <p>Eligibility: {info.ELIGIBILITY_REQUIREMENTS}</p>
        <p>Walk-in: {info.WALK_INS}</p>
        {info.WEBSITE !== "N/A" && <a href={info.WEBSITE}>Website</a>}
        <p>{info.ADDRESS}</p>
      </div>
    )
  })
  return(
    resource
  )
}

export default TransportList;