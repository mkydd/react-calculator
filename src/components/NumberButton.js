import React from 'react'
import '../styles/NumberButton.css'

function NumberButton({ id, numberOnClick }) {
  return (
    <div>
        <button className='number-button' onClick={() => numberOnClick(id)}>{id}</button>
    </div>
  )
}

export default NumberButton