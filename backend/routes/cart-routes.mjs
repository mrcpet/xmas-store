import express from "express";
import { addProduct, listCart, deleteProduct } from "../controllers/cart-controller.mjs";

const router = express.Router();

router.route("/").get(listCart);
router.route("/").post(addProduct);
router.route("/:id").delete(deleteProduct);

export default router;
