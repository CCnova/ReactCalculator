// display class is responsible for showing
// the operation and the results


import React from 'react';

const display = ( props ) => {
    return (
        <div>
            <p>{ props.opDescription }</p>
        </div>
    );
};

export default display;