import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute(props) {
  const IsloggedIn = props.IsloggedIn
  const children = props.children

  if (IsloggedIn) {
    return children
  } else {
    return <Navigate to="/Login" />
  }
}

export default ProtectedRoute