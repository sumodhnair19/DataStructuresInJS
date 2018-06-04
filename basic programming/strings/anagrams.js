/**
 * using character maps
 * 
 */
function checkAnagrams(str1, str2){
    if(!(str1.length === str2.length)) return false;
    
      let charMap1 = {}, charMap2 = {};
      for(let char of str1){
          charMap1[char] = charMap1[char] + 1 || 1;
      }
      for(let char of str2){
          charMap2[char] = charMap2[char] + 1 || 1;
      }
      
      for(char in charMap1){
          if(charMap1[char] !== charMap2[char]){
            return false;
          }
      }
      
      return true;
  }



 /**
  * using sort
  * 
  */
 function checkAnagrams(str1, str2){
    let s1 = str1.split('').sort().join(''),
        s2 = str2.split('').sort().join('');
    
    return s1 === s2;
  }