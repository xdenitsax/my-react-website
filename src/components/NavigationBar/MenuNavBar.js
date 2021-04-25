import React from 'react'
import './MenuNavBar.css'

const MenuNavBar = ({ scrollToWork, scrollToAboutMe }) => {
  return (
    <>
      <div className='navBar'>
        <nav>
          <ul>
            <li className='css-link'>HOME</li>
            <li className='css-link' onClick={scrollToWork}>
              WORK
            </li>
            <li className='css-link' onClick={scrollToAboutMe}>
              ABOUT
            </li>
            <a href='mailto:denittsaa@yahoo.com'>
              <li className='css-link'>CONTACT</li>
            </a>
          </ul>
        </nav>
      </div>
    </>
  )
}
export default MenuNavBar
