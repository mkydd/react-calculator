import React from 'react'

function OperationButton({operation, operationOnClick}) {
  return (
    <div>
        <button onClick={() => operationOnClick(operation)}>{operation}</button>
    </div>
  )
}

export default OperationButton