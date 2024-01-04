import React from 'react'

function DecimalButton({onClick}) {
  return (
    <div>
        <button className="button" onClick={() => onClick('.')}>.</button>
    </div>
  )
}

export default DecimalButton