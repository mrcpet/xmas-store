import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import DetailsPage from "./Pages/DetailsPage";
import CartPage from "./Pages/CartPage";
import MainLayout from "./Components/Layout/MainLayout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/products/:id" element={<DetailsPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </MainLayout>
  );
}
export default App;
