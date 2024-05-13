/* exported tail */
function tail<T>(array: T[]): T[] {
  if (array.length <= 1) {
    return [];
  }

  const tailArray: T[] = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
}
