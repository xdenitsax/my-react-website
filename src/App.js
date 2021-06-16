import './App.css'
import Skills from './components/Skills/Skills'
import MoreAboutMyself from './components/MoreAboutMyself/MoreAboutMyself'
import Projects from './components/Projects/Projects'
import Sentence from './components/Sentence/Sentence'
import MainPage from './components/MainPage/MainPage'

const App = () => {
  return (
    <>
      <MainPage />
      <MoreAboutMyself />
      <Skills />
      <Projects />
      <Sentence />
      <footer>
        <ul className='list-footer'>
          <li>
            <a href='https://github.com/xdenitsax'>
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
    </>
  )
}

export default App
