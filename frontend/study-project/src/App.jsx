import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './pages/homepage'
import RegisterPage from './pages/authpage/register'
import LoginPage from './pages/authpage/login'


function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image" element={<h2>image</h2>} />
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
