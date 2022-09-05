import React from 'react';
import {ReactPropTypes} from "react";
import logo from './logo.svg';
import './App.css';

type SquareProps = {
  n: number;
}

function Square({n}: SquareProps) {
  return <>{n*n}</>
}

type OnlyEvenProps = {
  arr: number[]
}

function OnlyEven({arr}: OnlyEvenProps ) {
  return <ul>{arr.filter(item => item%2 === 0).map((item, index) => <li>{item}</li>)}</ul>
}

type TemperatureProps = {
  number: number
}

function Temperature({number}: TemperatureProps){
  let style = "black";
  if (number < 0)
  {
    style = "green";
  }
  else if (number > 0)
  {
    style = "red";
  }
  return <p style={{color: style}}>Temperature = {number}</p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Square n={3}/>
        <Temperature number={123}/>
        <OnlyEven arr={[1, 2, 3, 4, 5, 6, 10]}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
