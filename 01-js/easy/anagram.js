/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    if(str1.length!=str2.length)return false;
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    const count =new Array(26);
    count.fill(0);

    for(let i=0;i<str1.length;i++){
      let char =str1[i];
      let unichar=char.charCodeAt(0);
      let a_uni='a'.charCodeAt(0);
      count[unichar-a_uni]++;


    }
    for(let i=0;i<str2.length;i++){
      let char =str2[i];
      let unichar=char.charCodeAt(0);
      let a_uni='a'.charCodeAt(0);
      count[unichar-a_uni]--;
    }

    for (let i = 0; i < 26; i++) {
      if(count[i]!==0){
        return false;
      }
      
    }
    return true;
}

module.exports = isAnagram;
