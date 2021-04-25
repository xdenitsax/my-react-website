import './App.css'
import { createRef } from 'react'
import MoreAboutMyWork from './components/MoreAboutMyWork/MoreAboutMyWork'
import MoreAboutMyself from './components/MoreAboutMyself/MoreAboutMyself'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Sentance from './components/Sentance/Sentance'
const App = () => {
  const workRef = createRef()
  const aboutMeRef = createRef()
  const scrollToWork = () => workRef.current.scrollIntoView()
  const scrollToAboutMe = () => aboutMeRef.current.scrollIntoView()

  return (
    <div>
      <NavigationBar
        scrollToWork={scrollToWork}
        scrollToAboutMe={scrollToAboutMe}
      />
      <div className='text-begining-website'>
        <span className='name-first-part'>Hi, my name is</span>
        <span className='name-second-part-name'>Denitsa Georgieva.</span>
        <span className='text-introdiction'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum!
        </span>
      </div>
      <MoreAboutMyWork workRef={workRef} />
      <MoreAboutMyself aboutMeRef={aboutMeRef} />
      <Sentance />
      <footer>
        <p className='footer-text'>@Denitsa Georgieva MMXXI </p>
      </footer>
    </div>
  )
}

export default App
