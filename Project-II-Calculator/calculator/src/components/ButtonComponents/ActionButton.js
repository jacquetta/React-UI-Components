import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
            <button className={props.styleAction}>{props.text}</button>
    )
}

export default ActionButton;