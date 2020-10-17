import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.sass";
import img from './assets/test.png'

class App extends Component{
  render(){
    return(
      <div className="App">
        <div className="navbar">this is the navbar</div>
        <div className="main"> this is the main area
          <img src={img}></img>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);