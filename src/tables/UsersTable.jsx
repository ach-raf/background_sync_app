import React from 'react'

const UsersTable = props => {
  // const { users } = props means assign props.users to a new const named users
  const { users } = props

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
        {users.length > 0 && (
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><img src={require(`../ressources/${user.avatar}`)} alt="" style={{ height: 80 }}></img></td>
              <td><button onClick={() => { props.editRow(user) }} className="button muted-button" >Edit</button></td>
            </tr>
          ))
        )
        }
      </tbody>
    </table>
  )
}

export default UsersTable