const isPalindrome = (str) =>
  str.toLowerCase().split('').reverse().join('') == str.toLowerCase();

function getLongestPalindrome(str) {
  let longestSubstr = '';
  //Loop through every characters of string
  for (let i = 0; i < str.length; i++) {
    //loop through all lengths, starting from string length (then minus i)
    for (let j = str.length - i; j > 0; j--) {
      const substr = str.substr(i, j);
      if (isPalindrome(substr) && substr.length > longestSubstr.length) {
        longestSubstr = substr;
        if (longestSubstr.length === str.length) return longestSubstr; //to stop loop if all string is palindrome
      }
    }
  }
  return longestSubstr;
}

console.log(getLongestPalindrome('level')); //level
console.log(getLongestPalindrome('babad')); //bab
console.log(getLongestPalindrome('cbbd')); //bb
console.log(getLongestPalindrome('debbebbeke')); //ebbebbe
console.log(getLongestPalindrome('ac')); //a
console.log(getLongestPalindrome('')); //''
