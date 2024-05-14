/* exported takeRight */
function takeRight<T>(array: T[], count: number): T[] {
  // If count is greater than or equal to the length of the array, return a shallow copy of the entire array
  if (count >= array.length) {
    return array.slice();
  }
  // Return a new array containing the last count elements
  return array.slice(array.length - count);
}
