import React, { Component } from 'react';
import UserDataService from '../services/UserDataService'

// this component only renders when online, I used that to sync with the server
class SyncData extends Component {
  render() {
    var data = this.props.data
    data.map(user => {
      return UserDataService.updateUser(user)
    })
    return (
      <div />
    );
  }
}
export default SyncData;