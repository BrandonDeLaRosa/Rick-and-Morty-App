import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Locations from './Pages/Locations'
import Home from './Pages/Home'
import LocationInfo from './Pages/LocationInfo'
import Residents from './Pages/Residents'
import CharacterInfo from './Pages/CharacterInfo'
import Characters from './Pages/Characters'

function App() {

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/locations" element={<Locations />} />
          <Route path="/location/:id" element={<LocationInfo />} />
          <Route path="/residents" element={<Residents />} />

          <Route path="/resident/:id" element={<CharacterInfo />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
