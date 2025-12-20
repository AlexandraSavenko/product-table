import type { GroupBy, Product } from "../types/products";

export const groupeProductList = (list: Product[], groupBy: GroupBy) => {
    if(!groupBy) return list;
 return [...list].sort((a, b) => String(a[groupBy]).localeCompare(String(b[groupBy])))
}