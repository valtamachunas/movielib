import React from 'react';
import './App.css';
import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Hello World</h1>
      </div>
      );
  }
}

export default App;
