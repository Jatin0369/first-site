
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navabar from './Components/Navbar/Navabar'

import RouteName from './RouteName'

function App() {


  return (
    <BrowserRouter>
    <Navabar />
      <RouteName />
    <Footer />
    </BrowserRouter>
  )
}

export default App
