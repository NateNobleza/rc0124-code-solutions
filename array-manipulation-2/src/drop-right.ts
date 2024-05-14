/* exported dropRight */
function drop<T>(array: T[], count: number): T[] {
  // Check if count is greater than or equal to the length of the array
  if (count >= array.length) {
    // Return an empty array
    return [];
  }
  // Return a new array containing the elements after the first count elements
  return array.slice(count);
}
