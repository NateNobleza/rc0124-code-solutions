/* exported isLowerCased */
function isLowerCased(word: string){
  for (let i = 0; i < word.length; i++){
    if (word[i] !== word[i].toLocaleLowerCase()){
      return false;
    }
  }
  return true;
}
