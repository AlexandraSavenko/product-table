import type { VercelRequest, VercelResponse } from "@vercel/node";
import { fetchProductsFromAPI } from "../src/api/products.api";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const response = await fetchProductsFromAPI()
  res.status(200).json(response);
}