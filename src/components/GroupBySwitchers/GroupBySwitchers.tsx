import type React from "react";
import type { GroupBy } from "../../types/products";
import { Switch } from "antd";
import { toggleGroupeBy } from "../../utils/toggleGroupeBy";

interface GroupBySwitchersProps {
    groupBy: GroupBy;
    setGroupBy: React.Dispatch<React.SetStateAction<GroupBy>>
}

const GroupBySwitchers: React.FC<GroupBySwitchersProps> = ({groupBy, setGroupBy}) => {
    return <ul>
        <li>
          <span>Brand</span>
          <Switch
            checked={groupBy === "brand"}
            onChange={toggleGroupeBy("brand", setGroupBy)}
          />
        </li>
        <li>
          <span>Type</span>
          <Switch
            checked={groupBy === "product_type"}
            onChange={toggleGroupeBy("product_type", setGroupBy)}
          />
        </li>
        <li>
          <span>Category</span>
          <Switch
            checked={groupBy === "category"}
            onChange={toggleGroupeBy("category", setGroupBy)}
          />
        </li>
      </ul>
}
export default GroupBySwitchers;