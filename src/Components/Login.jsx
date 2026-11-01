import React from 'react'
import { Fingerprint } from "lucide-react";
import whatsappLogo from "../assets/whatsapp.svg";
function Login() {
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
      <button>Sign in with Google</button>
     </div>
    </>
   
  )
}

export default Login