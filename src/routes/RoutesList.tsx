import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Personalized from '../pages/Personalized'
import SixtyperTen from '../pages/SixtyperTen'
import TwentyFiveperFive from '../pages/TwentyFiveperFive'

type Props = {}

const RoutesList = (props: Props) => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/25:5' element={<TwentyFiveperFive />}/>
        <Route path='/60:10' element={<SixtyperTen />}/>
        <Route path='/personalizado' element={<Personalized />}/>
    </Routes>
  )
}

export default RoutesList