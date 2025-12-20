import type { FilterType, GroupBy } from "../../types/products";
import GroupBySwitchers from "../GroupBySwitchers/GroupBySwitchers";
import SelectFilter from "../SelectFilter/SelectFilter";
import {Row, Col} from "antd";

interface ProductFiltersProps {
  groupBy: GroupBy;
  setGroupBy: React.Dispatch<React.SetStateAction<GroupBy>>;
  brandList: FilterType[];
  tagList: FilterType[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}
const ProductFilters: React.FC<ProductFiltersProps> = ({
  groupBy,
  setGroupBy,
  brandList,
  tagList,
  setSelectedBrands,
  setSelectedTags,
}) => {
  return (
    <Row gutter={40}>
      <Col span={8}><GroupBySwitchers groupBy={groupBy} setGroupBy={setGroupBy} />
      </Col>
      <Col span={8}><SelectFilter
        brandList={brandList}
        tagList={tagList}
        setSelectedBrands={setSelectedBrands}
        setSelectedTags={setSelectedTags}
      />
      </Col>
      
    </Row>
  );
};

export default ProductFilters;
