import React from 'react'

function NumberButton({ number, numberOnClick }) {
  return (
    <div>
        <button className={`number-button button number-${number}`} onClick={() => numberOnClick(number)}>{number}</button>
    </div>
  )
}

export default NumberButton