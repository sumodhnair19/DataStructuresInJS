/* 
Using split
*/
function reverseString(str){
    return str.split('').reverse().join('');
}

/* 
Using for.. of loop
*/
function reverseString(str){
    let rev = "";
    for(let char of str){
        rev = char + rev;
    }
    return rev;
}

/*
Using reduce method
*/
function reverseString(str){
    return str.split('').reduce((rev, char) => {
        return rev = char + rev;
    }, '');
}