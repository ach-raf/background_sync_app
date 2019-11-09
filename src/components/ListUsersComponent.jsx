import React, { Component, useState, useEffect  } from 'react';
import UserDataService from '../services/UserDataService';
import UserTable from '../tables/UserTable';
//<UserTable users={users}/>
function ListUsersComponent () {
    const [data, setData] = useState(false);
    const [editing, setEditing] = useState(false);
    const initialFormState = { id: '', name: '', email: '', avatar: '' };
    const [currentUser, setCurrentUser] = useState(false);

    const editRow = user => {
        console.log('user', user);
        setEditing(true)
        setCurrentUser({ id: user.id, name: user.name, email: user.email, avatar: user.avatar })
        console.log('current user', currentUser);
      }


      useEffect(() => {
        async function fetchData() {
          // You can await here
          const response = await UserDataService.getUsers();
          console.log('response', response);
          setData(response)
          // ...
        }
        fetchData();
      }, []); // Or [] if effect doesn't need props or state
      
      
  
    
  
    return (
      <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add user</h2>
          </div>
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable users = {data} editRow={editRow}/>
          </div>
        </div>
      </div>
    )
  }
  
  export default ListUsersComponent