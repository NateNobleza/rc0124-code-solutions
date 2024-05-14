/* exported includes */
function includes<T>(array: T[], value: T): boolean {
  for (const item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
}
