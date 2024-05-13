/* exported head */
function head<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}
