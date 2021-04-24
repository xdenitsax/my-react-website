import './App.css'
import MoreAboutMe from './components/MoreAboutMe/MoreAboutMe'
import MoreAboutMyself from './components/MoreAboutMyself/MoreAboutMyself'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Sentance from './components/Sentance/Sentance'
const App = () => {
  return (
    <div>
      <NavigationBar />

      <p className='name-first-part'>Hi, my name is Denitsa. </p>
      <div>
        {' '}
        <img
          className='image-beginning'
          href='image'
          src='https://cdn.dribbble.com/users/2646423/screenshots/5507196/computer.gif'
        ></img>
      </div>

      <MoreAboutMe />
      <MoreAboutMyself />
      <Sentance />
      <footer>
        <p className='footer-text'>@Denitsa Georgieva MMXXI </p>
      </footer>
    </div>
  )
}

export default App
