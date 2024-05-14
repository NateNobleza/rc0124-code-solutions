/* exported invert */
function invert<T extends { toString(): string }>(source: {
  [key: string]: T;
}): { [key: string]: string } {
  const result: { [key: string]: string } = {};

  for (const key in source) {
    const value = source[key].toString();
    result[value] = key;
  }

  return result;
}
