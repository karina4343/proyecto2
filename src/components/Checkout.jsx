import React from 'react'
import { CartContext } from '../context/CartContext'
import { useState } from 'react'
import { collection, addDoc, getFirestore } from "firebase/firestore"
//IMPORTAR EL CONTEXT
//CART
const Checkout = () => {

    const carrito = [
        { id: 1, titulo: "Producto A", precio: 1000 },
        { id: 2, titulo: "Producto B", precio: 2000 }
    ]

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null)

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === "" ? alert(`campo nombre vacío`) : alert(`Bienvenido, ${nombre}`)
        email === "" ? alert(`campo email vacío`) : alert(`Registrado con el email, ${email}`)

        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
    }
    const order = {
        buyer: {

            nombre, email
        },
        items: carrito.map(({ id, nombre, precio }) => ({
            id, nombre, precio
        }))
    }
    const ordersCollection = collection(db, "orden")
    return (
        <>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

                <button type='submit'>Enviar</button>
            </form>

            <h3>Id de tu compra:{orderId}</h3>
        </>
    )
}
export default Checkout