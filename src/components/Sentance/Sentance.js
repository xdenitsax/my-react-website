import React, { useState } from 'react'
import './Sentance.css'

const Sentance = () => {
  const [randomWord, setRandomWord] = useState('crazy')
  const getCurentDate = new Date()
  const getCurentDay = getCurentDate.getDay()

  const dayOfTheWeek = () => {
    if (getCurentDay === 1) {
      return 'Monday'
    } else if (getCurentDay === 2) {
      return 'Tuesday'
    } else if (getCurentDay === 3) {
      return 'Wednesday'
    } else if (getCurentDay === 4) {
      return 'Thursday'
    } else if (getCurentDay === 5) {
      return 'Friday'
    } else if (getCurentDay === 6) {
      return 'Saturday'
    } else if (getCurentDay === 7) {
      return 'Sunday'
    }
  }
  const words = [
    'a nice',
    'a good',
    'an amazing',
    'a chill',
    'a boss',
    'a tip-top',
  ]
  const timeOutWord = setTimeout(() => {
    const word = words[Math.floor(Math.random() * words.length)]
    setRandomWord(word)
  }, 2000)
  console.log(timeOutWord)
  return (
    <div>
      <p className='sentance-bottom'>
        Have {randomWord} {dayOfTheWeek()}!
      </p>
    </div>
  )
}

export default Sentance
