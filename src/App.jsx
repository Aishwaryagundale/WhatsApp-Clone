import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Components/Home'
import Login from './Components/Login'
import Chat from './Components/Chat'
import ProtectedRoute from './Components/ProtectedRoute'
import PageNotFound from './Components/PageNotFound'

function App() {
  const [IsloggedIn, setIsloggedIn] = useState(true)

  return (
    <>
      <h1></h1>

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute IsloggedIn={IsloggedIn}>
              <Home setIsloggedIn={setIsloggedIn} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/chat/:uniqueId"
          element={
            <ProtectedRoute IsloggedIn={IsloggedIn}>
              <Chat />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Login"
          element={<Login setIsloggedIn={setIsloggedIn} />}
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App