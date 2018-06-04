/**
 * U have a function which generates random nos between 1 and 5
 * Using it make a function which generates random nos between 5 and 7
 */

function rand5(){
    return 1 + Math.random() * 4;
 }
 
 function rand7(){
   return 5 + rand5() / 5 * 2; //simple arithmetic
 }