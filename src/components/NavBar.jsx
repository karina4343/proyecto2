import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'> <h1>Libreria Nico</h1></Link>
        <ul className='menu'>
            <li><Link className='menu-link' to="/">Inicio</Link></li>
            <li><Link className='menu-link' to="/productos">Productos</Link></li>
            <li><Link className='menu-link' to="/productos/Cuadernos">Cuadernos</Link></li>
            <li><Link className='menu-link' to="/productos/Adhesivos">Adhesivos</Link></li>
            <li><Link className='menu-link' to="/productos/Cintas">Cintas</Link></li>
            <li><Link className='menu-link' to="/productos/Escritura">Escritura</Link></li>
            <li><Link className='menu-link' to="/productos/Geometria">Geometria</Link></li>
            <li><Link className='menu-link' to="/productos/Marcadores y Resaltadores">Marcadores y resaltadores</Link></li>
            <li><Link className='menu-link' to="/productos/Accesorio">Accesorio</Link></li>
            
        </ul>
    </nav>
  )
}

export default NavBar

