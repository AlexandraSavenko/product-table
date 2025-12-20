// src/api/products.api.ts
import axios from "axios";
import type { Product } from "../types/products";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json", );
  return response.data;
};
