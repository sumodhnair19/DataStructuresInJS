/**
 * You have an array of numbers 1 to 100 in an array. Only one number is missing in the array. The array is unsorted. Find the missing number.
 * 
 */

function findMissingNumber(arr){
    let n = arr.length + 1,
        expected = n * (n+1)/2,
        sum = 0;
        
    for(let i = 0;i<n-1;i++){
      sum += arr[i];
    }
    
    return expected - sum;
  }
  
  findMissingNumber([1,2,3,5, 7, 8, 6, 4, 10]);