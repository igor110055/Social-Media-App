import classNames from 'classnames'
import { formatDistanceToNow } from 'date-fns'
import { parseISO } from 'date-fns/esm'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../users/userSlice'
import {
  allNotificationsRead,
  selectAllNotifications,
} from './notificationsSlice'

export const NotificationList = () => {
  const dispatch = useDispatch()
  const notifications = useSelector(selectAllNotifications)
  const users = useSelector(selectAllUsers)

  useEffect(() => {
    dispatch(allNotificationsRead())
  }, [])

  const renderedNotifications = notifications.map((notification) => {
    const notificationClassname = classNames('notification', {
      new: notification.isNew,
    })
    const date = parseISO(notification.date)
    const timeAgo = formatDistanceToNow(date)
    const user = users.find((user) => user.id === notification.user) || {
      name: 'Unknown User',
    }

    return (
      <div key={notification.id} className={notificationClassname}>
        <div>
          <b>{user.name}</b> {notification.message}
        </div>
        <div title={notification.date}>
          <i>{timeAgo} ago</i>
        </div>
      </div>
    )
  })

  return (
    <section className="notificationsList">
      <h2>Notifications</h2>
      {renderedNotifications}
    </section>
  )
}
