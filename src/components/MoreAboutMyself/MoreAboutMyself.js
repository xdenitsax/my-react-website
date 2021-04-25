import React from 'react'
import './MoreAboutMyself.css'
const MoreAboutMyself = ({ aboutMeRef }) => {
  return (
    <div ref={aboutMeRef}>
      <h1 className='about-myself-header'>About me.</h1>
      <div className='whole-div-about-myself'>
        <p className='about-myself-content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
          aliquam vestibulum morbi blandit cursus risus at ultrices. Facilisis
          sed odio morbi quis commodo odio aenean. Quam quisque id diam vel quam
          elementum pulvinar etiam. Ac ut consequat semper viverra nam libero
          justo laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Neque aliquam vestibulum morbi blandit cursus risus at
          ultrices. Facilisis sed odio morbi quis commodo odio aenean. Quam
          quisque id diam vel quam elementum pulvinar etiam. Ac ut consequat
          semper viverra nam libero justo laoreet.
        </p>
      </div>
    </div>
  )
}

export default MoreAboutMyself
