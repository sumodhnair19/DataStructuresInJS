function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        for(j=0;j<i;j++){
            if(arr[i] < arr[j]){
                let temp = arr.splice(i, 1);
                arr.splice(j, 0, temp[0]);
            }
        }
    }
    return arr;
}