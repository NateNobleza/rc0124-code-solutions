/* exported getFirstElement */
function getFirstElement(array: any[]): any {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
}
