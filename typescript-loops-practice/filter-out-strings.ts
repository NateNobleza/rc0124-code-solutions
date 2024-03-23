/* exported filterOutStrings */
function filterOutStrings(values: any[]): any[] {
  return values.filter((value) => typeof value !== 'string');
}
