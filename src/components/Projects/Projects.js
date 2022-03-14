import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className='projects-body'>
      <h1 className='projects-header'>Experience</h1>
      <div className='project-post'>
        <div className='project-post-title-wraper'>
          <h1 className='project-post-title'>
            <a href='https://www.aura.com/' className='project-post-link'>
              Aura
            </a>
          </h1>

          <div className='project-post-image'>
            <a href='https://www.aura.com/'>
              <img src='images/aura.png' alt='aura' className='aura-img' />
            </a>
          </div>
        </div>

        <div className='project-post-title-wraper-2'>
          <h1 className='project-post-title'>
            <a href='https://www.bluedgeusa.com/' className='project-post-link'>
              Bluedge USA
            </a>
          </h1>

          <div className='project-post-image'>
            <a href='https://www.bluedgeusa.com/'>
              <img
                src='images/bluedge.png'
                alt='bluedge'
                className='bluedge-img'
              />
            </a>
          </div>
        </div>
        <div className='project-post-title-wraper-3'>
          <h1 className='project-post-title'>
            <a
              href='https://century22.denitsa.co/'
              className='project-post-link'
            >
              Real Estate
            </a>
          </h1>

          <div className='project-post-image'>
            <a href='https://century22.denitsa.co/'>
              <img
                src='images/real-estate.png'
                alt='real-estate'
                className='real-estate-img'
              />
            </a>
          </div>

          {/* <div className='project-post-info'>
          <p className='project-post-text'>
            Aura’s digital threat platform enables customers to manage disparate
            cybersecurity needs with ease and maximum effectiveness..
          </p>
        </div>  */}
        </div>
      </div>
      {/* <div className='project-post-2'>
        <div className='project-post-image-2'>
          <a href='https://century22.denitsa.co/'>
            <img
              src='images/real-estate.png'
              alt='real-estate'
              className='real-estate-img'
            />
          </a>
        </div> */}
      {/* <div className='project-post-info-2'>
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
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Projects;
