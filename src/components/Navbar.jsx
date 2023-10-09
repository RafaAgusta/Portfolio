import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='containerNavbar'>
        <div className="logo"><a href="#">RAF.</a></div>
      <div className='navbar'>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Education</a>
        <a href="#">Skills</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar