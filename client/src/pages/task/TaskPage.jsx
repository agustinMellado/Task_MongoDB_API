import React from 'react'
import { useAuth } from '../../context/authContext'

function TaskPage() {

  const {user} = useAuth()
  return (
    <div>TaskPage</div>
  )
}

export default TaskPage