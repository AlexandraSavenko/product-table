import ProductsTable from "../components/ProductTable/ProductsTable"
import type { Product } from "../types/products"

const ProductsPage = () => {
const [allProducts, setAllProducts] = useState<Product[]>([]);
const [visibleProducts, setVisibleProducts] = useState<Product[]>([])
const [selectedBrands, setSelectedBrands] = useState<string[]>([])
const [selectedTag, setSelectedTag] = useState<string[]>([])
const [selectedOrderValue, setSelectedOrderValue] = useState<string[]>([])
  useEffect(() => {
    fetchProducts().then(data => {
      console.log("App data from fetchProducts", data.data)
      setAllProducts(data.data);
    setVisibleProducts(data.data)})
    
  }, [])

  return (
    <>
    <h1>Products page</h1>
      <ProductsTable/>
    </>
  )
}

export default ProductsPage

console.log("Hello")