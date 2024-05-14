/* exported numVowels */
function numVowels(string: string): number {
    // Define a regular expression to match vowels
    const vowelsRegex = /[aeiou]/gi;
    // Use the match method with the regular expression to find all vowels in the string
    const matches = string.match(vowelsRegex);
    // If matches is null, return 0; otherwise, return the length of the matches array
    return matches ? matches.length : 0;
}
