export const getUniqueArrayOptions = <T, K extends keyof T> (
  items: T[],
  key: K
): { value: string }[] => {
  return Array.from(
    new Set(items.flatMap((item) => item[key] as string[]).filter(Boolean))
  ).map((value) => ({ value }));
};
