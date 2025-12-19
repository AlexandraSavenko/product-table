import { Table } from 'antd';
import type { Product } from '../../types/products'
import { productColumns } from './columns';

const ProductsTable = ({products}: {products: Product[]}) => {
  return (
    <div>
      <Table dataSource={products} columns={productColumns}/>
    </div>
  )
}

export default ProductsTable
