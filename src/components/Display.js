import React from 'react'

function Display({value1, value2, operation, output}) {
  if (value1 && !value2) {
    return <div className='display'>{value1}</div>
  } else if (value2) {
    return <div className='display'>{value2}</div>
  } else if (output) {
    return <div className='display'>{output}</div>
  }


  return (
    <div className='display'></div>
  )
}

export default Display