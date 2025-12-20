import { useEffect, useMemo, useState } from "react";
import type { GroupBy, Product } from "./types/products";
import { fetchProducts } from "./api/products.api";
import ProductsTable from "./components/ProductTable/ProductsTable";
import { getUniqueOptions } from "./utils/getUniqueOptions";
import ProductFilters from "./components/ProductFilters/ProductFilters";
import { groupeProductList } from "./utils/groupeProductList";
import Loader from "./components/Loader/Loader";

function App() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const [brands, setBrands] = useState<string[]>([]);
  // const [tags, setTags] = useState<string[]>([])
  // const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  // const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [groupBy, setGroupBy] = useState<GroupBy>(null);
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProducts()
        setAllProducts(data)
      } catch{
        setError("Failed to load products")
      }finally{
        setLoading(false)
      }
    }
    loadProducts()
  }, []);
//   const brandOptions = useMemo(
//   () => getUniqueOptions(allProducts, "brand"),
//   [allProducts]
// );
const visibleProducts = useMemo(() => { return groupeProductList(allProducts, groupBy)}, [allProducts, groupBy])
  useEffect(() => {
    if (!allProducts.length) return;
    const brands = getUniqueOptions(allProducts, "brand");
    const tags = getUniqueOptions(allProducts, "tag_list");
  }, [allProducts]);
  return (
    <>
    {loading && <Loader/>}
      Product-table
      <ProductFilters groupBy={groupBy} setGroupBy={setGroupBy} />
      <ProductsTable products={visibleProducts} />
    </>
  );
}

export default App;
