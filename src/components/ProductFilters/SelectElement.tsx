import { Select, Space } from 'antd';
import type { FilterType } from '../../types/products';
import type React from 'react';

interface SelectElementProps {
  filterArray: FilterType[];
 setSelectedFilter: React.Dispatch<React.SetStateAction<string[]>>;
}
const SelectElement: React.FC<SelectElementProps> = ({filterArray,
  setSelectedFilter}) => {
  return (
    <Space wrap>
      <Select
      mode="multiple"
      style={{width: 160}}
      onChange={setSelectedFilter}
      options={filterArray}
      />
    </Space>
  )
}

export default SelectElement;
