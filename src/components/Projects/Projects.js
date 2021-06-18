import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects-div'>
      <h1 className='projects-header'>Some Things I’ve Built</h1>
      <ul>
        <li className='li-expense-tracker'>
          <img src='images/expense-tracker.png' className='expense-tracker' />
          <h1 className='project-name'>Expense Tracker</h1>
        </li>
      </ul>
    </div>
  )
}

export default Projects
