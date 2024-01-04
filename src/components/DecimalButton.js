import React from 'react'

function DecimalButton({onClick}) {
  return (
    <div>
        <button className="decimal-button button" onClick={() => onClick('.')}>.</button>
    </div>
  )
}

export default DecimalButton