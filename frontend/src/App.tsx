import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import DetailsPage from "./Pages/DetailsPage";
import Navigation from "./Components/UI/Navigation/Navigation";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <>
      <h1>Christmas Products</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/products/:id" element={<DetailsPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </>
  );
}
export default App;
