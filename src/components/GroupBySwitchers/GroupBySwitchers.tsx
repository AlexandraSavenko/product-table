import type React from "react";
import type { GroupBy } from "../../types/products";
import { Switch, List } from "antd";
import { toggleGroupeBy } from "../../utils/toggleGroupeBy";

interface GroupBySwitchersProps {
    groupBy: GroupBy;
    setGroupBy: React.Dispatch<React.SetStateAction<GroupBy>>
}
type GroupByValue = Exclude<GroupBy, null>
const options: {label: string; key: GroupByValue}[] = [
  { label: "Brand", key: "brand" },
  { label: "Type", key: "product_type" },
  { label: "Category", key: "category" },
]

const GroupBySwitchers: React.FC<GroupBySwitchersProps> = ({groupBy, setGroupBy}) => {
    return <List dataSource={options} renderItem={(item) => (<List.Item>
      <span style={{flex: 1}}>{item.label}</span>
      <Switch
      checked={groupBy === item.key}
      onChange={toggleGroupeBy(item.key, setGroupBy)}
      />
    </List.Item>)}/>
}
export default GroupBySwitchers;