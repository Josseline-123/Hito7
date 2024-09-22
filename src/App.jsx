import { useContext } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Footer from './components/Footer'
import Carrito from './views/Carrito'
import Detalle from './views/Detalle'
import MiContextoProvider, { MiContexto } from './context/MiContexto'
import Login from './views/Login'
import Admin from './views/Admin'
import { Navigate } from 'react-router-dom'


function App() {
  const { user } = useContext(MiContexto)

  return (
    <>
   
     <BrowserRouter>
       <NavBar></NavBar>
       <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/carrito' element={<Carrito></Carrito>}></Route>
          <Route path='/detalle/:id' element={<Detalle></Detalle>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/admin' element={user ? <Admin></Admin> :<Login></Login>}></Route>

       </Routes>
     </BrowserRouter>
     <Footer />
     
    </>
  )
}

export default App