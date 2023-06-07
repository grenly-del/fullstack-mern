import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './pages/homepage'
import RegisterPage from './pages/authpage/register'
import LoginPage from './pages/authpage/login'
import AestheticImage from './components/image/aesthetic'
import ProtectRoute from './config/protectRoute'
import MyPhotos from './components/image/myphotos'
import DesignImage from './components/image/design'
import RandomImage from './components/image/random/index.jsx'
import DeleteImage from './components/image/deleteImage.jsx'


function App() {

  return (
    <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/image" element={<ProtectRoute />} > 
              <Route path="myphoto" exact element={<MyPhotos />}>
                <Route path="remove/:id" element={<DeleteImage/> } />
              </Route>
              <Route path="aesthetic" element={<AestheticImage/>} />
              <Route path="design" element={<DesignImage/>} />
              <Route path="random" element={<RandomImage/>} />
              
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
