import React, { useState, useEffect, useRef } from 'react'
import NumberButton from './NumberButton'
import OperationButton from './OperationButton'
import EqualButton from './EqualButton'
import ClearButton from './ClearButton'
import Display from './Display'
import DecimalButton from './DecimalButton'
import '../styles/calculator.css'

function Calculator() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [operation, setOperation] = useState('')
  const [output, setOuput] = useState('')
  const [decimal1, setDecimal1] = useState(false)
  const [decimal2, setDecimal2] = useState(false)

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

  function numberOnClick(value) {
    // console.log('value1.length =', value1.length)
    if (!operation) {
      if (value === '.' && !decimal1) {
        setValue1(value1 + value)
        setDecimal1(true)
      } else if (value !== '.') {
        console.log('value1 + number =', value1 + value)
        setValue1(value1 + value)
      }
    } else {
      if (value === '.' && !decimal2) {
        setValue2(value2 + value)
        setDecimal2(true)
      } else if (value !== '.') {
        console.log('value2 + number =', value2 + value)
        setValue2(value2 + value)
      }
    }
  }

  function operationOnClick(operation) {
    if (value1) {
      setOperation(operation)
      console.log('operation =', operation)
    }
  }

  function equalOnClick(value1, value2, operation) {
    const num1 = parseFloat(value1)
    const num2 = parseFloat(value2)

    console.log(`num1: ${num1} and num2: ${num2}`)

    switch (operation) {
      case '+':
        decimal1 | decimal2 ? setOuput((num1 + num2).toFixed(4).toString()) : setOuput((num1 + num2).toString())
        break;
      case '-':
        decimal1 | decimal2 ? setOuput((num1 - num2).toFixed(4).toString()) : setOuput((num1 - num2).toString())
        break;
      case '*':
        decimal1 | decimal2 ? setOuput((num1 * num2).toFixed(4).toString()) : setOuput((num1 * num2).toString())
        break;
      case '/':
        if (num2 === 0){ 
          clearOnClick()
        } else {
          decimal1 | decimal2 ? setOuput((num1 / num2).toFixed(4).toString()) : setOuput((num1 / num2).toString())
        }
        break;
      default:
        console.log(`error: invalid operation (${operation})`)
    }

    setValue2('')
    setDecimal1(decimal2)
    setDecimal2(false)
    setOperation('')
  }

  function clearOnClick() {
    setValue1('')
    setValue2('')
    setDecimal1(false)
    setDecimal1(false)
    setOperation('')
    setOuput('')
  }

  return (
    <div className='calculator'>
      <style> backgroundColor: red;</style>
      <div className="row">
        <Display value1={value1} value2={value2} operation={operation} output={output}/>
      </div>

      <div className="row">
        <ClearButton clearOnClick={clearOnClick}/>
        <OperationButton operation='/' operationOnClick={operationOnClick} curr_operation={operation}/> 
      </div>
        
        <div className="row">
          <NumberButton number='7' numberOnClick={numberOnClick}/>
          <NumberButton number='8' numberOnClick={numberOnClick}/>
          <NumberButton number='9' numberOnClick={numberOnClick}/>
          <OperationButton operation='*' operationOnClick={operationOnClick} curr_operation={operation}/>
        </div>

        <div className="row">
          <NumberButton number='4' numberOnClick={numberOnClick}/>
          <NumberButton number='5' numberOnClick={numberOnClick}/>
          <NumberButton number='6' numberOnClick={numberOnClick}/>
          <OperationButton operation='-' operationOnClick={operationOnClick} curr_operation={operation}/>
        </div>

        <div className="row">
          <NumberButton number='1' numberOnClick={numberOnClick}/>
          <NumberButton number='2' numberOnClick={numberOnClick}/>
          <NumberButton number='3' numberOnClick={numberOnClick}/>
          <OperationButton operation='+' operationOnClick={operationOnClick} curr_operation={operation}/>
        </div>

        <div className="row">
          <NumberButton number='0' numberOnClick={numberOnClick}/>
          <DecimalButton onClick={numberOnClick}/>
          <EqualButton operation={operation} value1={value1} value2={value2} equalOnClick={equalOnClick}/>
        </div>
    </div>
  )
}

export default Calculator