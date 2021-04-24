import React, { useState } from 'react'
import './MenuNavBar.css'

const MenuNavBar = () => {
  const returnHomePage = e => {}
  return (
    <>
      <div className='navBar'>
        <nav>
          <ul>
            <li onclick={e => returnHomePage(e)}>HOME</li>
            <li>WORK</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>
    </>
  )
}
export default MenuNavBar
