import React, { useState, useEffect } from 'react'

// The component to edit a single user
const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  // using react hooks to get the current user
  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [props]
  )

  // storing each change to the current user
  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  return (
    <form
      // on submit event
      onSubmit={event => {
        // preventing the default behavior, realoading the page.
        event.preventDefault()
        // getting the updateUser method from the props un send the new updated attributes
        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="email" value={user.email} onChange={handleInputChange} />
      <button>Update user</button>

      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm