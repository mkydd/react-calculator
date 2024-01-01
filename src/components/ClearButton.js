import React from 'react'

function ClearButton({clearOnClick}) {
  return (
    <div>
        <button className='clear-button button' onClick={clearOnClick}>AC</button>
    </div>
  )
}

export default ClearButton