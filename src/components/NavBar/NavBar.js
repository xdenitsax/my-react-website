import React from 'react'
import './NavBar.css'
import { FaLaptopCode } from 'react-icons/fa'
const NavBar = () => {
  return (
    <>
      <nav>
        <h1 className='navigation-letter'>
          {' '}
          <FaLaptopCode />
        </h1>
        <button className='resume'>Resume</button>
      </nav>
    </>
  )
}

export default NavBar
