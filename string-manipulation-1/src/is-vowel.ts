/* exported isVowel */
function isVowel(char: string){
  const lowerCaseChar = char.toLocaleLowerCase();
  return lowerCaseChar === 'a' || lowerCaseChar === 'e' || lowerCaseChar === 'i' || lowerCaseChar === 'o' || lowerCaseChar === 'u'
}
