import React from 'react'
import './Skills.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import {
  SiJavascript,
  SiNodeDotJs,
  SiMongodb,
  SiReact,
  SiRedux,
  SiStyledComponents,
} from 'react-icons/si'
import { FaGithub, FaGitkraken, FaSass, FaAws } from 'react-icons/fa'

const Skills = () => {
  return (
    <>
      <div className='skills-div'>
        <div className='skills-text-content'>
          <h1 className='skills-header'>Skills and Tools</h1> Languages and
          Technologies that I have learned and applied to my projects
          <div className='icons-div'>
            <ul>
              <li className='skills'>
                <AiFillHtml5 className='one-skill' />
                <DiCss3 className='one-skill' />
                <FaSass className='one-skill' />
                <SiStyledComponents className='one-skill' />
              </li>
              <li className='skills'>
                <SiJavascript className='one-skill' />
                <SiNodeDotJs className='one-skill' />
                <SiReact className='one-skill' />
                <SiRedux className='one-skill' />
              </li>
              <li className='skills'>
                <SiMongodb className='one-skill' />
                <FaAws className='one-skill' />
                <FaGithub className='one-skill' />
                <FaGitkraken className='one-skill' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Skills
