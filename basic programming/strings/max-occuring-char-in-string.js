function maxChar(str){
    let charMap = {};
    for(let char of str){
        charMap[char] = charMap[char] + 1 || 1;
    }

    //now loop over charmap and find the key having max value
    let max = 0, maxChar;
    for(char in charMap){
      if(charMap[char] > max){
        max = charMap[char];
        maxChar = char;
      }
    }
    return `${maxChar} occurred ${max} times and is the maximum`;
}