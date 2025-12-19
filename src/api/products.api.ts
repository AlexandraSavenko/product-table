// src/api/products.api.ts
import axios from "axios";
export const fetchProducts = async (params?: {
  brands?: string[];
  tags?: string[];
}) => {

  const data = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline", {params});
  return data;
};
