function removeDuplicate(str){
    let charMap = {};
    for(let char of str){
        charMap[char] = charMap[char] + 1 || 1;
    }
    
    return Object.keys(charMap).join('');
}

//think of another solutions