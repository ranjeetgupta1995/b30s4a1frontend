import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Signup } from '../components/Signup'
import { Login } from '../components/Login'
import { Books } from '../components/Books'
import { Createbooks } from '../components/Createbooks'

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<Books />} />
        <Route path="/createbooks" element={<Createbooks />} />
      </Routes>
    </>
  )
}
