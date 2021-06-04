import React from 'react'
import './Projects.css'

const Projects = ({ projectsRef }) => {
  return (
    <div ref={projectsRef}>
      <h1 className='projects-header'>Projects</h1>
      <div className='whole-div-projects'>
        <img
          src='images/Projects.png'
          alt='expense-mac-picture'
          className='expense-mac'
        />
      </div>
    </div>
  )
}

export default Projects
