function reverseString(string) {
  const split = string.split("");
  const reverse = split.reverse();
  const backwards = reverse.join("");

  return backwards;
  
  // if (string === backwards) {
  //   return true;
  // }
  // else {
  //   return false;
  // }
}

function isPalindrome(string) {
  const reversed = reverseString(string);

  if (reversed === string) {
    return true
  }
  else {
    return false
  }
}