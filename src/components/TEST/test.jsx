import React from 'react'
import { transportation } from '../../MODELS/TRANSPORTATION'

const Test = () => {
  return (
    <div>
      <h1>These are the regions.</h1>
      <p>
        { transportation[0].PROGRAM_NAME }

      </p>
    </div>
  )
}

export default Test