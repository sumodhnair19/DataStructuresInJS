function binarySearch(arr, el){
    let left = 0, 
        right = arr.length - 1, 
        mid;
    
    while(left <= right){
        mid = left + Math.floor((right - left)/2); //makes sense
        if (arr[mid] === el){
            return mid;
        }else if(arr[mid] < el){
            left = mid + 1;
        }else if(arr[mid] > el){
            right = mid - 1;
        }
    }
    return -1;
}