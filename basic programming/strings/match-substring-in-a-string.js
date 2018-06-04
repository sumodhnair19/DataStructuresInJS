/**
 * using includes
 * Check if a string is a substring of another string
 */

function isSubstring(str, sub){
    return str.includes(sub);
}

/**
 * using match
 * If we want to return the index where match was found
 */
function isSubstring(str, sub){
    if(str.match(sub)){
      return str.match(sub).index;  
    }else{
      return null;
    }
  }
  

 /**
  * without using includes or match
  * 
  */
 function isSubstring(str, sub){
    let len = str.length, subLen = sub.length, j=0, idx=0;
    
    for(let i=0;i<len;i++){
        if(str[i] === sub[j]){
          j++;
        }else{
          j = 0;
        }
        
        if(j === 0){
          idx = i + 1; //keeping track of the starting point
        }else if(j === subLen){
          return idx; //if match found, return the start of match
        }
    }
    return -1;
  }