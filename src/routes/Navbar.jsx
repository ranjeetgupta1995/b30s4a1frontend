import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{display:"flex", gap: "10px"}}>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/books">Books</Link>
        <Link to="/createbooks">Add Books</Link>
    </div>
  )
}
