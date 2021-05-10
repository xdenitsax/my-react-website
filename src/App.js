import './App.css'
import { createRef } from 'react'
import MoreAboutMyWork from './components/MoreAboutMyWork/MoreAboutMyWork'
import MoreAboutMyself from './components/MoreAboutMyself/MoreAboutMyself'
import MenuNavBar from './components/MenuNavBar/MenuNavBar'
import Projects from './components/Projects/Projects'
import Sentence from './components/Sentence/Sentence'

const App = () => {
  const workRef = createRef()
  const aboutMeRef = createRef()
  const projectsRef = createRef()
  const homeRef = createRef()
  const scrollToHome = () => homeRef.current.scrollIntoView()
  const scrollToProjects = () => projectsRef.current.scrollIntoView()
  const scrollToWork = () => workRef.current.scrollIntoView()
  const scrollToAboutMe = () => aboutMeRef.current.scrollIntoView()

  return (
    <div>
      <MenuNavBar
        homeRef={homeRef}
        scrollToHome={scrollToHome}
        scrollToWork={scrollToWork}
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
      <MoreAboutMyWork workRef={workRef} />
      <MoreAboutMyself aboutMeRef={aboutMeRef} />
      <Projects projectsRef={projectsRef} />
      <Sentence />
      <footer>
        <p className='footer-text'>@Denitsa Georgieva MMXXI </p>
      </footer>
    </div>
  )
}

export default App
