import axios from "axios";
import { IProductDetails } from "../Models/IProductDetails";

const API_URL = "http://localhost:5001/api/cart";

export const addToCart = async (product: IProductDetails): Promise<void> => {
  await axios.post(API_URL, product);
};

export const removeFromCart = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
