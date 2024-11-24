import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import {Navbar} from './components/navbar'
import {Auth} from './pages/auth/index'
import {Home} from './pages/home/index'
function App(){
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/React-MovieAPI-App" element={<Home/>}/>
          <Route path="/React-MovieAPI-App/auth" element={<Auth/>}/><Route path="/React-MovieAPI-App/rated" element={<h1>Rated</h1>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App