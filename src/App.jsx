import { useState } from "react";
import Contacto from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./main.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContext } from "./components/context/CartContext";



function App() {

  const [carrito, serCarrito] = useState([]);

  const user = "kari" ;
  const edad = "22";

  return (
    <div>
      <CartContext.Provider value={user}>
        <BrowserRouter>
        
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path='item/:itemId' element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />

            <Route path="/contacto" element={<Contacto />} />
          </Routes>


        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;