import { Switch } from "antd";
import { toggleGroupeBy } from "../../utils/toggleGroupeBy";
import type { GroupBy } from "../../types/products";
// import SelectElement from "./SelectElement";

interface ProductFiltersProps {
  groupBy: string | null;
  setGroupBy: React.Dispatch<React.SetStateAction<GroupBy>>;
  //   brandList: string[];
  //   tagList: string[];
  //   setSelectedBrands: React.Dispatch<React.SetStateAction<GroupBy>>;
  //   setSelectedTags: React.Dispatch<React.SetStateAction<GroupBy>>;
}
const ProductFilters: React.FC<ProductFiltersProps> = ({
  groupBy,
  setGroupBy,
  //   brandList,
  //   tagList,
  //   setSelectedBrands,
  //   setSelectedTags,
}) => {
  return (
    <>
      <ul>
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
            checked={groupBy === "type"}
            onChange={toggleGroupeBy("type", setGroupBy)}
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

      {/* <SelectElement
        filterArray={brandList}
        setSelectedFilter={setSelectedBrands}
      />
      <SelectElement
        filterArray={tagList}
        setSelectedFilter={setSelectedTags}
      /> */}
    </>
  );
};

export default ProductFilters;
