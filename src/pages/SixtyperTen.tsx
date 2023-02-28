import Clock from "../components/Clock"

type Props = {}

const SixtyperTen = (props: Props) => {
  return (
    <Clock focusTime={60} restTime={10} numberOfCicles={4}/>
  )
}

export default SixtyperTen