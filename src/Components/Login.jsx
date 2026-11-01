import React from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../firebase'
import { Fingerprint } from "lucide-react";
import whatsappLogo from "../assets/whatsapp.svg";

function Login(props) {
  const Navigate = useNavigate()
  const setIsloggedIn = props.setIsloggedIn

  const Handlelogin = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider())
      setIsloggedIn(true)
      Navigate("/")
      console.log(result)
    } catch (error) {
      console.error("Login Error:", error)
    }
  }

  return (
    <>
      <div>
        <img
          src={whatsappLogo}
          alt="WhatsApp"
        />
        <div>Whatsapp</div>
      </div>
      <div>
        <Fingerprint className="w-24 h-24 text-primary mb-8" />
        <div>Sign in</div>
        <div>sign in with your google account to get started</div>
        <button onClick={Handlelogin}>Sign in with Google</button>
      </div>
    </>
  )
}

export default Login