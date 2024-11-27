import { IProduct } from "./IProduct";
export interface IProductDetails extends IProduct {
  quantity: number;
  in_stock: boolean;
  description: string;
}
