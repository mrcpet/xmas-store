import { ProductsModel } from "../models/ProductsModel.mjs";
import { fetchData, postData } from "../utilities/httpClient.mjs";

export const listCart = async (req, res) => {
  const items = [];
  try {
    const result = await fetchData("cart");
    result.map((item) => {
      items.push(
        new ProductsModel(item.id, item.title, item.image, item.price)
      );
    });
    res.status(200).json({ success: true, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: `${error}` });
  }
};

export const addProduct = async (req, res) => {
  //get body from frontend, use id,
  const body = req.body;
  console.log("REQUEST BODY:", body);
  try {
    let item = new ProductsModel(body.id, body.title, body.image, body.price);
    await postData("cart", item);
    res.status(201).json({ success: true, data: item });
    return;
  } catch (error) {
      console.log("ERROR", error)
    res.status(500).json({ success: false, message: error });
  }
};
