function compact(array: any[]): any[] {
  const compactedArray: any[] = [];

  for (const element of array) {
    if (
      element !== false &&
      element !== null &&
      element !== undefined &&
      !Number.isNaN(element) &&
      !Object.is(element, -0) &&
      !Object.is(element, 0) &&
      element !== ''
    ) {
      compactedArray.push(element);
    }
  }

  return compactedArray;
}
