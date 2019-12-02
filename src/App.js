import React, { Component } from 'react';
import './App.css';

import Display from './Display/Display';
import Button from './Button/Button';

class App extends Component {

  state = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    operations: ['Clear', '%', '+', '-', '*', '='],
    operation: '',
    result: 0
  };

  calcButtonClickHandler = (orderStr) => {
    if (this.state.operation.length == 0 && this.state.operations.includes(orderStr)) {
      return;
    }

    let operationStr = this.state.operation;
    operationStr += orderStr;

    this.setState({
      operation: operationStr
    });
  };

  resultButtonClickHandler = () => {
    let number = '', result = 0, arithmeticFunction = '+';

    for (let i = 0; i < this.state.operation.length; i++) {
      if (this.state.numbers.includes(parseInt(this.state.operation[i])) && i != this.state.operation.length - 1) {
        number += this.state.operation[i];
      } else if (this.state.numbers.includes(parseInt(this.state.operation[i]))) {
        number += this.state.operation[i];

        number = parseInt(number);

        if (arithmeticFunction === '+') {
          result += number;
        } else if (arithmeticFunction === '-') {
          result -= number;
        } else if (arithmeticFunction === '*') {
          result *= number;
        } else {
          result /= number;
        }
      } else {
          number = parseInt(number);
          
          if (arithmeticFunction === '+') {
            result += number;
          } else if (arithmeticFunction === '-') {
            result -= number;
          } else if (arithmeticFunction === '*') {
            result *= number;
          } else {
            result /= number;
          }

          number = '';
          arithmeticFunction = this.state.operation[i];
        }
    }

    this.setState({
      operation: '',
      result: result
    });
  };

  //Generates the Calculator Keyboard
  generateKeyboard = () => {
    return (
      <div>
        {
          this.state.operations.map(op => {
            if (op === '=') {
              return <Button text={op} clicked={() => this.resultButtonClickHandler()} key={op}></Button>;
            } else {
              return <Button text={op} clicked={() => this.calcButtonClickHandler(op)} key={op}></Button>;
            }
          })
        }
        {
          this.state.numbers.map(num => {
            return <Button text={num} clicked={() => this.calcButtonClickHandler(num)} key={num}></Button>;
          })
        }
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        {this.generateKeyboard()}
        {console.log(this.state.operation)}
        {console.log(this.state.result)}
      </div>
    );
  }
}

export default App;
