/**
 * Brute force
 * 
 */
function RemoveDuplicate(arr){
    let i, len = arr.length, tempArr = [];
	for(i=0;i<len;i++){
		if(tempArr.indexOf(arr[i]) === -1){
			tempArr.push(arr[i]);
		}
	}
	return tempArr;
}


/**
 * Using sort
 * 
 */
function RemoveDuplicate(arr){
    let sortedArr = arr.sort(), i, temp, tempArr = [], len = sortedArr.length;
	for(i = 0;i<len;i++){
		temp = sortedArr[i];
		if(sortedArr[i+1] !== temp){
			tempArr.push(sortedArr[i]);
		}
	}
	return tempArr;
}



/**
 * Using Objects
 * 
 */
function RemoveDuplicate(arr){
    let obj = {}, i, len = arr.length;
	for(i of arr){
		obj[i] = true;
	}
	return Object.keys(obj);
}



/**
* Using Sets
* 
*/
function RemoveDuplicate(arr){
    /**/
	const set1 = new Set(arr);
	return [...set1];
}


