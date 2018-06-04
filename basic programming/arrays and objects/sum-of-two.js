/**
 * From a unsorted array, check whether there are any two numbers that will sum up to a given number?
 * 
 */


 /**
  * Brute force
  * 
  */

 function sumOfTwo(arr, sum){
    let i = 0, j = 0, len = arr.length;
    
    for(i=0;i<len;i++){
      for(j=i+1;j<=len;j++){
        if(arr[i] + arr[j] === sum){
          return true;
        }
      }
    }
    return false;
  }


  /**
   * Store difference, then check if the differnce exists or not
   * If it exists, sum is possible, else not
   */

  function sumOfTwo(arr, sum){
    let i = 0, j = 0, len = arr.length, diff = 0, obj = {};
    
    for(i=0;i<len;i++){
      diff = sum - arr[i];
      
      if(obj[diff]){
        return true;
      }else{
        obj[arr[i]] = true;
      }
    }
    return false;
  }
  
  
  sumOfTwo([1, 2, 3, 4, 5, 4], 9);


