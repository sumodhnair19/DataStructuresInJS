function quickSort(arr){
    if(arr.length < 2) return arr;
    let pivot = arr.splice(arr.length - 1, 1)[0],
        left = [],
        right = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] <= pivot){
            left.push(arr[i]);
        }else if(arr[i] > pivot){
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}