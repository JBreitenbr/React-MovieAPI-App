
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import {Navbar} from './components/navbar'
import {Auth} from './pages/auth/index'
import {Home} from './pages/home/index'
import {Movie} from './pages/movie/index'
import {TvShow} from './pages/tvshow/index'
import {Rated} from './pages/rated/index'
function App(){
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/React-MovieAPI-App" element={<Home/>}/>
          <Route path="/React-MovieAPI-App/auth" element={<Auth/>}/><Route path="/React-MovieAPI-App/rated" element={<Rated/>}/>
          <Route path="/React-MovieAPI-App/movies/:id" element={<Movie/>}/>
          <Route path="/React-MovieAPI-App/tvshows/:id" element={<TvShow/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App