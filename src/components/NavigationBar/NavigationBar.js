import React, { useState } from 'react'
import MenuNavBar from './MenuNavBar'
import './NavigationBar.css'

const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const onclickChange = e => {
    e.preventDefault()

    setShowMenu(true)
  }

  return (
    <div>
      <div className='navigation-bar-top'>
        <button onClick={e => onclickChange(e)} className='button-style-menu'>
          <div className='logo-menu'></div>
          <div className='logo-menu'></div>
          <div className='logo-menu'></div>
        </button>
        <button className='btn-hire-me'>Hire me 💬 </button>
        <div>{showMenu ? <MenuNavBar /> : null}</div>
      </div>
    </div>
  )
}

export default NavigationBar

//
