import React from 'react'
import Clock from '../components/Clock'

type Props = {}

const TwentyFiveperFive = (props: Props) => {
  return (
    <Clock focusTime={25} restTime={5} numberOfCicles={4}/>
  )
}

export default TwentyFiveperFive