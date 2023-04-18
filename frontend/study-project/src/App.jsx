import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './pages/homepage'


function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image" element={<h2>image</h2>} />
          <Route path="/todo" element={<h2>todo</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
