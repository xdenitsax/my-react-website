import React from 'react'
import MenuNavBar from './MenuNavBar'

const NavigationBar = ({ scrollToWork, scrollToAboutMe }) => {
  return (
    <div>
      <div className='navigation-bar-top'>
        <MenuNavBar
          scrollToWork={scrollToWork}
          scrollToAboutMe={scrollToAboutMe}
        />
      </div>
    </div>
  )
}

export default NavigationBar

//
