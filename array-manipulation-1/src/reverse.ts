/* exported reverse */
function reverse<T>(array: T[]): T[] {
  const reversedArray: T[] = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }

  return reversedArray;
}
