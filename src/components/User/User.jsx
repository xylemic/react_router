import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userId } = useParams();
  return (
    <div className='bg-orange-500 text-white text-center text-3xl py-4'>User: {userId}</div>
  )
}

export default User
