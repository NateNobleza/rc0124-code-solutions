/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  // Convert string to an array of characters to facilitate swapping
  const chars = string.split('');

  // Check if the indices are within the bounds of the string
  if (
    firstIndex < 0 ||
    firstIndex >= string.length ||
    secondIndex < 0 ||
    secondIndex >= string.length
  ) {
    throw new Error('Index out of bounds');
  }

  // Swap the characters at the specified indices
  const temp = chars[firstIndex];
  chars[firstIndex] = chars[secondIndex];
  chars[secondIndex] = temp;

  // Convert the array of characters back to a string and return
  return chars.join('');
}
