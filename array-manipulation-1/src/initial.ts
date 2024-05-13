/* exported initial */
function initial<T>(array: T[]): T[] {
  const initialArray: T[] = [];

  for (let i = 0; i < array.length - 1; i++) {
    initialArray.push(array[i]);
  }

  return initialArray;
}
