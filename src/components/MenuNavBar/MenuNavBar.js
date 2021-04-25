import React, { useState } from 'react'
import './MenuNavBar.css'

const MenuNavBar = ({
  scrollToWork,
  scrollToAboutMe,
  scrollToProjects,
  scrollToHome,
}) => {
  const [navBarScrolling, setNavBarScrolling] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBarScrolling(true)
    } else {
      setNavBarScrolling(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <div className={navBarScrolling ? 'navBarActive' : 'navBar'}>
        <nav>
          <ul>
            <li className='css-link' onClick={scrollToHome}>
              HOME{' '}
            </li>
            <li className='css-link' onClick={scrollToWork}>
              WORK
            </li>
            <li className='css-link' onClick={scrollToAboutMe}>
              ABOUT
            </li>
            <li className='css-link' onClick={scrollToProjects}>
              PROJECTS{' '}
            </li>

            <li className='css-link'>
              <a href='mailto:denittsaa@yahoo.com'>CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
export default MenuNavBar
