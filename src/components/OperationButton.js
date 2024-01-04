import React from 'react'

function OperationButton({operation, operationOnClick, curr_operation}) {
  const mystyles = {
    border: '1px black solid', 
    color: 'rgba(255, 0, 0, 0.818)', 
    backgroundColor: 'white'
  }

  if (operation === curr_operation) {
    return <button className={`operation-button button`} style={mystyles} onClick={() => operationOnClick(operation)}>{operation}</button>
  }
  return (
    <div>
        <button className={`operation-button button`} onClick={() => operationOnClick(operation)}>{operation}</button>
    </div>
  )
}

export default OperationButton