import React from 'react'
import Clock from '../components/Clock'

type Props = {}

const TwentyFiveperFive = (props: Props) => {
  return (
    <Clock focusTime={0.1} restTime={0.1} numberOfCicles={2}/>
  )
}

export default TwentyFiveperFive