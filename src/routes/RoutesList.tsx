import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'

type Props = {}

const RoutesList = (props: Props) => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
    </Routes>
  )
}

export default RoutesList