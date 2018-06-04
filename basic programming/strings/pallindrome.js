/*
Reverse and compare
*/
function isPallindrome(str1, str2){
    return str1.split('').reverse().join('').toLowerCase() === str2.toLowerCase();
}

// try it by using character maps
// try it by using array.every