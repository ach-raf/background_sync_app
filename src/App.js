import React, {useState, useEffect, Fragment  } from 'react';
import './App.css';
import UserDataService from './services/UserDataService';
import {getLocalData} from './data/local_data';
import EditUserForm from './forms/EditUserForm';
import UserTable from './tables/UserTable';

const App = () => {
    const [data, setData] = useState(false);
    const [editing, setEditing] = useState(false);
    const initialFormState = { id: '', name: '', email: '', avatar: '' };
    const [currentUser, setCurrentUser] = useState(initialFormState);
    

    const editRow = user => {
        setEditing(true)
        setCurrentUser(user)
        
      }
      useEffect(() => {
        // Update the document title using the browser API
        console.log('current user', currentUser);
        
      });
 
      useEffect(() => {
        async function fetchData() {
          // You can await here
          const response = await UserDataService.getUsers();
          //const response = getLocalData();
          console.log('response', response);
          if (!response){
            setData(localStorage.getItem('data'))
            console.log('else', data)
          }
          setData(response)
          // ...
        }
        fetchData();
      }, []); // Or [] if effect doesn't need props or state
      
      const updateUser = (id, updatedUser) => {
        setEditing(false)
        if(data){
          setData(data.map(user => (user.id === id ? updatedUser : user)))
          console.log('updated user', updatedUser)
          UserDataService.updateUser(updatedUser)
          // setter
          localStorage.setItem('data', data);
        }else{
          
          setData(localStorage.getItem('data'))
          console.log('else', data)
        }
    
        

      }
  
      return (
        <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            {editing ? (
              <Fragment>
                <h2>Edit user</h2>
                <EditUserForm
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </Fragment>
            ) : (
              <Fragment>
                <h2></h2>
              </Fragment>
            )}
          </div>
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable users={data} editRow={editRow} />
          </div>
        </div>
      </div>
      
  )
}

export default App