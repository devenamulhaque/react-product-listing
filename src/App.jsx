import React from 'react'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import Home from './components/Home'
import SingleProduct from './components/SingleProduct'
import ErrorPage from './components/ErrorPage'
const App = () => {

  
  return (
    <Router>
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/SingleProduct/:id"  element={<SingleProduct />}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </Router>
  )
}

export default App