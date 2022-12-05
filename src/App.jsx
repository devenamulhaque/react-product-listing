import React from 'react'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import Home from './components/Home'
import SingleProduct from './components/SingleProduct'
const App = () => {

  
  return (
    <Router>
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/singleproduct/:id"  element={<SingleProduct />}/>
        </Routes>
    </Router>
  )
}

export default App