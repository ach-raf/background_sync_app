import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import UserDataService from './services/UserDataService';
import EditUserForm from './forms/EditUserForm';
import UsersTable from './tables/UsersTable';
import { Online } from "react-detect-offline";
import SyncData from './components/SyncData';

// This component controls the logic that serve the app
const App = () => {

  const [data, setData] = useState(false);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: '', name: '', email: '', avatar: '' };
  const [currentUser, setCurrentUser] = useState(initialFormState);


  const editRow = user => {
    setEditing(true)
    setCurrentUser(user)
  }

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    // Function that fetch the users data
    async function fetchData() {
      const response = await UserDataService.getUsers();
      if (response.length === 0) {
        if (localStorage.getItem("data") !== null) {
          // We set the value of data from localStorage if we got an empty response from the server
          setData(JSON.parse(localStorage.getItem('data')))
        }
      } else {
        // We set the value of data by the server's response
        setData(response)
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editing]);

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    if (data.length !== 0) {
      // Apply the new info into the data object
      for (var i = 0; i < data.length; i++) {
        if (id === data[i].id) {  //look for a match with id
          data[i] = updatedUser;  //update user
          // Update data
          setData(data)
          break;  //exit loop since you found the user
        }
      }
      // Setting the local storage
      localStorage.setItem('data', JSON.stringify(data));
      // Updating the user on the server
      UserDataService.updateUser(updatedUser)
    } 
  }
  // If editing is true we show the EditUserForm
  // We wait for data to be true before rendering SyncData and UsersTable
  // SyncData is rendered only if there is a connection with the server
  return (
    <div className="container">
      <h1>Sync app offline</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing && (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          {
            data && (
              <Online>
                <SyncData data={data} /></Online>
            )
          }
          {
            data && (
              <UsersTable users={data} editRow={editRow} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App