import React, { Component, useState } from 'react';
import UserDataService from '../services/UserDataService';
import UserTable from '../tables/UserTable';

const ListUsersComponen = () => {
    const initialUsersState = {
        users: [],
        message: null
    }
  
    const [users, setUsers] = useState(initialUsersState)
  
    const updateUsers = users => {
        setUsers({ users: users})
    }
  }

export default ListUsersComponen;