import React from 'react'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'
import './Lines.css'
const Lines = () => {
  return (
    <div className='lines'>
      <div className='line-left'>
        <ul>
          <li className='list-icons'>
            <a href='https://github.com/xdenitsax'>
              <AiOutlineGithub className='icons' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/denitsa-georgieva-a56716149/'>
              <AiFillLinkedin className='icons second-icon' />
            </a>
          </li>
          <li className='email'>xdenitsax@gmail.com</li>
        </ul>
      </div>
    </div>
  )
}

export default Lines
