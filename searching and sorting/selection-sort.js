function selectionSort(arr){
    for(i=0;i<arr.length;i++){
        //get min in each iteration
        let min = _min(arr, i);

        //swap with the corresponding index
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

function _min(arr, idx){
    let min = idx;
    for(let i=idx;i<arr.length;i++){
        if(arr[i] < arr[min]){
            min = i;
        }
    }
    return min;
}