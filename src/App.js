import React, { Component } from 'react';
import './App.css';

import Display from './Display/Display';
import Button from './Button/Button';

class App extends Component {

  state = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    operations: ['Clear', '%', '+', '-', '*'],
    result: 0
  };

  keyboardGenerator = () => {
    return (
      <div>
        {this.state.operations.map(op => {
          return <Button text={op} key={op}/>
        })}
        
        {this.state.numbers.map(num => {
          return <Button text={ num } key={num} />
        }) }
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        <Display opResult={ this.state.result }/>
        { this.keyboardGenerator() }
      </div>
    );
  }
}

export default App;
