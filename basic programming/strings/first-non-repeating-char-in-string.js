function firstNonRepeatingChar(str){
    let charMap = {};
    for(let char of str){
      charMap[char] = charMap[char] + 1 || 1; 
    }
    for(let key in charMap){
      if(charMap[key] === 1){
        return key;
      }
    }
    return "No non repeating characters";
}