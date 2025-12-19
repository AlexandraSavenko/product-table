import type { ColumnsType } from "antd/es/table";
import type { Product } from "../../types/products";



export const productColumns: ColumnsType<Product> = [
  {
    title: "Image",
    key: "image",
    render: (_, record) => (
      <img
        src={record.image_link}
        alt={record.name}
        style={{ width: 50, height: 50, objectFit: "cover" }}
      />
    ),
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: value => value ?? "—",
  },
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
    render: value => value ?? "—",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: value => (value ? `$${value}` : "—"),
  },
  {
    title: "Product Type",
    dataIndex: "product_type",
    key: "product_type",
  },
];
