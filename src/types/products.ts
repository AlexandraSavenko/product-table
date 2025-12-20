export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  product_type: string;
  price: string;
  image_link: string;
  tag_list: string[];
  product_colors: {
    hex_value: string;
    colour_name: string | null;
  }[];
}

export type GroupBy = "brand" | "category" | "product_type" | null

export interface FilterType {
  value: string
}
// export type ProductView = Pick<ApiProduct,
//   "id" | "name" | "brand" | "category" | "product_type" |
//   "price" | "image_link" | "tag_list" | "product_colors"
// >;
