import React from 'react'
import './MainPage.css'

const MainPage = () => {
  return (
    <div>
      <div className='landing-page-div'>
        <div className='container-image'>
          <img
            src='images/Denitsa.png'
            alt='Denitsa'
            className='Denitsa-photo'
          />
        </div>
        <div className='text-begining-website'>
          <span className='name-first-part'>Hi, my name is</span>
          <span className='name-second-part-name'>Denitsa Georgieva.</span>
          <span className='text-introdiction'>
            I`m a front-end software engineer based in Boulder, CO with a
            passion for building captivating interfaces for mobile and desktop
            devices.
          </span>
        </div>
      </div>
    </div>
  )
}

export default MainPage
