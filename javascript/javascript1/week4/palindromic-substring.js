function isPalindrome(string) {
  const reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

function findLongestPalindromicSubstring(string) {}

console.log(findLongestPalindromicSubstring('forgeeksskeegfor'));
