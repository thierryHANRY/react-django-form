
import './App.css'
import Navbar from './components/Navbar.jsx'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import About from './components/About.jsx'

function App() {

  const location = useLocation();
  const noNavbar = location.pathname === '/register' || location.pathname === '/'



  return (
    <>

      {
        noNavbar ? 
          <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
         </Routes>
        : 

        <Navbar
        content={
          <Routes>
            <Route>
              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
            </Route>
         </Routes>
        }
      />
      }
    </>
  )
}

export default App
