import { List, Select, Space } from "antd";
import type React from "react";
import type { FilterType } from "../../types/products";

type SelectFilterConfig = {
label: string;
key: string;
data: FilterType[];
setter: React.Dispatch<React.SetStateAction<string[]>>
}

interface SelectFilterProps {
    brandList: FilterType[]; 
    tagList: FilterType[]; 
    setSelectedBrands:React.Dispatch<React.SetStateAction<string[]>>;
    setSelectedTags:React.Dispatch<React.SetStateAction<string[]>>;
}
const SelectFilter: React.FC<SelectFilterProps> = ({brandList, tagList, setSelectedBrands, setSelectedTags}) => {
    const options: SelectFilterConfig[] = [
    {label: "Select brand", key: "brand", data: brandList, setter: setSelectedBrands },
    {label: "Select tag", key: "tag", data: tagList, setter: setSelectedTags}
]
  return (
    <List dataSource={options} renderItem={(item) => (
        <List.Item>
            <span>{item.label}</span>
            <Space wrap>
      <Select
      mode="multiple"
      style={{width: 160}}
      onChange={item.setter}
      options={item.data}
      />
    </Space>
        </List.Item>
    )} />
  )
}

export default SelectFilter
