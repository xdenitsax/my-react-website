import React from 'react'
import './MainPage.css'

const MainPage = () => {
  return (
    <div className='landing-page-div'>
      <div className='text-begining-website'>
        <p className='introduction-1'>Hi, my name is</p>
        <h1 className='introduction-2'> Denitsa Georgieva.</h1>
        <h2 className='introduction-3'> I build things for the web.</h2>
        <p className='introduction-4'>
          I'm a front-end software engineer based in Boulder, CO with a passion
          for building captivating interfaces for mobile and desktop devices.
        </p>
      </div>{' '}
      <a href='mailto:xdenitsax@gmail.com'>
        {' '}
        <button className='button-main-page'>Get in Touch</button>
      </a>
    </div>
  )
}

export default MainPage
