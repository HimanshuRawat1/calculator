import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [displayValue,setDisplayValue]=useState('0');
  const [previousValue,setPreviousValue]=useState(null);
  const [operation,setOperation]=useState(null);
  const handleNumberClick=(number)=> {
    setDisplayValue((prev)=>(prev==='0'?String(number):prev+number));
  };
  const handleOperatorClick=(operator)=> {
    if(previousValue===null) {
      setPreviousValue(parseFloat(displayValue));
    }
    else if(operation) {
      const result=performCalculation();
      setDisplayValue(String(result));
      setPreviousValue(result);
    }
    setOperation(operator);
    setDisplayValue('0');
  };
  const handleEqualsClick=()=> {
    if(previousValue!==null && operation) {
      const result=performCalculation();
      setDisplayValue(String(result));
      setPreviousValue(null);
      setOperation(null);
    }
  };
  const handleClearClick=()=> {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperation(null);
  };
  const handleDecimalClick=()=> {
    if(!displayValue.includes('.')) {
      setDisplayValue((prev)=>prev+'.');
    }
  };
  const performCalculation=()=> {
    const currentValue=parseFloat(displayValue);
    switch(operation) {
      case '+':
        return previousValue+currentValue;
      case '-':
        return previousValue-currentValue;
      case '*':
        return previousValue*currentValue;
      case '/':
        return previousValue/currentValue;
      default:
        return currentValue;
    }
  };
return (
  <div className="calculator">
    <div className="display">{displayValue}</div>
    <div className="buttons">
      <button onClick={handleClearClick}>Clear</button>
      <button onClick={()=>handleOperatorClick('+')}>+</button>
      <button onClick={()=>handleNumberClick(1)}>1</button>
      <button onClick={()=>handleNumberClick(2)}>2</button>
      <button onClick={()=>handleNumberClick(3)}>3</button>
      <button onClick={()=>handleOperatorClick('-')}>-</button>
      <button onClick={()=>handleNumberClick(4)}>4</button>
      <button onClick={()=>handleNumberClick(5)}>5</button>
      <button onClick={()=>handleNumberClick(6)}>6</button>
      <button onClick={()=>handleOperatorClick('*')}>*</button>
      <button onClick={()=>handleNumberClick(7)}>7</button>
      <button onClick={()=>handleNumberClick(8)}>8</button>
      <button onClick={()=>handleNumberClick(9)}>9</button>
      <button onClick={()=>handleOperatorClick('/')}>/</button>
      <button onClick={()=>handleNumberClick(0)}>0</button>
      <button onClick={handleDecimalClick}>.</button>
      <button className="equals" onClick={handleEqualsClick}>=</button>
    </div>
  </div>
  );
}

export default Calculator;