import React from 'react'
import SkillsImages from './SkillsImages/SkillsImages'
import './Skills.css'

const Skills = ({ skillsRef }) => {
  return (
    <div>
      <div>
        <h1 className='skills-header'>Skills and Tools.</h1>
        <div ref={skillsRef} className='whole-div-skills'>
          <p className='languages-content'>
            Languages and Technologies that I have learned and applied to my
            projects
          </p>
          <div>
            <SkillsImages />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills
