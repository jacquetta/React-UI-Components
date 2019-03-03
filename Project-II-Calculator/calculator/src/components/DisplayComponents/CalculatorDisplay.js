import React from 'react';
import './Display.css';
// import ActionButton from '../ButtonComponents/ActionButton';
// import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorDisplay = props => {
    return (
        <div id="display" className={props.style}>
          <h2 className="none">{props.text}</h2>
        </div>
    );
}

export default CalculatorDisplay;