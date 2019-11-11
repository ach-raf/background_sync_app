import React from 'react'
import UserDataService from '../services/UserDataService';

const UserTable = props => {
var users = [];
  var internetConnection = navigator.onLine;
  if (!internetConnection){
     users = [{
      "id": "u1",
      "name": "User1",
      "email": "email1@email.com",
      "avatar": "link_avatar1.jpg"
    }]

  }

  return (
<table className="table">
    <thead>
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Avatar</th>
        <th>Update</th>
    </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><img src={require(`../ressources/${user.avatar}`)} alt="" style={{height: 80}}></img></td>
            <td><button onClick={() => { props.editRow(user) }} className="button muted-button" >Edit</button></td>
          </tr>
          ))
        ) 
        : (
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><img src={require(`../ressources/${user.avatar}`)} alt="" style={{height: 80}}></img></td>
              <td><button onClick={() => { props.editRow(user) }} className="button muted-button" >Edit</button></td>
            </tr>
            ))
      )}
    </tbody>
  </table>
  )
}

export default UserTable