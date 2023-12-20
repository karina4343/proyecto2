import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useState } from 'react'
import { collection, addDoc, getFirestore } from "firebase/firestore"


const Checkout = () => {

    const { carrito } = useContext(CartContext);
    

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null)

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre === "" || email === "") {
            alert("No pueden existir campos vacios");
        } else {
            addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
        }
        setEmail(" ");
    }

    const ordersCollection = collection(db, "orden");

    const order = {

        buyer: {
            nombre,
            email
        },

        items: {
            items: carrito.map(({ id, titulo, precio }) => ({
                id, titulo, precio
            }))

        }
    };
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