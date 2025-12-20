import type { Product } from "../types/products";

export const getUniqueOptions = <T extends Product>(
  items: T[],
  key: keyof T
) => {
    // return items.map((item) => item[key]);
  return Array.from(
    new Set(items.map((item) => item[key]).filter(Boolean))
  ).map((value) => ({ lable: value, value }));
};
