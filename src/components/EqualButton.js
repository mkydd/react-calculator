import React from 'react'

function EqualButton({operation, value1, value2, equalOnClick}) {
  return (
    <button className='equal-button button' onClick={() => equalOnClick(value1, value2, operation)}>=</button>
  )
}

export default EqualButton