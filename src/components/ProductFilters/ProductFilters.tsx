import type { FilterType, GroupBy } from "../../types/products";
import GroupBySwitchers from "../GroupBySwitchers/GroupBySwitchers";
import SelectElement from "./SelectElement";

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
    <>
      <GroupBySwitchers groupBy={groupBy} setGroupBy={setGroupBy} />

<ul>
  <li><span>Select a tag</span>
  <SelectElement
        filterArray={tagList}
        setSelectedFilter={setSelectedTags}
      />
  </li>
  <li><span>Select a brand</span>
  <SelectElement
        filterArray={brandList}
        setSelectedFilter={setSelectedBrands}
      />
  </li>
</ul>
      
      
    </>
  );
};

export default ProductFilters;
