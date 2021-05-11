import React from 'react'
// import img from '../../../../public/images/aws.png'
import './SkillsImages.css'
const SkillsImages = () => {
  return (
    <div className='AllRowsImages'>
      <div className='firstRowImages'>
        <img src='images/html.png' alt='HTML' className='img html' />
        <img src='images/css.png' alt='CSS' className='img css' />
        <img src='images/javascript.png' alt='JavaScript' className='img js' />
        <img src='images/nodejs.png' alt='NodeJS' className='img nodejs' />
        <img src='images/mongodb.png' alt='MongoDB' className='img' />
      </div>
      <div className='secondRowImages'>
        <img src='images/react.png' alt='React' className='img' />
        <img src='images/redux.png' alt='Redux' className='img redux' />
        <img
          src='images/gitkraken.png'
          alt='GitKraken'
          className='img gitKraken'
        />
        <img src='images/github.png' alt='GitHub' className='img' />
        <img src='images/git.png' alt='Git' className='img git' />
      </div>
      <div className='thirdRowImages'>
        <img src='images/sass.png' alt='Sass' className='img sass' />
        <img src='images/aws.png' alt='AWS' className='img aws' />
        <img src='images/npm.png' alt='NPM' className='img' />
        <img src='images/yarn.png' alt='Yarn' className='img' />
        <img src='images/postman.png' alt='Postman' className='img' />
      </div>
    </div>
  )
}

export default SkillsImages
