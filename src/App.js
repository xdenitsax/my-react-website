import './App.css'
import { createRef } from 'react'
import Skills from './components/Skills/Skills'
import MoreAboutMyself from './components/MoreAboutMyself/MoreAboutMyself'
import MenuNavBar from './components/MenuNavBar/MenuNavBar'
import Projects from './components/Projects/Projects'
import Sentence from './components/Sentence/Sentence'

const App = () => {
  const skillsRef = createRef()
  const aboutMeRef = createRef()
  const projectsRef = createRef()
  // const homeRef = createRef()
  // const scrollToHome = () => homeRef.current.scrollIntoView()
  const scrollToProjects = () => projectsRef.current.scrollIntoView()
  const scrollToSkills = () => skillsRef.current.scrollIntoView()
  const scrollToAboutMe = () => aboutMeRef.current.scrollIntoView()

  return (
    <div>
      <MenuNavBar
        // homeRef={homeRef}
        // scrollToHome={scrollToHome}
        scrollToScills={scrollToSkills}
        scrollToAboutMe={scrollToAboutMe}
        scrollToProjects={scrollToProjects}
      />
      <div className='text-begining-website'>
        <span className='name-first-part'>Hi, my name is</span>
        <span className='name-second-part-name'>Denitsa Georgieva.</span>
        <span className='text-introdiction'>
          I`m a front-end software engineer based in Boulder, CO with a passion
          for building captivating interfaces for mobile and desktop devices.
        </span>
      </div>

      <MoreAboutMyself aboutMeRef={aboutMeRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Sentence />
      <footer>
        <ul className='list-footer'>
          <li>
            <a href='https://github.com/xdenitsax'>
              {' '}
              <img
                src='images/white-github.png'
                alt='github-image'
                className='github-footer'
              />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/denitsa-georgieva-a56716149/'>
              <img
                src='images/pngwing.com.png'
                alt='linkedin-image'
                className='in-footer'
              />
            </a>
          </li>
        </ul>
        <p className='footer-text'>@Denitsa Georgieva MMXXI </p>
      </footer>
    </div>
  )
}

export default App
