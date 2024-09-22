import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar =  () => {
    const setActiveClass = ({isActive}) => isActive ? `active` : 'notActive';

    return(
        <div className="navbar">

        <div>            
            <NavLink to="/" className={setActiveClass}>Home</NavLink>
            <NavLink to="/carrito" className={setActiveClass}>Carrito</NavLink>
        </div>
        <div>   
            <NavLink to="/login" className={setActiveClass}>Login</NavLink>
            <NavLink to="/admin" className={setActiveClass}>Admin</NavLink>
         </div>
         </div>

    )
}

export default NavBar