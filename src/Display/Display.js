// display class is responsible for showing
// the operation and the results
import React from 'react';

import "./Display.css";

const display = ( props ) => {
    return (
        <div>
            <p className="calculatorDisplay">{ props.opDescription }</p>
        </div>
    );
};

export default display;