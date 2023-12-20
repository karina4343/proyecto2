import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";



const ItemListContainer = () => {

  const [titulo, setTitulo] = useState("Productos");
  const { categoria } = useParams()


  const [productos, setProductos] = useState([])


  useEffect(() => {

    const db = getFirestore()

    const itemsCollection = collection(db, productos)
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) =>
      ({
        ...doc.data(), id: doc.id
      }))
      setProductos(docs)

    })
  }, [])


  const filteredProducts = productos.filter((producto) => producto.categoria === categoria)
  console.log(filteredProducts)


  return (
    <div>
      {
        categoria ? <ItemList productos={filteredProducts} /> : <ItemList productos={productos} />
      }

    </div>
  )
}

export default ItemListContainer