/**
 * Using Arrays
 * 
 */
function countVowels(str){
    let vowels = ["a", "e", "i", "o", "u"],
        count = 0;

    for(char of str){
        if(vowels.includes(char)){
        count++;
        }
    }
    return count;
}

/**
 * Using Strings
 * 
 */
function countVowels(str){
    let vowels = "aeiou",
        count = 0;

    for(char of str){
        if(vowels.includes(char)){
        count++;
        }
    }
    return count;
}

/**
 * Using Regular Expressions
 * 
 */

function countVowels(str){
    if(!str.match(/[aeiou]/gi)) return 0;
    return str.match(/[aeiou]/gi).length;
}
