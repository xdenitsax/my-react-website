import React, { useState } from 'react'
import './MenuNavBar.css'

const MenuNavBar = ({ scrollToWork, scrollToAboutMe, scrollToProjects }) => {
  const [navBarScrolling, setNavBarScrolling] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBarScrolling(true)
    } else {
      setNavBarScrolling(false)
    }
  }
  window.addEventListener('scroll', changeBackground)
  console.log(navBarScrolling)
  return (
    <>
      <div className={navBarScrolling ? 'navBarActive' : 'navBar'}>
        <nav>
          <ul>
            <li className='css-link'>HOME </li>
            <li className='css-link' onClick={scrollToWork}>
              WORK
            </li>
            <li className='css-link' onClick={scrollToAboutMe}>
              ABOUT
            </li>
            <li className='css-link' onClick={scrollToProjects}>
              PROJECTS{' '}
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
