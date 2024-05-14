/* exported omit */
function omit<T>(
  source: { [key: string]: T },
  keys: string[]
): { [key: string]: T } {
  const result: { [key: string]: T } = {};

  for (const key in source) {
    if (!keys.includes(key)) {
      result[key] = source[key];
    }
  }

  return result;
}
