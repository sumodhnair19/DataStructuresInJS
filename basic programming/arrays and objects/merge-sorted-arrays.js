/**
 * using splice
 * 
 */

function mergeSortedArrays(arr1, arr2){
    //it's identical to queue weaving
    
    if(!arr1.length && !arr2.length) return;
    if(!arr1.length) return arr2;
    if(!arr2.length) return arr1;
    
    let i = 0, j = 0, merged = [];
    
    
    while(arr1.length && arr2.length){
      if(arr1[i] < arr2[j]){
        merged.push(arr1.splice(i,1)[0]);
      }else{
        merged.push(arr2.splice(i,1)[0]);
      }
    }
    
    while(arr1.length && !arr2.length){
         merged.push(arr1.splice(i,1)[0]);
    }
    
    while(arr2.length && !arr1.length){
       merged.push(arr2.splice(i,1)[0]);
    }
    
    return merged;
    
}

 /**
  * without using splice
  * 
  */
 function mergeSortedArrays(arr1, arr2){
  
    if(!arr1.length && !arr2.length) return;
    if(!arr1.length) return arr2;
    if(!arr2.length) return arr1;
    
    let i = 0, j = 0, merged = [], arr1El = arr1[0], arr2El = arr2[0];
    
    while(arr1El || arr2El){
        if((arr1El && !arr2El) || (arr1El < arr2El)){
          merged.push(arr1El);
          arr1El = arr1[++i];
        }else{
          merged.push(arr2El);
          arr2El = arr2[++j];
        }
    }
    return merged;
    
  }

  mergeSortedArrays([1, 2, 3, 10], [2, 5, 6, 13, 19]);