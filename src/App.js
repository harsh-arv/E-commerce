import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/index.css"
import Navbar from "./component/Navbar";
import Home from "./component/Home"
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import SortCart from "./component/filteredCart/SortCart";
import SortHighestFirst from "./component/filteredCart/SortHighestFirst"
import About from "./component/About";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
  
      <BrowserRouter>
      <Navbar /> 
      <ToastContainer />
       <Routes>
        <Route path="/E-commerce" element={<Home />}></Route>
        <Route  path="/products" element={<Products />} />
        <Route  path="/product/:id" element={<Product/>} />
        <Route  path="/checkout" element={<Checkout/>} />
        <Route  path="/about" element={<About/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/sortedL" element={<SortCart/>} />
        <Route path="/sortedH" element={<SortHighestFirst/>} />
      </Routes> 
     </BrowserRouter>
    </div>
  );
}

export default App;
