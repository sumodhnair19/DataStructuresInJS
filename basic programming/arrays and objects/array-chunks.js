/**
 * [1, 2, 3, 4, 5], 2 => [[1,2], [3,4], [5]]
 * 
 */

/**
 * without slice
 * 
 */

function splitArrayIntoChunks(arr, chunkLength){
    const chunked = [];
  
    for(let char of arr){
        let last = chunked[chunked.length - 1];
        
        if(!last || last.length === chunkLength){
            chunked.push([char]);
        }else{
            last.push(char);
        }
    }
    return chunked;
}

/**
 * using slice
 * 
 */

function splitArrayIntoChunks(arr, chunkLength){
    let i= 0, chunked = [];
    while (i < arr.length){
        chunked.push(arr.slice(i,i+chunkLength));
        i += chunkLength;
    }
    return chunked; 
}

//Test it as:
splitArrayIntoChunks([1, 2, 3, 4, 5, 6], 4)
