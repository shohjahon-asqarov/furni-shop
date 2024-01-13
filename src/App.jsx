import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NewProducts from './components/NewProducts'
import Catalog from './components/Catalog'
import Footer from './components/Footer'
import Detail from './components/Detail'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route, useLocation } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import Cart from './pages/Cart'
import LogIn from './auth/LogIn'
import Auth from './auth/Auth'
import Blog from './pages/Blog'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Favourite from './pages/Favourite'

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location]);

  const isAuthPage = location.pathname.includes('/auth') || location.pathname.includes('/login');

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Navbar />

      <Routes>
        <Route index path='/' element={<><Hero /> <NewProducts /> <Catalog /> </>} />
        <Route path='/products/:id' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/favourite' element={<Favourite />} />
      </Routes>

      {!isAuthPage && <Footer />}

      <ToastContainer />
    </div>
  )
}

export default App