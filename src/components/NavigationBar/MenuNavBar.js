import React from 'react'
import './MenuNavBar.css'

const MenuNavBar = () => {
  const returnHomePage = e => {}
  return (
    <>
      <div className='navBar'>
        <nav>
          <ul>
            <li class='css-link' onclick={e => returnHomePage(e)}>
              HOME
            </li>
            <li class='css-link'>WORK</li>
            <li class='css-link'>ABOUT</li>
            <li class='css-link'>CONTACT</li>
          </ul>
        </nav>
      </div>
    </>
  )
}
export default MenuNavBar
