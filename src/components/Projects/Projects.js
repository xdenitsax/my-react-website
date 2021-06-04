import React from 'react'
import './Projects.css'

const Projects = ({ projectsRef }) => {
  return (
    <div ref={projectsRef}>
      <h1 className='projects-header'>Projects</h1>
      <div className='whole-div-projects'>
        <div className='maincontainer '>
          <div className='card'>
            <div className='front-of-the-card imgBx'>FRONT OF THE CARD</div>
            <div className='back-of-the-card'>BACK OF THE CARD</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
