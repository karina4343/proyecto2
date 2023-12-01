import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Nosotros from "./components/Nosotros";
import "./main.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App (){
  return(
    <div>
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path ="/" element ={<ItemListContainer/>} />
          <Route path='item/:itemId' element={<ItemDetailContainer />} />
          <Route path="/productos" element={<ItemListContainer/>} />
          <Route path="/productos/:categoria" element={<ItemListContainer/>} />
          <Route path ="/nosotros" element = {<Nosotros/>} />
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;