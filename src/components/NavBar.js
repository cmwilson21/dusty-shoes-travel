import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <NavLink className="navbarlink" to="/">Home</NavLink>
      <NavLink className="navbarlink" to="/travel-list">Travel List</NavLink>
      <NavLink className="navbarlink" to="/new">Add A Location</NavLink>
      <NavLink className="navbarlink" to="/been-there">Been There</NavLink>
    </div>
  )
}

export default NavBar
