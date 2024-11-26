import { DetailsModel, ProductsModel } from "../models/ProductsModel.mjs";
import { fetchData } from "../utilities/httpClient.mjs";

export const listProducts = async (req, res) => {
  const items = [];
  try {
    const result = await fetchData("products");
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

export const findProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await fetchData(`products/${id}`);
      const item = new DetailsModel(
        result.id,
        result.title,
        result.image,
        result.price,
        result.quantity,
        result.in_stock,
        result.description
      );
      res.status(200).json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
