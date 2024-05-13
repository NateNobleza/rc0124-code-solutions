/* exported setValue */
function setValue(
  object: { [key: string]: any },
  key: string,
  value: any
): void {
  object[key] = value;
}
