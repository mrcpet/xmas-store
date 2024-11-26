import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import products from "./routes/products-routes.mjs";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
app.use("/api/products", products);

//TODO refactor into controllers and fetch utility

// app.get("/api", async (req, res) => {
//   const response = await fetch("http://localhost:5020/products");

//   if (response.ok) {
//     const result = await response.json();
//     res.status(200).json({ success: true, data: result });
//   }
// });

// app.get("/api/:id", async (req, res) => {
//   const id = req.params.id;
//   const response = await fetch(`http://localhost:5020/products/${id}`);

//   if (response.ok) {
//     const result = await response.json();
//     res.status(200).json({ success: true, data: result });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running and listening to port ${PORT}`);
});
