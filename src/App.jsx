import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate      } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import About from './pages/about'
import Blog from './pages/blog'
import SingleBlog from './pages/singleBlog'
import ErrorPage from './pages/ErrorPage'
const App = () => {
  return (
    <>
     
      <Router>
          <Header />
          <Routes>
     
            <Route path="/"  element={<Home />}/>
            <Route path="/SingleProduct/:id"  element={<SingleProduct />}/>
            <Route path="/SingleProduct" element={<Navigate replace to="/" />} />
            <Route path="/about"  element={<About />}/>
            <Route path="/blog"  element={<Blog />}/>
            <Route path="/singleblog/:id"  element={<SingleBlog />}/>
            <Route path="/singleblog" element={<Navigate replace to="/" />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
      </Router>
    </>
  )
}

export default App