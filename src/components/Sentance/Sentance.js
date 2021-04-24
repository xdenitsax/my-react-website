import React, { useState } from 'react'
import './Sentance.css'

const Sentance = () => {
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

  return (
    <div>
      <p className='sentance-bottom'>Have an amazing {dayOfTheWeek()}!</p>
    </div>
  )
}

export default Sentance
