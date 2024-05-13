/* exported getValues */

function getValue(object: { [key: string]: any }, key: string): any {
  return object[key];
}
