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
    <div className='h-[220px] bg-[#04a784]'>
       <div className='flex ml-[200px] pt-10 items-center gap-4'>
        <img
          src={whatsappLogo}
          alt="WhatsApp"
          className='h-8'
        />
        <div className='text-white uppercase font-medium'>Whatsapp</div>
      </div>
    </div>
     <div className='h-[calc(100vh-220px)] bg-[#eff2f5] flex justify-center items-center relative'>
       <div className='h-[80%] w-[50%] bg-white shadow-2xl flex flex-col gap-4 justify-center items-center absolute -top-[93px]'>
        <Fingerprint className="w-24 h-24 text-primary mb-8" />
        <div>Sign in</div>
        <div>sign in with your google account to get started</div>
        <button onClick={Handlelogin}>Sign in with Google</button>
      </div>
    </div>
     
    </>
  )
}

export default Login