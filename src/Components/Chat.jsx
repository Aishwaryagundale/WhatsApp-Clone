import React from 'react'
import { useParams } from 'react-router-dom'
function Chat() {
    const params = useParams();
    
  return (
  
    <h1>Chat : {params.uniqueId}</h1>
  )
}

export default Chat