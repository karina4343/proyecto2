import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/PedirDatos";
import ItemList from "./ItemList";


const ItemListContainer = () => {

    const [productos, setProductos] = useState ([]);
    console.log(productos);

    useEffect(() => {
     pedirDatos()
     .then((res) => {
        setProductos(res);

     })
    .catch (error => {
      console.error("Error:", error);
    });
    }, [])
    
  return (
    <div>
        <ItemList productos = {productos}/>

    </div>
  )
}

export default ItemListContainer