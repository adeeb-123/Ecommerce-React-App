import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

const App = () => {
  const [productQuantity, setProductQuantity] = useState(1);

  return <div className="w-[100vw] h-[100vh]">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:productId" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </div>;
};

export default App;
