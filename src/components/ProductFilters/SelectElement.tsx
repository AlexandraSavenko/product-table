import { Select, Space } from 'antd';

const SelectElement = ({filterArray,
  setSelectedFilter}) => {
  return (
    <Space wrap>
      <Select
      style={{width: 120}}
      onChange={setSelectedFilter}
      options={filterArray}
      />
    </Space>
  )
}

export default SelectElement;
