import { Switch } from "antd";
import { toggleGroupeBy } from "../../utils/toggleGroupeBy";
import type { GroupBy } from "../../types/products";
import SelectElement from "./SelectElement";

interface ProductFiltersProps {
  groupBy: string;
  setGroupBy: React.Dispatch<React.SetStateAction<GroupBy>>;
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<GroupBy>>;
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<GroupBy>>;
}
const ProductFilters: React.FC<ProductFiltersProps> = ({
  groupBy,
  setGroupBy,
  selectedBrands,
  setSelectedBrands,
  selectedTags,
  setSelectedTags,
}) => {
  return (
    <div>
      <Switch
        checked={groupBy === "brand"}
        onChange={toggleGroupeBy("brand", setGroupBy)}
      />
      <Switch
        checked={groupBy === "type"}
        onChange={toggleGroupeBy("type", setGroupBy)}
      />
      <Switch
        checked={groupBy === "category"}
        onChange={toggleGroupeBy("category", setGroupBy)}
      />
      <SelectElement
        filterArray={selectedBrands}
        setSelectedFilter={setSelectedBrands}
      />
      <SelectElement
        filterArray={selectedBrands}
        setSelectedFilter={setSelectedBrands}
      />
    </div>
  );
};

export default ProductFilters;
