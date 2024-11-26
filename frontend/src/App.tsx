import "./App.css";
import { useState, useEffect } from "react";

function App() {
  interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    balance: number;
    in_stock: boolean;
    description: string;
  }

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async (endpoint: string) => {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      try {
        const response = await fetch(`${baseUrl}${endpoint}`);
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData("/products");
  }, []);

  return (
    <>
      <div>
        <h1>Christmas Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <img
                style={{ width: "400px" }}
                src={product.image}
                alt={product.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default App;
