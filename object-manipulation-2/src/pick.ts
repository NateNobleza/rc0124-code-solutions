/* exported pick */
function pick<T>(
  source: { [key: string]: T },
  keys: string[]
): { [key: string]: T } {
  const result: { [key: string]: T } = {};

  for (const key of keys) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];
      if (value !== undefined) {
        result[key] = value;
      }
    }
  }

  return result;
}
