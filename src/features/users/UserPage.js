import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllPosts, selectPostsByUser } from '../posts/postsSlice'
import { selectUserById } from './userSlice'

const UserPage = ({ match }) => {
  const { userId } = match.params

  const user = useSelector((state) => selectUserById(state, userId))

  const postsForUser = useSelector((state) => selectPostsByUser(state, userId))

  return (
    <section>
      <h2>{user.name}</h2>
      <ul>
        {postsForUser.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default UserPage
