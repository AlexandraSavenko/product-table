import type { Product } from "../types/products";

export const getUniqueOptions = <T extends Product>(
  items: T[],
  key: K
) => {
  return Array.from(
    new Set(items.map((item) => item[key]).filter(Boolean))
  ).map((value) => ({ value }));
};
