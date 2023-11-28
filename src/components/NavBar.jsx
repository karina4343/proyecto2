import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'> <h1>Libreria Nico</h1></Link>
        <ul className='menu'>
            <li><Link className='menu-link' to="/">inicio</Link></li>
            <li><Link className='menu-link' to="/nosotros">nosotros</Link></li>
            <li><Link className='menu-link' to="#">productos</Link></li>
            <li><Link className='menu-link' to="#">contacto</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar