/* exported chunk */
function chunk<T>(array: T[], size: number): T[][] {
  // Create an array to store the chunks
  const chunks: T[][] = [];

  // Iterate over the input array and create chunks of the specified size
  for (let i = 0; i < array.length; i += size) {
    // Use Array.prototype.slice to extract a chunk of the array
    const chunk = array.slice(i, i + size);
    // Push the chunk to the chunks array
    chunks.push(chunk);
  }

  return chunks;
}
