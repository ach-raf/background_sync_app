import React, {useState } from 'react';
import './App.css';
import ListUsersComponent from './components/ListUsersComponent';


const App = () => {
    
  return (
    <div className="container">
    <h1>Background sync</h1>
    <div className="flex-row">
      <div className="flex-large">
        <h2>Edit user</h2>
      </div>
      <div className="flex-large">
      <ListUsersComponent />
      </div>
    </div>
  </div>
      
  )
}

export default App