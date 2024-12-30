import React from 'react'
import { NavLink } from 'react-router-dom'

import '/src/styles/nav.css'

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="list ">
        <NavLink className={({ isActive }) => "NavLink " + (isActive ? "active-link" : "")} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => "NavLink " + (isActive ? "active-link" : "")} to='/paste'>Paste</NavLink>
      </ul>
    </div>
  )
}

export default Navbar
