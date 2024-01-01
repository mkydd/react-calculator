import React, { useState } from 'react'
import NumberButton from './NumberButton'
// import Display from './Display'
import OperationButton from './OperationButton'
import EqualButton from './EqualButton'
import ClearButton from './ClearButton'
import '../styles/calculator.css'

function Calculator() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [operation, setOperation] = useState('')
  const [output, setOuput] = useState(null)

  function numberOnClick(number) {
    if (operation.length === 0) {
      setValue1(value1 + number)
    } else {
      setValue2(value2 + number)
    }
  }

  function operationOnClick(operation) {
      setOperation(operation)
  }

  function equalOnClick(value1, value2, operation) {
    const num1 = parseInt(value1)
    const num2 = parseInt(value2)

    switch (operation) {
      case '+':
        setOuput(num1 + num2)
        break;
      case '-':
        setOuput(num1 - num2)
        break;
      case '*':
        setOuput(num1 * num2)
        break;
      case '/':
        setOuput(num1 / num2)
        break;
      default:
        console.log(`error: invalid operation (${operation})`)
    }

  }

  function clearOnClick() {
    setValue1('')
    setValue2('')
    setOperation('')
    setOuput(null)
  }



  return (
    <div className='calculator'>
      <div className="row">
        <ClearButton clearOnClick={clearOnClick}/>
        <OperationButton operation='/' operationOnClick={operationOnClick}/> 
      </div>
        
        <div className="row">
          <NumberButton number='7' numberOnClick={numberOnClick}/>
          <NumberButton number='8' numberOnClick={numberOnClick}/>
          <NumberButton number='9' numberOnClick={numberOnClick}/>
          <OperationButton operation='*' operationOnClick={operationOnClick}/>
        </div>

        <div className="row">
          <NumberButton number='4' numberOnClick={numberOnClick}/>
          <NumberButton number='5' numberOnClick={numberOnClick}/>
          <NumberButton number='6' numberOnClick={numberOnClick}/>
          <OperationButton operation='-' operationOnClick={operationOnClick}/>
        </div>

        <div className="row">
          <NumberButton number='1' numberOnClick={numberOnClick}/>
          <NumberButton number='2' numberOnClick={numberOnClick}/>
          <NumberButton number='3' numberOnClick={numberOnClick}/>
          <OperationButton operation='+' operationOnClick={operationOnClick}/>
        </div>

        <div className="row">
          <NumberButton number='0' numberOnClick={numberOnClick}/>
          <EqualButton operation={operation} value1={value1} value2={value2} equalOnClick={equalOnClick}/>
        </div>
        
        <h1>Output: {output}</h1>
        <h2>Value1: {value1}</h2>
        <h2>Operation: {operation}</h2>
        <h2>Value2: {value2}</h2>
    </div>
  )
}

export default Calculator