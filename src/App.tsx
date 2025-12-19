import { useEffect, useState } from "react";
import type { GroupBy, Product } from "./types/products";
import { fetchProducts } from "./api/products.api";
import ProductsTable from "./components/ProductTable/ProductsTable";

function App() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [groupBy, setGroupBy] = useState<GroupBy>(null)

  useEffect(() => {
    fetchProducts().then((data) => {
      setAllProducts(data.data);
      setVisibleProducts(data.data);
    });
  }, []);
  return (
    <>
      Product-table

      <ProductsTable products={visibleProducts} />
    </>
  );
}

export default App;
