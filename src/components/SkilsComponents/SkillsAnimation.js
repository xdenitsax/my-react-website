import React from 'react'
import './SkillsAnimation.css'

const SkillsAnimation = () => {
  return (
    <div className='whole-skills-div'>
      {/* <div className='bubbling-icons tools'></div>
      <ul className='skills-ul'>
        <li className='skills-li'>React/Redux</li>
        <li className='skills-li'>AWS</li>
        <li className='skills-li'>Git & Github</li>
      </ul> */}
      <section className='container section flex '>
        <h2 className='section-title'>Skills</h2>
        <div className='section-content flex-wide'>
          <div className='sub-section skills-section space-around'>
            <h3 className='language-text'>Languages</h3>
            <div className='bubbling-container column'>
              <div className='bubbling-icons languages'></div>
            </div>
            <ul className='skills-ul'>
              <li className='skills-li'>Javascript(ES6)</li>
              <li className='skills-li'>HTML5</li>
              <li className='skills-li'>CSS3</li>
            </ul>
          </div>
          <div className='sub-section skills-section space-around'>
            <h3 className='tools-text'>Tools and Resources</h3>
            <div className='bubbling-container column'>
              <div className='bubbling-icons tools'></div>
            </div>
            <ul className='skills-ul'>
              <li className='skills-li'>React/Redux</li>
              <li className='skills-li'>AWS</li>
              <li className='skills-li'>Git & Github</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkillsAnimation
