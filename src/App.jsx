import React from 'react'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import Query from './components/query'
import SingleProduct from './components/SingleProduct'
const App = () => {

  
  return (
    <Router>
        <Routes>
          <Route path="/"  element={<Query />}/>
          <Route path="/singleproduct/:id"  element={<SingleProduct />}/>
        </Routes>
    </Router>
  )
}

export default App