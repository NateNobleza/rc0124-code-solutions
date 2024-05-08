/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false; // If any character is not uppercased, return false
    }
  }
  return true; // All characters are uppercased
}
