import { useEffect, useMemo, useState } from "react";
import type { GroupBy, Product } from "./types/products";
import { fetchProducts } from "./api/products.api";
import ProductsTable from "./components/ProductTable/ProductsTable";
import { getUniqueOptions } from "./utils/getUniqueOptions";
import ProductFilters from "./components/ProductFilters/ProductFilters";
import { groupeProductList } from "./utils/groupeProductList";
import Loader from "./components/Loader/Loader";
import { getUniqueArrayOptions } from "./utils/getUniqueArrayOptions";
import { Layout } from 'antd';
const { Content } = Layout;

function App() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [brands, setBrands] = useState<{value: string}[]>([]);
  const [tags, setTags] = useState<{value: string}[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
  useEffect(() => {
    if (!allProducts.length) return;

    const brandsResult = getUniqueOptions(allProducts, "brand");
    const tagsResult = getUniqueArrayOptions(allProducts, "tag_list");
    setBrands(brandsResult);
    setTags(tagsResult)
  }, [allProducts]);
const visibleProducts = useMemo(() => { let result = [...allProducts]
  result = groupeProductList(allProducts, groupBy)
  if(selectedBrands.length){
    result = result.filter(item => selectedBrands.includes(item.brand))
  }
  if(selectedTags.length){
    result = result.filter(item => item.tag_list?.some(tag => selectedTags.includes(tag)))
    return result;
  }
}, [allProducts, groupBy, selectedBrands, selectedTags])
  
  return (
    <Layout>
      <Content style={{ padding: 20 }}>
       {loading && <Loader/>}
    {error && <p>{error}</p> }
      Product-table
      <ProductFilters groupBy={groupBy} setGroupBy={setGroupBy} brandList={brands} tagList={tags} setSelectedBrands={setSelectedBrands} setSelectedTags={setSelectedTags} />
      <ProductsTable products={visibleProducts} /> 
      </Content>
    </Layout>
  );
}

export default App;
