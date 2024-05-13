/* exported getValue */
function getValues(object: { [key: string]: any }): any[] {
  const values: any[] = [];

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      values.push(object[key]);
    }
  }

  return values;
}
