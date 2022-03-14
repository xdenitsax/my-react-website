/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className='projects-body'>
      <h1 className='projects-header'>Experience</h1>
      <div className='project-post'>
        <a
          href='https://www.aura.com/'
          target='_blank'
          className='project-post-link'
        >
          <div className='project-post-title-wraper'>
            <h1 className='project-post-title'>Aura</h1>

            <div className='project-post-image'>
              <a href='https://www.aura.com/'>
                <img src='images/aura.png' alt='aura' className='aura-img' />
              </a>
            </div>
          </div>
        </a>
        <a
          href='https://www.bluedgeusa.com/'
          target='_blank'
          className='project-post-link'
        >
          <div className='project-post-title-wraper-2'>
            <h1 className='project-post-title'>Bluedge USA</h1>

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
        </a>
        <a
          href='https://century22.denitsa.co/'
          className='project-post-link'
          target='_blank'
        >
          <div className='project-post-title-wraper-3'>
            <h1 className='project-post-title'>Real Estate</h1>

            <div className='project-post-image'>
              <img
                src='images/real-estate.png'
                alt='real-estate'
                className='real-estate-img'
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
