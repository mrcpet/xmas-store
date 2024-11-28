import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import products from "./routes/products-routes.mjs";
import cart from "./routes/cart-routes.mjs";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
app.use("/api/products", products);
app.use("/api/cart", cart);

app.listen(PORT, () => {
  console.log(`Server is running and listening to port ${PORT}`);
});
