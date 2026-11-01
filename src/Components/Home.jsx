import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

function Home(props) {
  const setIsloggedIn = props.setIsloggedIn
  const Navigate = useNavigate()

  const Handlehome = async () => {
    await signOut(auth)
    setIsloggedIn(false)
    Navigate("/Login")
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={Handlehome}>Logout</button>
    </div>
  )
}

export default Home