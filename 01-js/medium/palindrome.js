/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  const chars= new Array();
  for (let index = 0; index < str.length; index++) {
    let char=str[index].charCodeAt(0);
    if(char>=97 && char<=122){
      chars.push(char);
    }
    
  }
  let i=0,j=chars.length-1;
  while(i<=j){
    if(chars[i]!=chars[j]){
      return false;
    }
    i++;
    j--;
  }

    return true;
}

module.exports = isPalindrome;
