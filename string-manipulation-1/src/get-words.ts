/* exported getWords */
function getWords(string: string){
  return string.split(' ').filter(word=> word!== '')
}
