/**
 *  find the largest sum of any two elements
 */

 /**
  * sort the array and return sum of first 2 els
  * 
  */

 function findLargestSum(arr){
    let sorted = arr.sort((a, b) => {
        return a < b;
    })
    return sorted[0] + sorted[1];
}

//think of alternate solution