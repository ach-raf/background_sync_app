import UserApp from './components/UserApp';
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <UserApp />
      </div>
        
    );
  }
}

export default App;
