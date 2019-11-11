import React, { useState } from 'react';
import UserTable from './tables/UserTable';

const Offline = () => {
  const [users, setUsers] = useState(usersData)
  this.state = {
      apple:JSON.parse(localStorage.getItem('users'))
    } 
 

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
}

export default Offline