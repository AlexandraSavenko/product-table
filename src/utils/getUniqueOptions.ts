import type { Product } from "../types/products";

// export const getUniqueOptions = <T extends Product>(
//   items: T[],
//   key: K
// ) => {
//   return Array.from(
//     new Set(items.map((item) => item[key]).filter(Boolean))
//   ).map((value) => ({ value }));
// };
type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never
}[keyof T];

export const getUniqueOptions = <T extends Product, K extends StringKeys<T>>(
  items: T[],
  key: K
): { value: string }[] => {
  const values: string[] = [];

  for (const item of items) {
    const v = item[key];
    if (typeof v === "string") values.push(v);
  }

  return Array.from(new Set(values)).map(value => ({ value }));
};
