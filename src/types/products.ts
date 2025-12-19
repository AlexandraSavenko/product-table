export interface Product {
  id: number;
  name: string;
  brand: string | null;
  category: string | null;
  product_type: string;
  price: string;
  image_link: string;
  tag_list: string[];
  product_colors: {
    hex_value: string;
    colour_name: string | null;
  }[];
}

export type GroupBy = "brand" | "category" | "type" | null