import type { Product } from "../types/products";

export const getUniqueOptions = <T extends Product>(
  items: T[],
  key: keyof T
) => {
  return items.map((item) => item[key]);
};
