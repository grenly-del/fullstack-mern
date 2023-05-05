import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './pages/homepage'
import RegisterPage from './pages/authpage/register'
import LoginPage from './pages/authpage/login'
import AestheticImage from './components/image/aesthetic'
import ProtectRoute from './config/protectRoute'


function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/image" element={<ProtectRoute />} > 
            <Route path="aesthetic" element={<AestheticImage/>} />
          </Route>
          <Route path="/todo" element={<h2>todo</h2>} />
          <Route path="/auth">
            <Route path="register" element={<RegisterPage />}/>
            <Route path="login" element={<LoginPage />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
