import './App.css'
import Skills from './components/Skills/Skills'
import MoreAboutMyself from './components/MoreAboutMyself/MoreAboutMyself'
import Projects from './components/Projects/Projects'
import Sentence from './components/Sentence/Sentence'
import MainPage from './components/MainPage/MainPage'
import Lines from './components/Lines/Lines'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <Lines />
      <MainPage />
      <MoreAboutMyself />
      <Skills />
      <Projects />
      <Sentence />
      <footer>
        <div>
          <p className='footer-text'>Designed & Built by Denitsa Georgieva</p>
        </div>
      </footer>
    </>
  )
}

export default App
