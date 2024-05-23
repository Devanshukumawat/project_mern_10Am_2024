import Admin from "./comp/admin/Admin";
import Delete from "./comp/admin/Delete";
import ProductAdd from "./comp/admin/ProductAdd";
import ProductForm from "./comp/admin/ProductForm";
import UpdateForm from "./comp/admin/UpdateForm";
import Footer from "./comp/Footer";
import Login from "./comp/Login";
import Navbar from "./comp/Navbar";
import Product from "./comp/Product";
import Reg from "./comp/Reg";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return ( 
    <>

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/reg" element={<Reg/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/productadd" element={<ProductAdd/>}/>
        <Route path="/productform" element={<ProductForm/>}/>
        <Route path="/updateproduct/:id" element={<UpdateForm/>}/>
        <Route path="/deleteproduct/:id" element={<Delete/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

      
    </>
   );
}

export default App;