import React from 'react'
import './MoreAboutMyWork.css'

const MoreAboutMyWork = ({ workRef }) => {
  return (
    <div>
      <div ref={workRef}>
        <h1 className='about-me-header'>
          A little more information about my work expirience.
        </h1>
        <div className='whole-div-about-me'>
          <p className='about-me-content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere
            sollicitudin aliquam ultrices sagittis orci a scelerisque purus
            semper. Augue mauris augue neque gravida in fermentum et
            sollicitudin ac. Blandit massa enim nec dui nunc mattis enim ut
            tellus. Ullamcorper malesuada proin libero nunc consequat interdum
            varius sit. Aliquam ultrices sagittis orci a scelerisque. Quam
            elementum pulvinar etiam non quam lacus suspendisse faucibus. Duis
            convallis convallis tellus id interdum velit. Donec ac odio tempor
            orci. Non arcu risus quis varius quam quisque id diam. Nisl
            condimentum id venenatis a condimentum vitae sapien pellentesque.
            Tristique magna sit amet purus gravida. Scelerisque purus semper
            eget duis. Cursus turpis massa tincidunt dui ut ornare. Cursus eget
            nunc scelerisque viverra mauris in aliquam sem fringilla. Vitae et
            leo duis ut. Egestas dui id ornare arcu odio. Morbi non arcu risus
            quis varius quam quisque. Vel turpis nunc eget lorem dolor sed
            viverra ipsum nunc. Mus mauris vitae ultricies leo.
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoreAboutMyWork
