import React from 'react'
import './MoreAboutMyWork.css'

const MoreAboutMyWork = ({ workRef }) => {
  return (
    <div ref={workRef}>
      <h1 className='about-me-header'>
        A little more information about my work expirience.
      </h1>
      <p className='about-me-content'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor
        posuere ac ut consequat semper viverra nam libero. Aliquam etiam erat
        velit scelerisque. Lorem ipsum dolor sit amet consectetur adipiscing
        elit ut aliquam. Nisi scelerisque eu ultrices vitae auctor eu.
      </p>
      <button className='btn-about-me'>More</button>
    </div>
  )
}
export default MoreAboutMyWork
