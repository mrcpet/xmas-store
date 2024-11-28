import express from "express";
import { addProduct, listCart } from "../controllers/cart-controller.mjs";

const router = express.Router();

router.route("/").get(listCart);
router.route("/").post(addProduct);

export default router;
