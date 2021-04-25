import React, { useState } from 'react'
import './Sentence.css'

const Sentence = () => {
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
    } else {
      return ' Sunday'
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

  return (
    <div>
      <p className='sentance-bottom'>
        Have {randomWord}
        {''}
        {dayOfTheWeek()}!
      </p>
    </div>
  )
}

export default Sentence
