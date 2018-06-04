function binarySearch(arr, el, left, right){
    if(left <= right){
        let mid = left + Math.floor((right - left)/2);
        if(arr[mid] === el){
            return mid;
        }else if(arr[mid] < el){
            return binarySearch(arr, el, mid + 1, right);
        }else if(arr[mid] >  el){
             return binarySearch(arr, el, left, mid - 1);
        }
    }else {
        return -1;
    }
}