import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'> <h1>Libreria Nico</h1></Link>
        <ul className='menu'>
            
            <li><Link className='menu-link' to="/productos">Productos</Link></li>
            <li><Link className='menu-link' to="/productos/Cuadernos">Cuadernos</Link></li>
            <li><Link className='menu-link' to="/productos/Adhesivos y Cintas">Adhesivos y Cintas</Link></li>
            <li><Link className='menu-link' to="/productos/Escritura y Geometria">Escritura y Geometria</Link></li>
            <li><Link className='menu-link' to="/productos/Marcadores y Resaltadores">Marcadores y resaltadores</Link></li>
            <li><Link className='menu-link' to="/contacto">Contacto</Link></li>
            
            
        </ul>
    </nav>
  )
}

export default NavBar

