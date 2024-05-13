/* exported toObject */
function toObject(keyValuePair: [string, any]): { [key: string]: any } {
  const obj: { [key: string]: any } = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
