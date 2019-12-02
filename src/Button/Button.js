// The button class is responsible for getting the numbers and
// the operation

import React from 'react';

import "./Button.css";

const button = (props) => {
    return (
        <div>
            <button className="calculatorButtons" onClick={ props.clicked } type="button">{ props.text }</button>
            {/* <p>{props.text}</p> */}
        </div>
    );
};

export default button;