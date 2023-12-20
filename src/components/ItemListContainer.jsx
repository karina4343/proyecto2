import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase/config";



const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [titulo] = useState("Productos");
  const categoria = useParams().categoria;
  console.log(categoria);


  useEffect(() => {
    const productosRef = collection (db, "productos");
    getDocs(productosRef)
    .then((resp) => {
      
      setProductos(
        resp.docs.map((doc)=> {
          return {...doc.data(),id: doc.id}
        })
      )
    })
      
  }, [categoria])

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />

    </div>
  )
}

export default ItemListContainer