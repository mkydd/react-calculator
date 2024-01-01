import React from 'react'

function ClearButton({clearOnClick}) {
  return (
    <div>
        <button onClick={clearOnClick}>AC</button>
    </div>
  )
}

export default ClearButton