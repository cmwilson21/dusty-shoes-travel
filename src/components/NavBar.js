//This is where the menu will live.
import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/travel-list">Travel List</NavLink>
      <NavLink to="/new">Add A Location</NavLink>
    </div>
  )
}

export default NavBar
