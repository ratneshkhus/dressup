import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/homepage/Home'
import Login from './pages/forms/Login'
import Register from './pages/forms/Register'
import Browse from './pages/allproducts/Browse.jsx'
import Cart from './pages/cart/Cartpage'
import Insertform from './dashboard/Insertform'
import Profile from './pages/profile/Profile'
import Details from './pages/Details/Details'
import AboutDev from './pages/AboutDev/AboutDev.jsx'
import Cashfree from './pages/Cashfree/Cashfree.jsx'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/browse' element={<Browse />}/>
          <Route path='/browse/:cat' element={<Browse />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/insertform' element={<Insertform />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/aboutdev" element={<AboutDev />} />
          <Route path="/payment" element={<Cashfree />} />
        </Routes>
    </>
  )
}

export default App
