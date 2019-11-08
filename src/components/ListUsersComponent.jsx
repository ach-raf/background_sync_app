import React, { Component } from 'react';
import UserDataService from '../services/UserDataService';
class ListUsersComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.refreshUsers = this.refreshUsers.bind(this)
    }

    componentDidMount() {
        this.refreshUsers();
    }

    refreshUsers() {
        UserDataService.retrieveAllUsers()
            .then(
                response => {
                    this.setState({users: response.data})
                }
            )
    }
    render() {
        return (
            <div className="container">
                <h3>All Users</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Avatar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td><img src={require(`../ressources/${user.avatar}`)}alt="" style={{height: 80}}></img></td>
                                        </tr>
                    
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListUsersComponent;