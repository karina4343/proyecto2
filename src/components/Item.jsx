
import { Link } from 'react-router-dom'


const Item = ({producto}) => {
  return (
    <div className='producto'>
        <img src={producto.imagen} alt='prod' />
        <div>
            <h4>{producto.titulo}</h4>
            <p> precio: $ {producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <Link className="ver-mas" to={'/item/ ${id}'}>Ver mas</Link>
        </div>
    </div>
  )
}

export default Item
