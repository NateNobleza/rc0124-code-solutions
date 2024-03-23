/* exported getElementAtIndex */
function getElementAtIndex(array: any[], index: number): any {
  if (index >= 0 && index < array.length) {
    return array[index];
  } else {
    return undefined;
  }
}
