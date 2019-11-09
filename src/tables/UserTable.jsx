import React from 'react'

const UserTable = props => (
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
        ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable