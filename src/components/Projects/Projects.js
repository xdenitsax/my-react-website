import React from 'react'
import './Projects.css'
import { DiReact, DiCss3, DiJavascript1 } from 'react-icons/di'
import {
  SiRedux,
  SiMongodb,
  SiStyledComponents,
  SiGitkraken,
} from 'react-icons/si'
import { GrNode } from 'react-icons/gr'
import { FiGithub } from 'react-icons/fi'
import { FaAws } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className='projects-body'>
      <h1 className='projects-header'>Some Things I’ve Built</h1>
      <div className='project-post'>
        <div className='project-post-image'>
          <a href='https://expense-tracker.denitsa.co/welcome'>
            <img
              src='images/expense-tracker.png'
              alt='expense-tracker'
              className='expense-tracker-img'
            />
          </a>
        </div>
        <div className='project-post-info'>
          <h1 className='project-post-title'>Expense Tracker </h1>
          <p className='project-post-text'>
            Built with React, Redux and NodeJS. The app uses its own back end
            with RESTful API and has authentication and authorization
            functionality. The front end uses redux-thunks for asynchronous CRUD
            operations and react-router-dom for navigation. I created UI/UX
            design and used CSS flexbox to create responsive layout for
            different sized screens.
          </p>
          <div className='usedTehnologies-div'>
            <p className='tehnologies-text'>Used tehnologies:</p>
            <span className='tehnologies-icons'>
              <DiCss3 className='tehn-icon' />
              <DiJavascript1 className='tehn-icon' />
              <DiReact className='tehn-icon' />
              <SiRedux className='tehn-icon' /> <GrNode className='tehn-icon' />
              <SiMongodb className='tehn-icon' />
              <FaAws className='tehn-icon' />
              <FiGithub className='tehn-icon' />
              <SiGitkraken className='tehn-icon' />
            </span>
          </div>
          <a
            href='https://expense-tracker.denitsa.co/welcome'
            className='project-post-link'
          >
            Visit the Project
          </a>
        </div>
      </div>
      <div className='project-post-2'>
        <div className='project-post-image-2'>
          <a href='https://century22.denitsa.co/'>
            <img
              src='images/real-estate.png'
              alt='real-estate'
              className='real-estate-img'
            />
          </a>
        </div>
        <div className='project-post-info-2'>
          <h1 className='project-post-title-2'>Real Estate Website </h1>
          <p className='project-post-text-2'>
            Real-estate website built with React. Used Framer Motion for
            animations and styled-components to style the UI. For the project I
            followed responsive design principles – “mobile first”.
          </p>
          <div className='usedTehnologies-div'>
            <p className='tehnologies-text'>Used tehnologies:</p>
            <span className='tehnologies-icons'>
              <DiCss3 className='tehn-icon' />
              <DiJavascript1 className='tehn-icon' />
              <DiReact className='tehn-icon' />
              <SiStyledComponents className='tehn-icon' />
              <FiGithub className='tehn-icon' />
            </span>
          </div>
          <a
            href='https://century22.denitsa.co/'
            className='project-post-link-2'
          >
            Visit the Project
          </a>
        </div>
      </div>
      <div className='project-post-3'>
        <div className='project-post-image-3'>
          <a href='https://github.com/xdenitsax'>
            <img
              src='images/video-tube.png'
              alt='video-tube'
              className='video-tube-img'
            />
          </a>
        </div>
        <div className='project-post-info-3'>
          <h1 className='project-post-title-3'>Video Tube</h1>
          <p className='project-post-text-3'>
            A YouTube clone built with React. It uses YouTube’s public RESTful
            API endpoints to search and show the search results from the API
            response. Uses Semantic UI for styling the app’s interface.
          </p>
          <div className='usedTehnologies-div'>
            <p className='tehnologies-text'>Used tehnologies:</p>
            <span className='tehnologies-icons'>
              <DiCss3 className='tehn-icon' />
              <DiJavascript1 className='tehn-icon' />
              <DiReact className='tehn-icon' />
              <FiGithub className='tehn-icon' />
            </span>
          </div>
          <a
            href='https://github.com/xdenitsax'
            className='project-post-link-3'
          >
            Visit the Project
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
