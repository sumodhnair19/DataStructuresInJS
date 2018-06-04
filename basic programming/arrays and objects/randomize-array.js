/**
 * Fisher-Yates (aka Knuth) Shuffle
 * 
 * pick a possible index from array in each iteration
 * swap it with the element at the current position in loop
 * this way we'll have randomized elements
 */

function randomizeArray(arr){
    let len = arr.length - 1, temp = [];
    
    while(len > 0){
      //generate random index from all possible indices  
      let i = Math.floor(Math.random() * len);
      
      //swap
      temp[len] = arr[len];
      arr[len] = arr[i];
      arr[i] = temp[len];
      
      len--;
    }
    return arr;
}