import React from 'react'

const Projects = ({ projectsRef }) => {
  return (
    <div ref={projectsRef}>
      <h1 className='about-me-header'>Projects</h1>
      <div className='whole-div-about-me'>
        <p className='about-me-content'></p>
      </div>
    </div>
  )
}

export default Projects
