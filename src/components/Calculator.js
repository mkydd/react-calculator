import React, { useState, useEffect, useRef } from 'react'
import NumberButton from './NumberButton'
// import Display from './Display'
import OperationButton from './OperationButton'
import EqualButton from './EqualButton'
import ClearButton from './ClearButton'
import Display from './Display'
import '../styles/calculator.css'

function Calculator() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [operation, setOperation] = useState('')
  const [output, setOuput] = useState('')

  const hasPageRendered = useRef(false)

  // cant update these values with equalOnClick b/c output is not updated till renrender so value1 will be null
  useEffect(() => {
    if (hasPageRendered.current) {
      if (output) {
        setValue1(output)
      }
    }
    hasPageRendered.current = true
  }, [output])



  function numberOnClick(number) {
    if (value1.length === 0) {
      console.log('value1 + number =', value1 + number)
      setValue1(value1 + number)
    } else {
      console.log('value2 + number =', value2 + number)
      setValue2(value2 + number)
    }
  }

  function operationOnClick(operation) {
      if (value1) {setOperation(operation)}
  }

  function equalOnClick(value1, value2, operation) {
    const num1 = parseInt(value1)
    const num2 = parseInt(value2)

    switch (operation) {
      case '+':
        setOuput((num1 + num2).toString())
        break;
      case '-':
        setOuput((num1 - num2).toString())
        break;
      case '*':
        setOuput((num1 * num2).toString())
        break;
      case '/':
        if (num2 === 0){ 
          clearOnClick()
        } else {
          setOuput((num1 / num2).toString())
        }
        break;
      default:
        console.log(`error: invalid operation (${operation})`)
    }

    setValue2('')
    setOperation('')
  }

  function clearOnClick() {
    setValue1('')
    setValue2('')
    setOperation('')
    setOuput('')
  }

  return (
    <div className='calculator'>
      <div className="row">
        <Display value1={value1} value2={value2} operation={operation} output={output}/>
      </div>

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
    </div>
  )
}

export default Calculator