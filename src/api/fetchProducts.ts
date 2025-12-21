import axios from "axios";
import type { Product } from "../types/products";


export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get("/api/products");
  console.log(response.data)
  return response.data;
};
