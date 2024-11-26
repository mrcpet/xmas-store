import express from "express";
import {
  listProducts,
  findProduct,
} from "../controllers/products-controller.mjs";

const router = express.Router();

router.route("/").get(listProducts);
router.route("/:id").get(findProduct);

export default router;
