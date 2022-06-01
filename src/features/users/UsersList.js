import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllUsers } from './userSlice'

const UsersList = () => {
  const users = useSelector(selectAllUsers)

  return (
    <section>
      <h2>Users</h2>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </section>
  )
}

export default UsersList
