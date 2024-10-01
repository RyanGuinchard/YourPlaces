import React from 'react'

import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [{id: 'u1', name: 'Max', image: 'https://nypost.com/wp-content/uploads/sites/2/2021/06/mclovin-2.jpg?quality=90&strip=all&w=1024', places: 3}]
  return (
    <UsersList items={USERS} />
  )
}

export default Users