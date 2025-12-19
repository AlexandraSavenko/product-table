import type React from "react";
import type { GroupBy } from "../types/products";

export const toggleGroupeBy = (
  value: GroupBy,
  setGroupBy: React.Dispatch<React.SetStateAction<GroupBy>>
) => () => {
  setGroupBy((prev) => (prev === value ? null : value));
};
