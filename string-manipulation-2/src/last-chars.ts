/* exported lastChars */
function lastChars(length: number, string: string): string {
  if (length >= string.length) {
    return string;
  } else {
    return string.slice(-length);
  }
}
