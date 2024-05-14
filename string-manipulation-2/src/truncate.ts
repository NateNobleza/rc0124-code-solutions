/* exported truncate */
function truncate(length: number, string: string): string {
  if (string.length <= length) {
    return string + '...';
  } else {
    return string.slice(0, length) + '...';
  }
}
