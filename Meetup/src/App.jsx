import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Website/Comman/Header'
import Footer from './Website/Comman/Footer'
import Home from './Website/Pages/Home'
import About from './Website/Pages/About'
import Speaker from './Website/Pages/Speaker'
import Schedule from './Website/Pages/Schedule'
import Blog from './Website/Pages/Blog'
import Blogdetails from './Website/Pages/Blogdetails'
import Contact from './Website/Pages/Contact'
import AdminDashBord from './Admin/AdminPages/AdminDashBord'
import ServiceAdd from './Admin/AdminPages/ServiceAdd'
import ServiceManage from './Admin/AdminPages/ServiceManage'


function App() {
  return (
    <BrowserRouter>
    <div>
      
      {/* <Header /> */}
      <Routes>
        
       <Route  path='/header' element ={< Header />} />
       <Route  path='/footer' element ={< Footer />} />
       <Route  path='/' element ={< Home />} />
       <Route  path='/about' element ={< About />} />
       <Route  path='/speaker' element ={< Speaker />} />
       <Route  path='/schedule' element ={< Schedule />} />
       <Route  path='/blog' element ={< Blog />} />
       <Route  path='/blogdetails' element ={< Blogdetails />} />
       <Route  path='/contact' element ={< Contact />} />


       <Route path='/admindashbord' element={<AdminDashBord />} />
       <Route path='/sadd' element={<ServiceAdd />} />
       <Route path='/smanage' element={<ServiceManage />} />



      </Routes>
      {/* <Footer /> */}
    </div>
      </BrowserRouter>
  )
}

export default App
