function mergeSort(arr){
    if (arr.length < 2) return arr;
    let mid = Math.floor((arr.length)/2);
    return _merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid))); 
}

function _merge(left, right){
    let merged = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            merged.push(left.shift());
        }else{
            merged.push(right.shift());
        }
    }
    while(left.length){
        merged.push(left.shift());
    }
    while(right.length){
        merged.push(right.shift());
    }
    return merged;
}