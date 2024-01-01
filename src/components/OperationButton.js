import React from 'react'

function OperationButton({operation, operationOnClick}) {
  return (
    <div>
        <button className='arithmetic-button button' onClick={() => operationOnClick(operation)}>{operation}</button>
    </div>
  )
}

export default OperationButton