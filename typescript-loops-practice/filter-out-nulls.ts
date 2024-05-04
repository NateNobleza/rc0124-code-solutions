/* exported filterOutNulls */
function filterOutNulls(values: any[]): any[] {
  return values.filter((value) => value !== null);
}
