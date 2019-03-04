import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div id='container'>
      <CalculatorDisplay style='row' text='0' />
      <div className="row">
        <ActionButton styleAction="med" text="clear" />
        <NumberButton numStyle="operator" text="&#247;" />
      </div>

      <div className="row">
        <NumberButton numStyle="sm" text="7" />
        <NumberButton numStyle="sm" text="8" />
        <NumberButton numStyle="sm" text="9" />
        <NumberButton numStyle="operator" text="&#215;" />
      </div>

      <div className="row">
        <NumberButton numStyle="sm" text="4" />
        <NumberButton numStyle="sm" text="5" />
        <NumberButton numStyle="sm" text="6" />
        <NumberButton numStyle="operator" text="&#8722;" />
      </div>

      <div className="row">
        <NumberButton numStyle="sm" text="1" />
        <NumberButton numStyle="sm" text="2" />
        <NumberButton numStyle="sm" text="3" />
        <NumberButton numStyle="operator" text="&#43;" />
      </div>

      <div className="row">
        <ActionButton styleAction='med' text='0' />
        <NumberButton numStyle='operator' text='&#61;' />
      </div>
    </div>
  );
};

export default App;
